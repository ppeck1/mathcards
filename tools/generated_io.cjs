/* Atomic writes for public generated artifacts. Never used by browser storage. */
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const pause = milliseconds =>
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, milliseconds);
const transientWindowsError = (error, platform) =>
  platform === 'win32' &&
  (['EACCES', 'EPERM', 'EBUSY', 'EINVAL', 'UNKNOWN'].includes(error?.code) ||
    error?.errno === -4094);

function createWriter({ filesystem = fs, platform = process.platform, sleep = pause } = {}) {
  function retry(operation) {
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        return operation();
      } catch (error) {
        if (attempt === 2 || !transientWindowsError(error, platform)) throw error;
        sleep(100 * (attempt + 1));
      }
    }
  }
  function removeTemporary(temporary) {
    return retry(() => {
      try {
        filesystem.unlinkSync(temporary);
      } catch (error) {
        if (error.code !== 'ENOENT') throw error;
      }
    });
  }
  return function writeGenerated(target, content) {
    const data = typeof content === 'string' ? Buffer.from(content, 'utf8') : content;
    if (!Buffer.isBuffer(data))
      throw new TypeError('Generated content must be a Buffer or UTF-8 string.');
    target = path.resolve(target);
    return retry(() => {
      try {
        if (filesystem.readFileSync(target).equals(data)) return false;
      } catch (error) {
        if (error.code !== 'ENOENT') throw error;
      }
      const directory = path.dirname(target);
      filesystem.mkdirSync(directory, { recursive: true });
      let temporary = path.join(
        directory,
        '.' + path.basename(target) + '.generated-' + crypto.randomBytes(8).toString('hex') + '.tmp'
      );
      let failure,
        owned = false;
      try {
        // Exclusive sibling staging preserves the old destination until rename.
        const descriptor = filesystem.openSync(temporary, 'wx', 0o644);
        owned = true;
        try {
          filesystem.writeFileSync(descriptor, data);
        } finally {
          filesystem.closeSync(descriptor);
        }
        filesystem.renameSync(temporary, target);
        temporary = null;
        return true;
      } catch (error) {
        failure = error;
        throw error;
      } finally {
        if (temporary !== null && owned) {
          try {
            removeTemporary(temporary);
          } catch (cleanup) {
            throw new AggregateError(
              [failure, cleanup].filter(Boolean),
              'Generated write or temporary-file cleanup failed.'
            );
          }
        }
      }
    });
  };
}

module.exports = Object.freeze({
  writeGenerated: createWriter(),
  createWriter,
  transientWindowsError
});

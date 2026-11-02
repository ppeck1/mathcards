"""Atomic, deterministic writes for generated public artifacts only.

These helpers are not used for personal notebooks or workspace backups. Strings
are encoded verbatim as UTF-8; generators remain responsible for emitting LF.
Each file replacement is atomic. A multi-file build is not a transaction.
"""
from __future__ import annotations

import errno
import os
from pathlib import Path
import tempfile
import time

_WINDOWS = os.name == 'nt'
_ATTEMPTS = 3


def _transient(error: OSError) -> bool:
    return _WINDOWS and (
        error.errno in {errno.EACCES, errno.EPERM, errno.EBUSY, errno.EINVAL}
        or getattr(error, 'winerror', None) in {5, 32, 33}
    )


def _retry(operation):
    for attempt in range(_ATTEMPTS):
        try:
            return operation()
        except OSError as error:
            if attempt == _ATTEMPTS - 1 or not _transient(error):
                raise
            time.sleep(0.1 * (attempt + 1))


def _remove_temporary(path: Path) -> None:
    def remove():
        try:
            path.unlink()
        except FileNotFoundError:
            pass
    _retry(remove)


def write_generated(target: Path | str, data: bytes | str) -> bool:
    """Return False for identical bytes, True after a completed atomic replace.

    Retry only recognized Windows sharing/permission/EINVAL failures, at most
    three times. Persistent and unrelated errors are propagated. Failed staging
    never truncates the previous destination, and temporary files are cleaned.
    """
    path = Path(target)
    if isinstance(data, str):
        data = data.encode('utf-8')
    if not isinstance(data, bytes):
        raise TypeError('Generated content must be bytes or a UTF-8 string.')

    def attempt():
        try:
            if path.read_bytes() == data:
                return False
        except FileNotFoundError:
            pass
        path.parent.mkdir(parents=True, exist_ok=True)
        descriptor, name = tempfile.mkstemp(
            prefix='.' + path.name + '.generated-', suffix='.tmp', dir=path.parent
        )
        temporary = Path(name)
        failure = None
        try:
            # Public generated files stay readable after replacing a 0600
            # mkstemp file. Never change permissions on the destination itself.
            with os.fdopen(descriptor, 'wb') as stream:
                stream.write(data)
            os.chmod(temporary, 0o644)
            os.replace(temporary, path)
            temporary = None
            return True
        except BaseException as error:
            failure = error
            raise
        finally:
            if temporary is not None:
                try:
                    _remove_temporary(temporary)
                except OSError as cleanup_error:
                    cleanup_error.add_note('Could not clean generated temporary file: ' + str(temporary))
                    if failure is not None:
                        raise cleanup_error from failure
                    raise

    return _retry(attempt)

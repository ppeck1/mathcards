/* Build-only validation: editorial links name definitions, never lesson IDs. */
'use strict';

function validateReferenceAuthoring({ entries, sources } = {}) {
  if (!Array.isArray(entries) || !sources || typeof sources !== 'object')
    throw new TypeError('Reference authoring needs entries and a source dictionary.');
  const ids = new Set();
  for (const entry of entries) {
    if (!entry || typeof entry.id !== 'string' || !entry.id || ids.has(entry.id))
      throw new TypeError('Reference definitions need unique nonempty IDs.');
    ids.add(entry.id);
  }
  for (const entry of entries) {
    const related = entry.relatedIds || [];
    if (!Array.isArray(related) || new Set(related).size !== related.length)
      throw new TypeError(entry.id + ': related definitions must be a unique list.');
    for (const id of related)
      if (!ids.has(id) || id === entry.id)
        throw new RangeError(entry.id + ': unknown or self-related definition ' + id);
    if (!Array.isArray(entry.sourceKeys))
      throw new TypeError(entry.id + ': declare definition source keys.');
    for (const key of entry.sourceKeys)
      if (!Object.hasOwn(sources, key))
        throw new RangeError(entry.id + ': unknown definition source ' + key);
  }
  return true;
}

module.exports = { validateReferenceAuthoring };

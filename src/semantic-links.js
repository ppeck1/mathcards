/* Exact quantity bindings shared by grammar, story and playground modules. */
(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasSemanticLinks = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const tokens = value => typeof value === 'string' ? value.trim().split(/\s+/).filter(Boolean) : [];
  function requested(keys) {
    const values = typeof keys === 'string' ? [keys] : Array.isArray(keys) || keys instanceof Set ? [...keys] : [];
    return new Set(values.flatMap(tokens));
  }
  function nodes(container, selector) {
    return container && typeof container.querySelectorAll === 'function' ? [...container.querySelectorAll(selector)] : [];
  }
  function clear(container) {
    let count = 0;
    for (const node of nodes(container, '[data-semantic-active]')) {
      if (node.getAttribute('data-semantic-active') === 'true') count++;
      node.removeAttribute('data-semantic-active');
    }
    return count;
  }
  function paint(container, keys) {
    const selected = requested(keys), marked = nodes(container, '[data-quantity]');
    const matched = new Set(marked.filter(node => tokens(node.getAttribute('data-quantity')).some(key => selected.has(key))));
    // Clear a previous mark even if its quantity binding was removed by an update.
    for (const node of nodes(container, '[data-semantic-active]')) {
      if (!matched.has(node)) node.removeAttribute('data-semantic-active');
    }
    for (const node of matched) {
      if (node.getAttribute('data-semantic-active') !== 'true') node.setAttribute('data-semantic-active', 'true');
    }
    return matched.size;
  }
  function quantities(container) {
    return [...new Set(nodes(container, '[data-quantity]').flatMap(node => tokens(node.getAttribute('data-quantity'))))].sort();
  }
  return Object.freeze({ paint, clear, quantities });
});

/* Text follows at a reading pace; geometry keeps its own continuous clock. */
(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasReadableValues = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  function format(value, {settled = false, precision} = {}) {
    if (value == null) return 'Undefined';
    if (typeof value !== 'number') return String(value);
    if (!Number.isFinite(value)) return 'Unavailable';
    if (value === 0) return '0';
    const digits = Number.isInteger(precision) ? Math.max(0, Math.min(12, precision)) : settled ? 6 : 2;
    const magnitude = Math.abs(value);
    let rounded;
    if (settled) rounded = Number(value.toPrecision(Math.max(1, digits)));
    else if (magnitude < Math.pow(10, -digits)) rounded = Number(value.toPrecision(2));
    else rounded = Number(value.toFixed(digits));
    // Tiny quantities stay visible, including a near-zero derivative step.
    if (Math.abs(rounded) < 1e-6 || Math.abs(rounded) >= 1e12) {
      return rounded.toExponential(settled ? Math.max(0, digits - 1) : 1).replace(/\.?0+e/, 'e').replace('e+', 'e').replace(/^-/, '−');
    }
    return rounded.toLocaleString('en-US', {maximumFractionDigits: 20}).replace('-', '−');
  }
  function createPacer({intervalMs = 250, now = () => globalThis.performance.now()} = {}) {
    const interval = Number.isFinite(intervalMs) ? Math.max(0, intervalMs) : 250;
    let last = null;
    return Object.freeze({take({force = false, settled = false} = {}) {
      const time = now();
      if (last === null || force || settled || time < last || time - last >= interval) { last = time; return true; }
      return false;
    }});
  }
  // Existing renderers can keep authoring labels normally. Only decimal label text
  // is rounded here; integers, SVG coordinates, units, and accessibility values stay intact.
  function formatText(text, options = {}) {
    return String(text).replace(/[−-]?(?:(?:\d{1,3}(?:,\d{3})+|\d+)\.\d+(?:e[+−-]?\d+)?|\d+e[+−-]?\d+)/gi,
      token => format(Number(token.replace(/,/g, '').replace(/−/g, '-')), options));
  }
  // These helpers are used only by formula renderers. Prose formatting keeps
  // word hyphens and its existing API; no expression is evaluated here.
  function mathLiteral(text) {
    return String(text ?? '')
      .replace(/(\d(?:\.\d+)?)([eE])-([0-9]+)/g, '$1$2−$3')
      .replace(/(^|[\s=:+×*/^([{,;<>≤≥])-(?=\d|\.\d|[A-Za-zα-ωΑ-Ω(])/g, '$1−')
      .replace(/([\d)\]}])-(?=$|\s|\d|\.\d|\(|[A-Za-zα-ωΑ-Ω](?:$|[\s₀-₉_)\]};,+×*/^=<>≤≥]))/g, '$1−')
      .replace(/(^|[^A-Za-zα-ωΑ-Ω])([A-Za-zα-ωΑ-Ω])-(?=$|[A-Za-zα-ωΑ-Ω](?:$|[\s₀-₉_)\]};,+×*/^=<>≤≥]))/g, '$1$2−')
      .replace(/^\s*-\s*$/, value => value.replace('-', '−'))
      .replace(/\+\s*[−-]\s*(?=\d|\.\d|[A-Za-zα-ωΑ-Ω(])/g, '− ');
  }
  function mathTerm(value, {prefix = '', precededByValue = false, ...reading} = {}) {
    let literal = mathLiteral(prefix);
    const signedText = mathLiteral(format(value, reading));
    let text = signedText;
    if (typeof value === 'number' && Number.isFinite(value) && value < 0) {
      if (/\+\s*$/.test(literal)) {
        literal = literal.replace(/\+(\s*)$/, '−$1');
        text = mathLiteral(format(-value, reading));
      } else if (/−\s*$/.test(literal)) {
        const before = literal.replace(/−\s*$/, '').trimEnd();
        if (/[A-Za-zα-ωΑ-Ω\d)\]}₀-₉]$/.test(before) || !before && precededByValue) {
          literal = literal.replace(/−(\s*)$/, '+$1');
          text = mathLiteral(format(-value, reading));
        } else text = '(' + signedText + ')';
      }
    }
    return {prefix: literal, text, signedText};
  }
  function writeText(element, value) {
    const next = String(value ?? '');
    if (element.textContent === next) return false;
    // Retain the existing text node too: replacing it can disturb selection and
    // trigger unnecessary browser paint even when the parent stays in place.
    if (element.childNodes.length === 1 && element.firstChild.nodeType === 3) element.firstChild.nodeValue = next;
    else element.textContent = next;
    return true;
  }
  return Object.freeze({format, formatText, mathLiteral, mathTerm, createPacer, writeText});
});

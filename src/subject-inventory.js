/* Attributed book subjects, explicit lesson links and their scope boundaries.
   No mathematics is inferred from a label; no private state, storage or clocks. */
(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasSubjectInventory = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const esc = value =>
    String(value ?? '').replace(
      /[&<>"']/g,
      char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]
    );
  const fold = value =>
    String(value ?? '')
      .normalize('NFKD')
      .replace(/\p{M}/gu, '')
      .toLowerCase()
      .replace(/[\s_-]+/g, ' ')
      .trim();
  const freeze = value => {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
      Object.values(value).forEach(freeze);
      Object.freeze(value);
    }
    return value;
  };
  const statusLabels = {
    'draft-introduction': 'Draft introduction',
    precursor: 'Preparation only',
    planned: 'Planned lesson'
  };
  const evidenceLabels = {
    confirmed_scope: 'Scope reported confirmed',
    provisional_book_mapping: 'Book mapping provisional',
    proposed_bridge: 'Editorial bridge'
  };
  let nextId = 0;

  function create({ data, cards = [] } = {}) {
    if (
      data?.formatVersion !== 1 ||
      !Array.isArray(data.concepts) ||
      !Array.isArray(data.books) ||
      !Array.isArray(data.subjects) ||
      !Array.isArray(cards)
    )
      throw new TypeError('Subject inventory needs versioned data and canonical cards.');
    const copy = JSON.parse(JSON.stringify(data));
    const books = new Map(copy.books.map(book => [book.id, book]));
    const subjects = new Map(copy.subjects.map(subject => [subject.id, subject]));
    const lessons = new Map(cards.map(card => [card.slug, { slug: card.slug, title: card.title }]));
    const sources = new Map((copy.sources || []).map(source => [source.id, source]));
    const ids = new Set();
    const concepts = copy.concepts.map(concept => {
      if (
        ids.has(concept.id) ||
        !Object.hasOwn(statusLabels, concept.status) ||
        !concept.subjects.every(id => subjects.has(id)) ||
        !concept.evidence.every(record => books.has(record.book_id)) ||
        !concept.cards.every(slug => lessons.has(slug))
      )
        throw new TypeError('Unresolved or duplicate inventory record: ' + concept.id);
      ids.add(concept.id);
      return freeze({ ...concept, lessons: concept.cards.map(slug => lessons.get(slug)) });
    });
    const byId = new Map(concepts.map(concept => [concept.id, concept]));
    const searchable = concepts.map(concept => ({
      concept,
      text: fold(
        [
          concept.id,
          concept.label,
          concept.scopeNote,
          ...concept.subjects.map(id => subjects.get(id).label),
          ...concept.evidence.flatMap(row => [
            books.get(row.book_id).title,
            ...(books.get(row.book_id).authors || [])
          ]),
          ...concept.lessons.map(card => card.title)
        ].join(' ')
      )
    }));
    const counts = freeze({
      total: concepts.length,
      books: books.size,
      subjects: subjects.size,
      ...Object.fromEntries(
        Object.keys(statusLabels).map(status => [
          status,
          concepts.filter(concept => concept.status === status).length
        ])
      )
    });
    function search(query = '', { subject = 'all', book = 'all', status = 'all' } = {}) {
      if (typeof query !== 'string') return [];
      const words = fold(query.slice(0, 160)).split(' ').filter(Boolean);
      return searchable
        .filter(
          row =>
            (subject === 'all' || row.concept.subjects.includes(subject)) &&
            (book === 'all' || row.concept.evidence.some(record => record.book_id === book)) &&
            (status === 'all' || row.concept.status === status) &&
            words.every(word => row.text.includes(word))
        )
        .map(row => row.concept);
    }
    function evidenceMarkup(concept) {
      return (
        '<details class="subject-evidence"><summary>Book scope and verification</summary><p>The supplied inventory reports these associations. A book association does not certify this lesson or its depth; page-level checks remain open.</p><ul>' +
        concept.evidence
          .map(record => {
            const book = books.get(record.book_id),
              references = (record.source_ids || []).map(id => sources.get(id)).filter(Boolean);
            return (
              '<li><strong>' +
              esc(book.title) +
              '</strong><span>' +
              esc(evidenceLabels[record.evidence_status] || record.evidence_status) +
              ' · ' +
              esc(record.coverage_depth || 'depth not stated') +
              '</span>' +
              (record.note ? '<p>' + esc(record.note) + '</p>' : '') +
              (references.length
                ? '<div>' +
                  references
                    .map(
                      (source, index) =>
                        '<a href="' +
                        esc(source.url) +
                        '" target="_blank" rel="noopener noreferrer">Inventory source ' +
                        (index + 1) +
                        ' ↗</a>'
                    )
                    .join(' · ') +
                  '</div>'
                : '<p>No linked original page in the supplied inventory.</p>') +
              '</li>'
            );
          })
          .join('') +
        '</ul></details>'
      );
    }
    function conceptMarkup(concept, { selected = false } = {}) {
      return (
        '<article class="subject-concept subject-status-' +
        esc(concept.status) +
        (selected ? ' subject-selected' : '') +
        '" id="subject-' +
        esc(concept.id) +
        '"><div class="subject-concept-heading"><h2><a href="#subjects/' +
        encodeURIComponent(concept.id) +
        '">' +
        esc(concept.label) +
        '</a></h2><span class="subject-status">' +
        esc(statusLabels[concept.status]) +
        '</span></div><p class="subject-domain-label">' +
        concept.subjects.map(id => esc(subjects.get(id).label)).join(' · ') +
        '</p><p>' +
        esc(concept.scopeNote) +
        '</p>' +
        (concept.lessons.length
          ? '<div class="subject-lesson-links">' +
            concept.lessons
              .map(card => '<a href="#card/' + esc(card.slug) + '">' + esc(card.title) + ' ↗</a>')
              .join('') +
            '</div>'
          : '<p class="subject-not-authored">A planning entry, with no executable lesson linked yet.</p>') +
        evidenceMarkup(concept) +
        '</article>'
      );
    }
    function resultsMarkup(state) {
      const selected = state.selected ? byId.get(state.selected) : null;
      if (selected)
        return (
          '<div class="subject-result-heading"><p>Selected subject</p><button type="button" data-subject-clear>Return to matching subjects</button></div>' +
          conceptMarkup(selected, { selected: true })
        );
      const results = search(state.query, state),
        visible = results.slice(0, state.limit);
      return (
        '<p class="subject-result-count" role="status">' +
        results.length +
        ' matching subjects' +
        (results.length ? ' · showing ' + visible.length : '') +
        '</p>' +
        (visible.length
          ? '<div class="subject-concepts">' +
            visible.map(concept => conceptMarkup(concept)).join('') +
            '</div>'
          : '<p>No matching subjects. Try fewer words or clear a filter.</p>') +
        (visible.length < results.length
          ? '<button class="button secondary" type="button" data-subject-more>Show 12 more subjects</button>'
          : '')
      );
    }
    function initial(options = {}) {
      return {
        query: typeof options.query === 'string' ? options.query.slice(0, 160) : '',
        subject: subjects.has(options.subject) ? options.subject : 'all',
        book: books.has(options.book) ? options.book : 'all',
        status: Object.hasOwn(statusLabels, options.status) ? options.status : 'all',
        selected: byId.has(options.selected) ? options.selected : '',
        limit: 12
      };
    }
    function markup(options = {}) {
      const state = initial(options),
        scope = 'subject-browser-' + String(options.id || 'page').replace(/[^A-Za-z0-9_-]/g, '-');
      return (
        '<section class="subject-browser"><p class="eyebrow">An expanding reading map</p><h1>Follow a subject.</h1><p>Browse ' +
        counts.total +
        ' planning subjects across ' +
        counts.subjects +
        ' subject areas and ' +
        counts.books +
        ' books. Open an available introduction, or see where further lessons are needed.</p><p class="subject-boundary">Subject areas organize the reading roadmap; the atlas keeps its eight geographic territories. An imported subject is not a completed lesson.</p><div class="subject-overview"><span><strong>' +
        counts['draft-introduction'] +
        '</strong> draft introductions</span><span><strong>' +
        counts.precursor +
        '</strong> preparation links</span><span><strong>' +
        counts.planned +
        '</strong> planned lessons</span></div><div class="subject-controls"><label class="subject-query" for="' +
        scope +
        '-query">Search subjects<input id="' +
        scope +
        '-query" data-subject-query type="search" maxlength="160" autocomplete="off" value="' +
        esc(state.query) +
        '" placeholder="Entropy, lattice, confidence interval…"></label><label for="' +
        scope +
        '-area">Subject area<select id="' +
        scope +
        '-area" data-subject-area><option value="all">All subject areas</option>' +
        copy.subjects
          .map(
            subject =>
              '<option value="' +
              esc(subject.id) +
              '"' +
              (state.subject === subject.id ? ' selected' : '') +
              '>' +
              esc(subject.label) +
              '</option>'
          )
          .join('') +
        '</select></label><label for="' +
        scope +
        '-book">Book<select id="' +
        scope +
        '-book" data-subject-book><option value="all">All eight books</option>' +
        copy.books
          .map(
            book =>
              '<option value="' +
              esc(book.id) +
              '"' +
              (state.book === book.id ? ' selected' : '') +
              '>' +
              esc(book.title) +
              '</option>'
          )
          .join('') +
        '</select></label><label for="' +
        scope +
        '-status">Lesson availability<select id="' +
        scope +
        '-status" data-subject-status><option value="all">All states</option>' +
        Object.entries(statusLabels)
          .map(
            ([id, label]) =>
              '<option value="' +
              id +
              '"' +
              (state.status === id ? ' selected' : '') +
              '>' +
              label +
              '</option>'
          )
          .join('') +
        '</select></label></div><div data-subject-results>' +
        resultsMarkup(state) +
        '</div><details class="subject-source-policy"><summary>About this reading roadmap</summary><p>' +
        esc(copy.provenance || 'Attributed planning data.') +
        '</p><p>The source inventory includes ' +
        esc(copy.counts?.concepts_with_confirmed_scope ?? '') +
        ' concepts with reported confirmed book scope and ' +
        esc(copy.counts?.provisional_only_concepts ?? '') +
        ' with provisional mappings only. These describe source associations, independently of lesson availability.</p><p>Original page anchors, exact editions and coverage depth still need the checks listed in the supplied inventory. Definitions, numerical fixtures and lesson sources remain separate from book-scope claims.</p></details></section>'
      );
    }
    function mount(host, options = {}) {
      if (!host || typeof host.querySelector !== 'function')
        throw new TypeError('Subject browser needs a host element.');
      let state = initial(options),
        destroyed = false;
      host.innerHTML = markup({ ...options, id: 'mount-' + ++nextId });
      const results = host.querySelector('[data-subject-results]');
      function paint() {
        if (!destroyed) results.innerHTML = resultsMarkup(state);
      }
      function changed(event) {
        const key = event.target?.matches?.('[data-subject-query]')
          ? 'query'
          : event.target?.matches?.('[data-subject-area]')
            ? 'subject'
            : event.target?.matches?.('[data-subject-book]')
              ? 'book'
              : event.target?.matches?.('[data-subject-status]')
                ? 'status'
                : null;
        if (!key) return;
        state = { ...state, [key]: event.target.value, limit: 12, selected: '' };
        paint();
        options.onChange?.({ ...state });
      }
      function click(event) {
        if (event.target?.closest?.('[data-subject-more]')) {
          state = { ...state, limit: state.limit + 12 };
          paint();
        } else if (event.target?.closest?.('[data-subject-clear]')) {
          state = { ...state, selected: '' };
          paint();
          options.onChange?.({ ...state });
        }
      }
      host.addEventListener('input', changed);
      host.addEventListener('change', changed);
      host.addEventListener('click', click);
      return Object.freeze({
        getState: () => ({ ...state }),
        destroy() {
          if (destroyed) return;
          destroyed = true;
          host.removeEventListener('input', changed);
          host.removeEventListener('change', changed);
          host.removeEventListener('click', click);
        }
      });
    }
    return Object.freeze({
      counts,
      books: freeze(copy.books),
      subjects: freeze(copy.subjects),
      concepts: freeze(concepts),
      get: id => byId.get(id) || null,
      search,
      markup,
      mount
    });
  }
  return Object.freeze({
    create,
    statusLabels: freeze(statusLabels),
    evidenceLabels: freeze(evidenceLabels)
  });
});

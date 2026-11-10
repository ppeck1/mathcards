#!/usr/bin/env python3
"""Parse default-state scene markup without a browser or third-party packages."""
from __future__ import annotations

from collections import Counter, defaultdict
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import subprocess
import sys
from urllib.parse import unquote
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
SVG_TAG = re.compile(r"</?svg\b[^>]*>", re.IGNORECASE)
URL_REFERENCE = re.compile(r"url\(\s*['\"]?#([^)'\"\s]+)['\"]?\s*\)", re.IGNORECASE)
NAVIGATION_ROOTS = {'explore', 'atlas', 'index', 'search', 'subjects', 'workbench', 'notebook'}


class Attributes(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids = []
        self.references = []

    def handle_starttag(self, tag, attrs):
        for name, value in attrs:
            if value is None:
                continue
            if name == 'id':
                self.ids.append(value)
            if name in {'aria-labelledby', 'aria-describedby'}:
                self.references.extend((name, target) for target in value.split())
            if tag == 'label' and name == 'for':
                self.references.append(('for', value))
            if name in {'href', 'xlink:href'} and value.startswith('#'):
                self.references.append((name, unquote(value[1:])))
            self.references.extend(('url', unquote(target)) for target in URL_REFERENCE.findall(value))

    handle_startendtag = handle_starttag


def svg_fragments(markup):
    """Keep SVG bytes intact for strict XML parsing, including nested SVG."""
    depth, start, fragments = 0, None, []
    for match in SVG_TAG.finditer(markup):
        closing = match.group().startswith('</')
        if closing:
            if not depth:
                raise ValueError('Closing SVG without an opening SVG.')
            depth -= 1
            if not depth:
                fragments.append(markup[start:match.end()])
        else:
            if not depth:
                start = match.start()
            if match.group().rstrip().endswith('/>'):
                if not depth:
                    fragments.append(markup[start:match.end()])
            else:
                depth += 1
    if depth:
        raise ValueError('Unclosed SVG.')
    return fragments


def audit_fragments(records, card_slugs=()):
    failures, ids_by_pair = [], defaultdict(list)
    counts = Counter(fragments=len(records))
    seen_keys, cards = set(), set(card_slugs)
    for record in records:
        key = record.get('key', '(missing key)')
        if key in seen_keys:
            failures.append({'fragment': key, 'check': 'duplicate-fragment-key'})
        seen_keys.add(key)
        counts[str(record.get('kind', 'unknown')) + 'Fragments'] += 1
        if record.get('renderError'):
            failures.append({'fragment': key, 'check': 'render', 'detail': record['renderError']})
            continue
        markup = record.get('markup')
        if not isinstance(markup, str):
            failures.append({'fragment': key, 'check': 'markup', 'detail': 'Renderer did not return text.'})
            continue
        try:
            fragments = svg_fragments(markup)
            if not fragments:
                raise ValueError('Expected at least one SVG.')
            for fragment in fragments:
                svg = ET.fromstring(fragment)
                if svg.tag != '{http://www.w3.org/2000/svg}svg':
                    raise ValueError('SVG root must declare its standard namespace.')
                counts['strictSVGs'] += 1
            counts['parsedFragments'] += 1
        except (ET.ParseError, ValueError) as error:
            failures.append({'fragment': key, 'check': 'strict-svg', 'detail': str(error)})
        parser = Attributes()
        parser.feed(markup)
        own_ids = Counter(parser.ids)
        counts['ids'] += len(parser.ids)
        counts['references'] += len(parser.references)
        for value, uses in own_ids.items():
            if uses > 1:
                failures.append({'fragment': key, 'check': 'duplicate-id', 'id': value, 'count': uses})
        for attribute, target in parser.references:
            if target in own_ids:
                continue
            if attribute in {'href', 'xlink:href'} and target.startswith('card/'):
                if target[5:] not in cards:
                    failures.append({'fragment': key, 'check': 'card-route', 'target': target})
                counts['cardRouteReferences'] += 1
            elif attribute in {'href', 'xlink:href'} and target.split('/', 1)[0] in NAVIGATION_ROOTS:
                counts['navigationReferences'] += 1
            else:
                failures.append({'fragment': key, 'check': 'unresolved-reference', 'attribute': attribute, 'target': target})
        if record.get('pair'):
            ids_by_pair[record['pair']].append((key, set(own_ids)))
    for pair, rows in ids_by_pair.items():
        counts['slotPairs'] += 1
        if len(rows) != 2:
            failures.append({'fragment': pair, 'check': 'slot-pair', 'detail': f'Expected two slots, found {len(rows)}.'})
        else:
            overlap = sorted(rows[0][1] & rows[1][1])
            if overlap:
                failures.append({'fragment': pair, 'check': 'slot-id-collision', 'ids': overlap})
    return {'pass': not failures, 'counts': dict(counts), 'failures': failures}


def main():
    try:
        produced = subprocess.run(['node', str(ROOT / 'tools/produce_scene_markup.cjs')],
                                  cwd=ROOT, capture_output=True, text=True, encoding='utf-8', timeout=120)
        if produced.returncode:
            raise ValueError(produced.stderr.strip() or 'Markup producer failed.')
        data = json.loads(produced.stdout)
        if data.get('formatVersion') != 1:
            raise ValueError('Unsupported markup producer format.')
        result = audit_fragments(data['records'], data['cardSlugs'])
        expected = data['expected']
        if len(set(data['cardSlugs'])) != len(data['cardSlugs']) or set(data['moduleSlugs']) != set(data['cardSlugs']):
            result['failures'].append({'check': 'coverage', 'detail': 'Canonical cards and installed modules differ.'})
        for name in ['viewFragments', 'previewFragments']:
            if result['counts'].get(name, 0) != expected[name]:
                result['failures'].append({'check': 'coverage', 'detail': name, 'expected': expected[name], 'actual': result['counts'].get(name, 0)})
        result['pass'] = not result['failures']
        report = {
            'formatVersion': 1,
            'applicationVersion': data['applicationVersion'],
            'scope': 'Default-parameter desktop/compact SVG XML, own IDs, declarative references and two-slot namespace isolation. App navigation hashes are distinguished from local IDs; only card-route targets are checked here. No browser, CSS layout, raster bounds, accessibility-tree, keyboard, touch or phone qualification.',
            'expected': expected,
            **result
        }
    except (OSError, ValueError, KeyError, subprocess.TimeoutExpired) as error:
        report = {'formatVersion': 1, 'pass': False, 'error': str(error)}
    print(json.dumps(report, indent=2, ensure_ascii=True))
    return 0 if report['pass'] else 1


if __name__ == '__main__':
    sys.exit(main())

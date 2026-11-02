"""Failure detection for the static scene markup release checker."""
import importlib.util
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
SPEC = importlib.util.spec_from_file_location('check_scene_markup', ROOT / 'tools/check_scene_markup.py')
CHECK = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(CHECK)


def record(key, body, pair=None):
    return {'key': key, 'kind': 'view', 'pair': pair,
            'markup': '<svg xmlns="http://www.w3.org/2000/svg">' + body + '</svg>'}


class SceneMarkup(unittest.TestCase):
    def test_complete_svg_references_and_distinct_slot_ids_pass(self):
        rows = [record(side, f'<title id="{side}-title">Scene</title><defs><clipPath id="{side}-clip"/></defs><g aria-labelledby="{side}-title" clip-path="url(#{side}-clip)"><a href="#card/fixture">Card</a></g>', 'pair')
                for side in ['left', 'right']]
        result = CHECK.audit_fragments(rows, ['fixture'])
        self.assertTrue(result['pass'], result)
        self.assertEqual(result['counts']['strictSVGs'], 2)
        self.assertEqual(result['counts']['slotPairs'], 1)

    def test_missing_aria_label_url_and_href_targets_are_reported(self):
        result = CHECK.audit_fragments([record('broken', '<g aria-labelledby="missing" aria-describedby="description" style="fill:url(\'#paint\')"><a href="#target"/></g>')])
        self.assertFalse(result['pass'])
        self.assertEqual({failure['target'] for failure in result['failures']}, {'missing', 'description', 'paint', 'target'})
        label = record('label', '')
        label['markup'] = '<label for="unknown">Value</label>' + label['markup']
        self.assertFalse(CHECK.audit_fragments([label])['pass'])

    def test_duplicate_ids_and_cross_slot_collisions_are_detected(self):
        result = CHECK.audit_fragments([record('left', '<title id="same"/><g id="same"/>', 'pair'), record('right', '<title id="same"/>', 'pair')])
        self.assertEqual({failure['check'] for failure in result['failures']}, {'duplicate-id', 'slot-id-collision'})

    def test_nested_and_multiple_svg_roots_keep_local_ids_distinct_from_navigation(self):
        row = record('compound', '<svg><title id="nested">Nested</title></svg><a href="#nested"/><a href="#atlas/map/structures"/>')
        row['markup'] += '<svg xmlns="http://www.w3.org/2000/svg"><title id="locator">Locator</title></svg>'
        result = CHECK.audit_fragments([row])
        self.assertTrue(result['pass'], result)
        self.assertEqual(result['counts']['strictSVGs'], 2)
        self.assertEqual(result['counts']['parsedFragments'], 1)
        self.assertEqual(result['counts']['navigationReferences'], 1)

    def test_malformed_svg_and_unknown_card_routes_fail(self):
        malformed = record('bad', '<g x="1" x="2"/>')
        self.assertFalse(CHECK.audit_fragments([malformed])['pass'])
        self.assertFalse(CHECK.audit_fragments([record('unclosed', '<g>')])['pass'])
        self.assertFalse(CHECK.audit_fragments([record('missing-card', '<a href="#card/missing"/>')], ['fixture'])['pass'])


if __name__ == '__main__':
    unittest.main()

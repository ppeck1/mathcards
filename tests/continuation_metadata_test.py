"""Metadata remains a deterministic description, not an executable extension path."""
import copy
import json
from pathlib import Path
import sys
import tempfile
import unittest

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "tools"))
from build_continuation_metadata import FAMILIES, build, load_metadata, script


class ContinuationMetadataTests(unittest.TestCase):
    def project(self, root):
        (root / "content/planning").mkdir(parents=True)
        (root / "content/cards").mkdir(parents=True)
        for i, family in enumerate(FAMILIES):
            slug = "fixture-" + str(i)
            card = {"id": "math:concept:" + slug, "slug": slug,
                    "grammar": {"symbols": [{"token": "x"}, {"token": "y"}]},
                    "interactive": {"renderer_id": slug + "-visual-model", "model_id": slug + "-visual-model",
                                    "controls": [{"id": "value", "type": "number"}]}}
            data = {"slugs": [slug], "bindings": {slug: {"x": ["value"], "y": ["output"]}},
                    "ports": {slug: [
                        {"direction": "input", "key": "value", "label": "Declared input", "type": "fixture-quantity", "unit": "1",
                         "description": "The normalized input for this explicit fixture."},
                        {"direction": "output", "key": "output", "label": "Declared output", "type": "fixture-result", "unit": "1",
                         "description": "The result uses <data>, never </script> execution."}]}}
            (root / "content/cards" / (slug + ".json")).write_text(json.dumps(card), encoding="utf-8")
            (root / "content/planning" / (family + "-integration.json")).write_text(json.dumps(data), encoding="utf-8")

    def change(self, root, apply):
        path = root / "content/planning" / (FAMILIES[0] + "-integration.json")
        data = json.loads(path.read_text(encoding="utf-8"))
        apply(data)
        path.write_text(json.dumps(data), encoding="utf-8")

    def test_projection_is_deterministic_inert_and_uses_explicit_family_order(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            self.project(root)
            data = load_metadata(root)
            self.assertEqual(data["ids"], ["fixture-0", "fixture-1", "fixture-2"])
            rendered = script(data)
            self.assertEqual(rendered, script(copy.deepcopy(data)))
            self.assertNotIn("</script>", rendered)
            encoded = rendered.split("const data=", 1)[1].split(";\nconst freeze=", 1)[0]
            self.assertEqual(json.loads(encoded), data)
            target = root / "result.js"
            build(target, root)
            first = target.read_bytes()
            build(target, root)
            self.assertEqual(first, target.read_bytes())
            self.assertNotIn(b"\r\n", first)

    def test_path_like_ids_are_not_an_extension_loading_mechanism(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            self.project(root)
            self.change(root, lambda data: data["slugs"].__setitem__(0, "../escape"))
            with self.assertRaises(ValueError):
                load_metadata(root)

    def test_missing_grammar_bindings_are_not_silently_synthesized(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            self.project(root)
            self.change(root, lambda data: data["bindings"]["fixture-0"].pop("x"))
            with self.assertRaisesRegex(ValueError, "grammar token"):
                load_metadata(root)

    def test_missing_numeric_ports_fail(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            self.project(root)
            self.change(root, lambda data: data["ports"]["fixture-0"].pop(0))
            with self.assertRaisesRegex(ValueError, "numeric controls"):
                load_metadata(root)

    def test_unknown_port_fields_fail(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            self.project(root)
            self.change(root, lambda data: data["ports"]["fixture-0"][0].update(callback="execute"))
            with self.assertRaisesRegex(ValueError, "unknown or missing"):
                load_metadata(root)


if __name__ == "__main__":
    unittest.main()

"""Physical terrain invariants; no territory or card-count snapshots."""
import copy
import importlib.util
import json
from pathlib import Path
import struct
import unittest
import zlib

ROOT = Path(__file__).resolve().parents[1]
SPEC = importlib.util.spec_from_file_location("build_terrain", ROOT / "tools" / "build_terrain.py")
TERRAIN = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(TERRAIN)
RECIPE = json.loads((ROOT / "src" / "atlas-terrain-recipe.json").read_text(encoding="utf-8"))


class TerrainGeneration(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.field, cls.width, cls.height = TERRAIN.generate_field(RECIPE, (96, 64))

    def test_one_connected_landmass_and_enclosed_lake(self):
        land = {i for i, h in enumerate(self.field) if h > 0}
        reached = {next(iter(land))}
        pending = list(reached)
        while pending:
            index = pending.pop()
            x, y = index % self.width, index // self.width
            for nx, ny in ((x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)):
                other = ny * self.width + nx
                if 0 <= nx < self.width and 0 <= ny < self.height and other in land and other not in reached:
                    reached.add(other)
                    pending.append(other)
        self.assertEqual(reached, land)
        self.assertGreater(len(land), len(self.field) * 0.5)
        self.assertLess(len(land), len(self.field) * 0.8)
        lake = RECIPE["lake"]["center"]
        x = round(lake[0] / RECIPE["world"]["width"] * (self.width - 1))
        y = round(lake[1] / RECIPE["world"]["height"] * (self.height - 1))
        self.assertLess(self.field[y * self.width + x], 0)
        self.assertTrue(all(self.field[i] < 0 for i in range(self.width)))

    def test_same_recipe_same_field_and_seed_only_changes_detail(self):
        first, width, height = TERRAIN.generate_field(RECIPE, (48, 32))
        again, _, _ = TERRAIN.generate_field(RECIPE, (48, 32))
        self.assertEqual(first, again)
        alternative = copy.deepcopy(RECIPE)
        alternative["seed"] += 1
        changed, _, _ = TERRAIN.generate_field(alternative, (48, 32))
        self.assertNotEqual(first, changed)
        # Detail changes preserve the coastal silhouette. Around the lake the
        # same field may move a shoreline by a sub-grid amount.
        cx, cy = RECIPE["lake"]["center"]
        rx, ry = RECIPE["lake"]["radii"]
        for i, (a, b) in enumerate(zip(first, changed)):
            x, y = i % width * 1200 / (width - 1), i // width * 800 / (height - 1)
            if ((x - cx) / rx) ** 2 + ((y - cy) / ry) ** 2 > 4:
                self.assertEqual(a > 0, b > 0)
        self.assertEqual((width, height), (48, 32))

    def test_contours_are_deterministic_and_interpolate_the_same_field(self):
        world = RECIPE["world"]
        lines = TERRAIN.contour_lines(self.field, self.width, self.height, world, 0, 0.3)
        self.assertEqual(lines, TERRAIN.contour_lines(self.field, self.width, self.height, world, 0, 0.3))
        # Coast and lake are both closed boundaries of the zero elevation.
        self.assertGreaterEqual(len([line for line, closed in lines if closed]), 2)
        for points, _ in lines:
            for x, y in points:
                self.assertTrue(0 <= x <= world["width"] and 0 <= y <= world["height"])
        # A planar field produces a vertical straight line at its exact level.
        field = [x / 8 for y in range(9) for x in range(9)]
        line = TERRAIN.contour_lines(field, 9, 9, {"width": 80, "height": 80}, 0.35, 0.01)
        self.assertEqual(len(line), 1)
        self.assertTrue(all(abs(x - 28) < 1e-4 for x, y in line[0][0]))

    def test_lossless_png_and_self_contained_module_data(self):
        data, image = TERRAIN.bake(RECIPE, (48, 32))
        self.assertEqual(data, TERRAIN.bake(RECIPE, (48, 32))[0])
        self.assertEqual(image[:8], b"\x89PNG\r\n\x1a\n")
        offset, compressed = 8, bytearray()
        while offset < len(image):
            length = struct.unpack(">I", image[offset:offset + 4])[0]
            kind = image[offset + 4:offset + 8]
            payload = image[offset + 8:offset + 8 + length]
            checksum = struct.unpack(">I", image[offset + 8 + length:offset + 12 + length])[0]
            self.assertEqual(checksum, zlib.crc32(kind + payload) & 0xFFFFFFFF)
            if kind == b"IHDR":
                self.assertEqual(struct.unpack(">II", payload[:8]), (48, 32))
            if kind == b"IDAT":
                compressed.extend(payload)
            offset += length + 12
        self.assertEqual(len(zlib.decompress(compressed)), (48 * 3 + 1) * 32)
        self.assertTrue(data["image"].startswith("data:image/png;base64,"))
        self.assertEqual(data["stats"]["sampleCount"], 48 * 32)
        self.assertGreater(data["stats"]["contourLevels"], 4)
        self.assertNotIn("card", json.dumps(data).lower())

    def test_cached_asset_requires_matching_recipe_generator_and_image(self):
        data, image = TERRAIN.bake(RECIPE, (48, 32))
        local_recipe = copy.deepcopy(RECIPE)
        local_recipe["resolution"] = {"width": 48, "height": 32}
        # Bake with the exact low-resolution recipe so its recipe fingerprint
        # agrees with the cache inputs as well as its rendered dimensions.
        data, image = TERRAIN.bake(local_recipe)
        source = TERRAIN.artifact_source(data)
        self.assertEqual(TERRAIN.cached_artifact(source, local_recipe, data["generatorHash"]), (data, image))
        self.assertIsNone(TERRAIN.cached_artifact(source, local_recipe, "different-generator"))
        changed = copy.deepcopy(local_recipe)
        changed["seed"] += 1
        self.assertIsNone(TERRAIN.cached_artifact(source, changed, data["generatorHash"]))
        broken = dict(data, imageHash="invalid")
        self.assertIsNone(TERRAIN.cached_artifact(TERRAIN.artifact_source(broken), local_recipe, data["generatorHash"]))


if __name__ == "__main__":
    unittest.main()

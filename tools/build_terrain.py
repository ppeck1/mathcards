#!/usr/bin/env python3
"""Bake the illustrative atlas relief and contours using only the standard library.

The scalar field is one continuous landform. Editorial territories, mathematical
memberships and card counts are deliberately absent from this generator.
"""
from __future__ import annotations

import argparse
import base64
import hashlib
import json
import math
import struct
import time
import zlib
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
RECIPE = ROOT / "src" / "atlas-terrain-recipe.json"
OUTPUT = ROOT / "src" / "atlas-terrain.js"


def smooth(value):
    value = min(1.0, max(0.0, value))
    return value * value * (3.0 - 2.0 * value)


def noise_value(x, y, seed):
    value = (x * 374761393 + y * 668265263 + seed * 1442695041) & 0xFFFFFFFF
    value = ((value ^ (value >> 13)) * 1274126177) & 0xFFFFFFFF
    return ((value ^ (value >> 16)) & 0xFFFFFFFF) / 2147483647.5 - 1.0


def noise_grid(width, height, world, scale, seed):
    """Seeded smooth value noise, sampled once for each scale during the build."""
    xs = [(i * world["width"] / (width - 1)) / scale for i in range(width)]
    ys = [(i * world["height"] / (height - 1)) / scale for i in range(height)]
    xparts = [(math.floor(x), smooth(x - math.floor(x))) for x in xs]
    cache = {}
    for y in range(math.floor(ys[-1]) + 2):
        for x in range(math.floor(xs[-1]) + 2):
            cache[x, y] = noise_value(x, y, seed)
    result = []
    for py in ys:
        y = math.floor(py)
        fy = smooth(py - y)
        for x, fx in xparts:
            lo = cache[x, y] * (1 - fx) + cache[x + 1, y] * fx
            hi = cache[x, y + 1] * (1 - fx) + cache[x + 1, y + 1] * fx
            result.append(lo * (1 - fy) + hi * fy)
    return result


def curved_spine(points, subdivisions=7):
    """A clamped Catmull–Rom curve through authored ridge/valley anchors."""
    result = []
    for i in range(len(points) - 1):
        p0, p1, p2, p3 = points[max(0, i - 1)], points[i], points[i + 1], points[min(len(points) - 1, i + 2)]
        for part in range(subdivisions):
            t = part / subdivisions
            result.append(tuple(0.5 * ((2 * p1[k]) + (-p0[k] + p2[k]) * t + (2 * p0[k] - 5 * p1[k] + 4 * p2[k] - p3[k]) * t * t + (-p0[k] + 3 * p1[k] - 3 * p2[k] + p3[k]) * t * t * t) for k in (0, 1)))
    result.append(tuple(points[-1]))
    return result


def add_spine(field, width, height, world, feature, sign):
    """Stamp distance-to-curve falloffs, varying width and slope along each spine.

    Per-segment bounded rasterization avoids scanning every grid cell against
    every segment. Max combines a curve's segments without artificial vertex
    peaks; different authored ranges still combine into connected landforms.
    """
    points = curved_spine(feature["points"])
    profile = [0.0] * len(field)
    dx, dy = world["width"] / (width - 1), world["height"] / (height - 1)
    start, end = feature["width"]
    asymmetry = feature.get("asymmetry", 0.0)
    amplitude = feature.get("height", feature.get("depth", 0.0)) * sign
    for index, (a, b) in enumerate(zip(points, points[1:])):
        along_a, along_b = index / (len(points) - 1), (index + 1) / (len(points) - 1)
        width_a = (start * (1 - along_a) + end * along_a) * (0.9 + 0.14 * math.sin(along_a * math.pi * 3 + 0.4))
        width_b = (start * (1 - along_b) + end * along_b) * (0.9 + 0.14 * math.sin(along_b * math.pi * 3 + 0.4))
        height_a = 0.91 + 0.09 * math.cos(along_a * math.pi * 4.7)
        height_b = 0.91 + 0.09 * math.cos(along_b * math.pi * 4.7)
        reach = max(width_a, width_b) * (1 + abs(asymmetry)) * 4.4
        xmin = max(0, math.floor((min(a[0], b[0]) - reach) / dx))
        xmax = min(width - 1, math.ceil((max(a[0], b[0]) + reach) / dx))
        ymin = max(0, math.floor((min(a[1], b[1]) - reach) / dy))
        ymax = min(height - 1, math.ceil((max(a[1], b[1]) + reach) / dy))
        vx, vy = b[0] - a[0], b[1] - a[1]
        length2 = vx * vx + vy * vy
        if length2 == 0:
            continue
        length = math.sqrt(length2)
        for iy in range(ymin, ymax + 1):
            wy = iy * dy
            row = iy * width
            for ix in range(xmin, xmax + 1):
                wx = ix * dx
                ox, oy = wx - a[0], wy - a[1]
                t = min(1.0, max(0.0, (ox * vx + oy * vy) / length2))
                local_width = width_a + (width_b - width_a) * t
                ex, ey = ox - t * vx, oy - t * vy
                distance2 = ex * ex + ey * ey
                signed_distance = (vx * oy - vy * ox) / length
                side = signed_distance / (abs(signed_distance) + local_width * 0.75)
                variance = local_width * (1 + side * asymmetry)
                value = math.exp(-distance2 / (2 * variance * variance)) * (height_a + (height_b - height_a) * t)
                cell = row + ix
                if value > profile[cell]:
                    profile[cell] = value
    for i, value in enumerate(profile):
        field[i] += amplitude * value


def generate_field(recipe, resolution=None):
    width, height = resolution or (recipe["resolution"]["width"], recipe["resolution"]["height"])
    if width < 8 or height < 8:
        raise ValueError("Terrain resolution must be at least 8 by 8.")
    world, coast = recipe["world"], recipe["coast"]
    dx, dy = world["width"] / (width - 1), world["height"] / (height - 1)
    field = [0.23] * (width * height)
    coast_values = []
    for iy in range(height):
        y = iy * dy
        for ix in range(width):
            x = ix * dx
            px = (x - coast["center"][0]) / coast["radii"][0]
            py = (y - coast["center"][1]) / coast["radii"][1]
            angle = math.atan2(py, px)
            edge = 0.98 + 0.048 * math.sin(3 * angle + coast["phase"]) + 0.032 * math.cos(7 * angle - 0.7) + 0.014 * math.sin(13 * angle + 1.1)
            for headland in coast.get("headlands", []):
                angular_distance = math.atan2(math.sin(angle - headland["angle"]), math.cos(angle - headland["angle"]))
                edge += headland["height"] * math.exp(-(angular_distance / headland["width"]) ** 2)
            for bay in coast.get("bays", []):
                angular_distance = math.atan2(math.sin(angle - bay["angle"]), math.cos(angle - bay["angle"]))
                edge -= bay["depth"] * math.exp(-(angular_distance / bay["width"]) ** 2)
            coast_values.append(edge - math.hypot(px, py))
    for uplift in recipe["uplifts"]:
        cx, cy = uplift["center"]
        rx, ry = uplift["radii"]
        for iy in range(height):
            yy = ((iy * dy - cy) / ry) ** 2
            for ix in range(width):
                field[iy * width + ix] += uplift["height"] * math.exp(-(((ix * dx - cx) / rx) ** 2 + yy) * 1.5)
    for ridge in recipe["ridges"]:
        add_spine(field, width, height, world, ridge, 1)
    for valley in recipe["valleys"]:
        add_spine(field, width, height, world, valley, -1)
    detail = recipe["detail"]
    noise = [0.0] * len(field)
    for octave, (scale, weight) in enumerate(zip(detail["scales"], detail["weights"])):
        grid = noise_grid(width, height, world, scale, recipe["seed"] + octave * 97)
        for i, value in enumerate(grid):
            noise[i] += value * weight
    lake = recipe["lake"]
    for iy in range(height):
        y = iy * dy
        for ix in range(width):
            x = ix * dx
            i = iy * width + ix
            c = coast_values[i]
            if c <= 0:
                field[i] = max(-0.13, c * 0.15)
                continue
            coast_factor = smooth(c * coast["falloff"])
            clearing = min(1.0, min(math.hypot(x - cx, y - cy) / radius for cx, cy, radius in recipe["clearings"]))
            roughness = detail["amplitude"] * noise[i] * (0.35 + 0.65 * smooth(clearing))
            elevation = max(0.055, field[i] + roughness) * coast_factor
            lx, ly = (x - lake["center"][0]) / lake["radii"][0], (y - lake["center"][1]) / lake["radii"][1]
            # An asymmetric enclosed depression produces the lake from H=0,
            # using the same scalar field as relief and all other shorelines.
            lake_distance = lx * lx + ly * ly + 0.25 * math.sin(ly * 3.1) * math.cos(lx * 2.4) + 0.08 * math.sin(lx * 6 + ly * 2)
            elevation -= lake["depth"] * math.exp(-max(0.0, lake_distance) * 2.2)
            field[i] = elevation
    return field, width, height


def rgb(hex_value):
    return tuple(int(hex_value[i:i + 2], 16) for i in (1, 3, 5))


def png_bytes(width, height, pixels):
    """Lossless RGB PNG with deterministic sub filters and no metadata."""
    filtered = bytearray()
    row_size = width * 3
    for y in range(height):
        row = pixels[y * row_size:(y + 1) * row_size]
        filtered.append(1)
        filtered.extend((value - (row[i - 3] if i >= 3 else 0)) & 255 for i, value in enumerate(row))
    def chunk(kind, data):
        return struct.pack(">I", len(data)) + kind + data + struct.pack(">I", zlib.crc32(kind + data) & 0xFFFFFFFF)
    return b"\x89PNG\r\n\x1a\n" + chunk(b"IHDR", struct.pack(">2I5B", width, height, 8, 2, 0, 0, 0)) + chunk(b"IDAT", zlib.compress(bytes(filtered), 9)) + chunk(b"IEND", b"")


def render_relief(field, width, height, recipe):
    palette, light = recipe["palette"], recipe["light"]
    stops = [(0.0, rgb(palette["shore"])), (0.16, rgb(palette["lowland"])), (0.5, rgb(palette["upland"])), (0.9, rgb(palette["highland"])), (1.5, rgb(palette["summit"]))]
    water = rgb(palette["water"])
    direction = light["direction"]
    length = math.sqrt(sum(value * value for value in direction))
    lx, ly, lz = [value / length for value in direction]
    slope_x = light["reliefScale"] / (recipe["world"]["width"] / (width - 1) * 2)
    slope_y = light["reliefScale"] / (recipe["world"]["height"] / (height - 1) * 2)
    pixels = bytearray()
    for iy in range(height):
        for ix in range(width):
            i = iy * width + ix
            h = field[i]
            if h <= 0:
                # Water receives a subtle depth tint without painted drainage.
                depth = min(1.0, abs(h) * 8)
                pixels.extend(round(value + (1 - depth) * 5) for value in water)
                continue
            a, b = stops[-2], stops[-1]
            for lo, hi in zip(stops, stops[1:]):
                if h <= hi[0]:
                    a, b = lo, hi
                    break
            t = min(1.0, max(0.0, (h - a[0]) / (b[0] - a[0])))
            color = [a[1][k] * (1 - t) + b[1][k] * t for k in range(3)]
            nx = -(field[iy * width + min(width - 1, ix + 1)] - field[iy * width + max(0, ix - 1)]) * slope_x
            ny = -(field[min(height - 1, iy + 1) * width + ix] - field[max(0, iy - 1) * width + ix]) * slope_y
            normal = math.sqrt(nx * nx + ny * ny + 1)
            illumination = max(0.0, (nx * lx + ny * ly + lz) / normal)
            shade = light["ambient"] + light["diffuse"] * illumination
            pixels.extend(min(255, max(0, round(value * shade))) for value in color)
    return png_bytes(width, height, pixels)


def simplify(points, tolerance):
    """Ramer–Douglas–Peucker with a bounded world-space deviation."""
    if len(points) < 3:
        return points
    keep = {0, len(points) - 1}
    pending = [(0, len(points) - 1)]
    tolerance2 = tolerance * tolerance
    while pending:
        start, end = pending.pop()
        ax, ay = points[start]
        bx, by = points[end]
        dx, dy = bx - ax, by - ay
        length2 = dx * dx + dy * dy
        best, index = 0.0, None
        for i in range(start + 1, end):
            px, py = points[i][0] - ax, points[i][1] - ay
            t = min(1.0, max(0.0, (px * dx + py * dy) / length2)) if length2 else 0
            distance2 = (px - t * dx) ** 2 + (py - t * dy) ** 2
            if distance2 > best:
                best, index = distance2, i
        if best > tolerance2 and index is not None:
            keep.add(index)
            pending.extend(((start, index), (index, end)))
    return [points[i] for i in sorted(keep)]


def contour_lines(field, width, height, world, level, tolerance=0.75):
    """Marching squares, with a center-value decision for ambiguous saddles."""
    segments = []
    table = {1: [(3, 0)], 2: [(0, 1)], 3: [(3, 1)], 4: [(1, 2)], 6: [(0, 2)], 7: [(3, 2)], 8: [(2, 3)], 9: [(0, 2)], 11: [(1, 2)], 12: [(3, 1)], 13: [(0, 1)], 14: [(3, 0)]}
    sx, sy = world["width"] / (width - 1), world["height"] / (height - 1)
    for y in range(height - 1):
        row = y * width
        for x in range(width - 1):
            values = [field[row + x], field[row + x + 1], field[row + width + x + 1], field[row + width + x]]
            case = sum((1 << i) for i, value in enumerate(values) if value > level)
            if case in (0, 15):
                continue
            pairs = table.get(case)
            if case == 5:
                pairs = [(0, 1), (2, 3)] if sum(values) / 4 > level else [(3, 0), (1, 2)]
            elif case == 10:
                pairs = [(3, 0), (1, 2)] if sum(values) / 4 > level else [(0, 1), (2, 3)]
            points = [(x, y), (x + 1, y), (x + 1, y + 1), (x, y + 1)]
            edges = {}
            for a, b in pairs:
                pair = []
                for edge in (a, b):
                    if edge not in edges:
                        ia, ib = edge, (edge + 1) % 4
                        va, vb = values[ia], values[ib]
                        t = (level - va) / (vb - va) if vb != va else 0.5
                        px = (points[ia][0] + (points[ib][0] - points[ia][0]) * t) * sx
                        py = (points[ia][1] + (points[ib][1] - points[ia][1]) * t) * sy
                        edges[edge] = (round(px, 5), round(py, 5))
                    pair.append(edges[edge])
                if pair[0] != pair[1]:
                    segments.append(tuple(pair))
    adjacency = {}
    for i, (a, b) in enumerate(segments):
        adjacency.setdefault(a, []).append(i)
        adjacency.setdefault(b, []).append(i)
    used, lines = set(), []
    for i, segment in enumerate(segments):
        if i in used:
            continue
        start = next((p for p in segment if len(adjacency[p]) == 1), segment[0])
        points, current, edge = [start], start, i
        while edge not in used:
            used.add(edge)
            a, b = segments[edge]
            current = b if a == current else a
            points.append(current)
            following = [candidate for candidate in adjacency[current] if candidate not in used]
            if not following:
                break
            edge = following[0]
        if len(points) > 3:
            closed = points[0] == points[-1]
            reduced = simplify(points, tolerance)
            if closed and len(reduced) < 4:
                continue
            lines.append((reduced, closed))
    return lines


def svg_path(lines):
    def number(value):
        return f"{value:.1f}".rstrip("0").rstrip(".")
    return "".join("M" + "L".join(number(x) + " " + number(y) for x, y in points) + ("Z" if closed else "") for points, closed in lines)


def bake(recipe, resolution=None):
    field, width, height = generate_field(recipe, resolution)
    image = render_relief(field, width, height, recipe)
    settings, world = recipe["contours"], recipe["world"]
    shoreline = svg_path(contour_lines(field, width, height, world, 0, settings["simplification"]))
    contours = []
    levels = int(max(field) / settings["interval"])
    for index in range(1, levels + 1):
        level = round(index * settings["interval"], 5)
        path = svg_path(contour_lines(field, width, height, world, level, settings["simplification"]))
        if path:
            contours.append({"level": level, "index": index % settings["indexEvery"] == 0, "path": path})
    digest = hashlib.sha256(json.dumps(recipe, sort_keys=True, separators=(",", ":")).encode()).hexdigest()
    return {"version": recipe["version"], "seed": recipe["seed"], "world": world, "resolution": {"width": width, "height": height}, "image": "data:image/png;base64," + base64.b64encode(image).decode(), "shoreline": shoreline, "contours": contours, "recipeHash": digest, "generatorHash": hashlib.sha256(Path(__file__).read_bytes()).hexdigest(), "imageHash": hashlib.sha256(image).hexdigest(), "description": recipe["description"], "stats": {"sampleCount": len(field), "minHeight": round(min(field), 5), "maxHeight": round(max(field), 5), "pngBytes": len(image), "contourLevels": len(contours), "contourPathBytes": sum(len(contour["path"]) for contour in contours)}}, image


def artifact_source(data):
    payload = json.dumps(data, separators=(",", ":"), ensure_ascii=True)
    return "/* Generated by tools/build_terrain.py from atlas-terrain-recipe.json. */\n(function(root){'use strict';const data=" + payload + ";Object.freeze(data.world);Object.freeze(data.resolution);data.contours.forEach(Object.freeze);Object.freeze(data.contours);Object.freeze(data.stats);Object.freeze(data);if(typeof module==='object'&&module.exports)module.exports=data;root.AtlasTerrain=data;})(typeof globalThis!=='undefined'?globalThis:this);\n"


def cached_artifact(source, recipe, generator_hash):
    """Reuse checked-in terrain only when both authored and generator inputs match."""
    try:
        payload = source.split("const data=", 1)[1].split(";Object.freeze", 1)[0]
        data = json.loads(payload)
        recipe_hash = hashlib.sha256(json.dumps(recipe, sort_keys=True, separators=(",", ":")).encode()).hexdigest()
        if data["recipeHash"] != recipe_hash or data["generatorHash"] != generator_hash or data["resolution"] != recipe["resolution"]:
            return None
        image = base64.b64decode(data["image"].split(",", 1)[1], validate=True)
        if len(image) != data["stats"]["pngBytes"] or hashlib.sha256(image).hexdigest() != data["imageHash"]:
            return None
        return data, image
    except (ValueError, KeyError, IndexError, TypeError):
        return None


def build(output=OUTPUT, preview=None, quiet=False, force=False):
    started = time.perf_counter()
    recipe = json.loads(RECIPE.read_text(encoding="utf-8"))
    output = Path(output)
    cached = cached_artifact(output.read_text(encoding="utf-8"), recipe, hashlib.sha256(Path(__file__).read_bytes()).hexdigest()) if output.exists() and not force else None
    data, image = cached if cached else bake(recipe)
    if not cached:
        output.write_text(artifact_source(data), encoding="utf-8", newline="\n")
    if preview:
        Path(preview).write_bytes(image)
    if not quiet:
        print(f"Terrain: {'verified cached asset; ' if cached else ''}{data['stats']['sampleCount']:,} samples; {len(image):,} PNG bytes; {data['stats']['contourPathBytes']:,} contour bytes; {time.perf_counter() - started:.2f}s")
    return data


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, default=OUTPUT)
    parser.add_argument("--preview", type=Path)
    parser.add_argument("--force", action="store_true", help="Regenerate even when the checked-in input hashes match.")
    args = parser.parse_args()
    build(args.output, args.preview, force=args.force)

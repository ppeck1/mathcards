#!/usr/bin/env python3
"""Project explicitly installed family metadata into inert offline source data.

Only the explicitly installed, locally authored family records listed here are read.
Their data supplies IDs, symbol bindings and quantity ports, never JavaScript,
module URLs or expression evaluation. Mathematical implementations remain in
the source registry and the canonical card schema remains an independent gate.
"""
from __future__ import annotations

import argparse
import json
from pathlib import Path
import re

from generated_io import write_generated

ROOT = Path(__file__).resolve().parents[1]
FAMILIES = ("number-foundation", "spatial-foundation", "dynamics-extension",
            "algebra-extension", "algorithm-extension", "distribution-extension",
            "analysis-extension", "discrete-extension", "estimation-extension", "sampling-extension", "design-extension", "comparison-extension")
SLUG = re.compile(r"[a-z0-9]+(?:-[a-z0-9]+)*\Z")
KEY = re.compile(r"[A-Za-z][A-Za-z0-9]*\Z")
TYPE = re.compile(r"[a-z][a-z0-9]*(?:-[a-z0-9]+)*\Z")
UNIT = re.compile(r"[A-Za-z0-9]+(?:[/.][A-Za-z0-9]+)*\Z")


def load_metadata(root: Path = ROOT) -> dict:
    ids, bindings, ports = [], {}, {}
    for family in FAMILIES:
        path = root / "content/planning" / (family + "-integration.json")
        data = json.loads(path.read_text(encoding="utf-8"))
        slugs = data.get("slugs")
        if not isinstance(slugs, list) or not slugs:
            raise ValueError(f"{family}: declare installed slugs")
        if not isinstance(data.get("bindings"), dict) or not isinstance(data.get("ports"), dict):
            raise ValueError(f"{family}: declare bindings and ports")
        if set(data["bindings"]) != set(slugs) or set(data["ports"]) != set(slugs):
            raise ValueError(f"{family}: metadata must match the installed slugs")
        for slug in slugs:
            if not isinstance(slug, str) or not SLUG.fullmatch(slug) or slug in ids:
                raise ValueError(f"{family}: unsafe or duplicate slug {slug!r}")
            card_path = root / "content/cards" / (slug + ".json")
            card = json.loads(card_path.read_text(encoding="utf-8"))
            if card.get("slug") != slug or card.get("id") != "math:concept:" + slug:
                raise ValueError(f"{slug}: canonical card identity mismatch")
            interactive = card["interactive"]
            if interactive["renderer_id"] != slug + "-visual-model" or interactive["model_id"] != interactive["renderer_id"]:
                raise ValueError(f"{slug}: renderer identity mismatch")
            symbols = {item["token"] for item in card["grammar"]["symbols"]}
            bound = data["bindings"][slug]
            if not isinstance(bound, dict) or set(bound) != symbols:
                raise ValueError(f"{slug}: every grammar token needs an explicit binding")
            for token, quantities in bound.items():
                if token in {"__proto__", "constructor", "prototype"}:
                    raise ValueError(f"{slug}: unsafe object-property token")
                if not isinstance(token, str) or not isinstance(quantities, list) or any(
                    not isinstance(key, str) or not key or any(char.isspace() for char in key)
                    for key in quantities
                ):
                    raise ValueError(f"{slug}: invalid quantity binding")
            declared_ports = data["ports"][slug]
            if not isinstance(declared_ports, list) or not declared_ports:
                raise ValueError(f"{slug}: declare numeric input and output ports")
            normalized, seen = [], set()
            for original in declared_ports:
                if not isinstance(original, dict):
                    raise ValueError(f"{slug}: a port must be data")
                p = dict(original)
                if p.get("direction") not in ("input", "output") or not isinstance(p.get("key"), str) or not KEY.fullmatch(p["key"]):
                    raise ValueError(f"{slug}: invalid port direction/key")
                p.setdefault("id", p["direction"] + ":" + p["key"])
                if p["id"] != p["direction"] + ":" + p["key"] or p["id"] in seen:
                    raise ValueError(f"{slug}: duplicate or inconsistent port identity")
                if set(p) != {"id", "direction", "key", "label", "type", "unit", "description"}:
                    raise ValueError(f"{slug}: unknown or missing port metadata")
                if not isinstance(p["type"], str) or not TYPE.fullmatch(p["type"]) or not isinstance(p["unit"], str) or not UNIT.fullmatch(p["unit"]):
                    raise ValueError(f"{slug}: declare semantic type and ASCII unit")
                if not isinstance(p["label"], str) or not p["label"] or not isinstance(p["description"], str) or len(p["description"]) <= 20:
                    raise ValueError(f"{slug}: ports need readable meaning")
                normalized.append(p)
                seen.add(p["id"])
            inputs = {p["key"] for p in normalized if p["direction"] == "input"}
            numeric = {c["id"] for c in interactive["controls"] if c["type"] == "number"}
            if inputs != numeric or "output:output" not in seen:
                raise ValueError(f"{slug}: numeric controls and primary output must have ports")
            ids.append(slug)
            bindings[slug] = bound
            ports[slug] = normalized
    return {"formatVersion": 1, "ids": ids, "bindings": bindings, "ports": ports}


def script(data: dict) -> str:
    payload = json.dumps(data, ensure_ascii=False, sort_keys=True, separators=(",", ":"))
    for char, replacement in (("&", "\\u0026"), ("<", "\\u003c"), (">", "\\u003e"), ("\u2028", "\\u2028"), ("\u2029", "\\u2029")):
        payload = payload.replace(char, replacement)
    return """/* Generated from the installed family metadata records. Do not edit. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;root.AtlasContinuationMetadata=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
'use strict';
const data=""" + payload + """;
const freeze=value=>{if(value&&typeof value==='object'&&!Object.isFrozen(value)){Object.values(value).forEach(freeze);Object.freeze(value);}return value;};
return freeze(data);
});
"""


def build(target: Path | None = None, root: Path = ROOT) -> dict:
    data = load_metadata(root)
    write_generated(target or root / "src/continuation-metadata.js", script(data))
    return {"installed_families": len(FAMILIES), "modules": len(data["ids"])}


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path)
    args = parser.parse_args()
    print(json.dumps(build(args.output), sort_keys=True))

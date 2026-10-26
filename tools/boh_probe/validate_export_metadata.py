#!/usr/bin/env python3
"""Static metadata contract probe against two unmodified files fetched from pinned BOH.
This does NOT test admission, indexing, source lifecycle, retrieval, or a running BOH app.
Requires PyYAML. Does not write to a BOH database or library.
"""
from __future__ import annotations
import argparse
import hashlib
import importlib.util
import json
from pathlib import Path
import re
import sys

PIN = "aa3d4fcae554a5d39bde0aa7dba1f7ab584854b5"
HERE = Path(__file__).resolve().parent

def load_vendor(name):
    path = HERE / "vendor" / (name + ".py")
    spec = importlib.util.spec_from_file_location("boh_probe_" + name, path)
    module = importlib.util.module_from_spec(spec)
    sys.modules[spec.name] = module
    spec.loader.exec_module(module)
    return module

rubrix = load_vendor("rubrix")
contract = load_vendor("metadata_contract")

def validate_header(header, label, generated_file=None):
    errors = list(rubrix.validate_header(header))
    extracted, governed_errors = contract.extract_contract(
        header, label, hashlib.sha256(generated_file or b"probe").hexdigest(), allow_legacy=False)
    errors.extend(str(e) for e in governed_errors)
    # Explicit exporter policy checks, separate from source validators.
    policy = []
    if header.get("id") != header.get("document_id"):
        policy.append("Exporter policy: boh.id must equal boh.document_id")
    if header.get("document_class") not in contract.DOCUMENT_CLASSES:
        policy.append("Exporter policy: unsupported document_class")
    expected = {"type":"reference", "status":"draft", "canonical_layer":"supporting",
                "authority_state":"non_authoritative", "review_state":"none"}
    for key,value in expected.items():
        if header.get(key) != value:
            policy.append("Exporter policy: " + key + " must be " + value)
    if not isinstance(header.get("provenance"),dict):
        policy.append("Exporter policy: provenance must be a mapping")
    if not re.fullmatch(r"[a-f0-9]{64}",str(header.get("source_hash",""))):
        policy.append("Exporter policy: source_hash must be 64 lowercase SHA-256 hex digits")
    return {"path":label,"boh_lint_errors":errors,"exporter_policy_errors":policy,
            "pass":not errors and not policy,
            "identity":header.get("id"), "extracted_posture":{k:extracted.get(k) for k in
                ("status","canonical_layer","authority_state","review_state","document_class")}}

def parse_file(path):
    import yaml
    raw = path.read_bytes()
    text = raw.decode("utf-8")
    match = re.match(r"^---[ \t]*\n(.*?)\n---[ \t]*\n",text,re.DOTALL)
    if not match:
        return {"path":str(path),"pass":False,"parse_error":"Explicit YAML frontmatter required by this exporter probe"}
    doc = yaml.safe_load(match.group(1))
    if not isinstance(doc,dict) or not isinstance(doc.get("boh"),dict):
        return {"path":str(path),"pass":False,"parse_error":"boh must be a mapping"}
    return validate_header(doc["boh"],str(path),raw)

def selftest():
    h = {"id":"math:concept:derivative","document_id":"math:concept:derivative",
         "type":"reference","document_class":"reference",
         "purpose":"Derivative: local rate of change","title":"Derivative",
         "project":"Mathematical Expression Atlas","status":"draft","canonical_layer":"supporting",
         "authority_state":"non_authoritative","review_state":"none","version":"0.1.0",
         "updated":"2026-10-23T00:00:00Z","source_hash":hashlib.sha256(b"upstream-card").hexdigest(),
         "provenance":{"mode":"math_atlas_projection_v0_1","card_id":"math:concept:derivative",
                       "source_revision":"probe"},
         "topics":["mathematics","derivative"],
         "rubrix":{"operator_state":"observe","operator_intent":"capture"}}
    positive = validate_header(h,"representative_header")
    bad = dict(h,type="math_concept")
    negative_errors = rubrix.validate_header(bad)
    return {"positive":positive,"negative_invalid_type_rejected":any("LINT_INVALID_TYPE" in x for x in negative_errors),
            "negative_errors":negative_errors}

def main():
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("directory",nargs="?")
    args=p.parse_args()
    test=selftest()
    files=[]
    if args.directory:
        directory=Path(args.directory)
        if not directory.is_dir():
            p.error("directory does not exist: "+str(directory))
        files=sorted(set(directory.rglob("*.md"))|set(directory.rglob("*.markdown")))
        if not files:
            p.error("no Markdown exports found")
    results=[]
    for path in files:
        try:
            results.append(parse_file(path))
        except Exception as exc:
            results.append({"path":str(path),"pass":False,"parse_error":str(exc)})
    report={"scope":"Static BOH metadata lint only; no intake/index/retrieval runtime exercised.",
            "boh_commit":PIN,"validators":["app/core/rubrix.py","app/core/metadata_contract.py"],
            "selftest":test,"file_count":len(results),"files":results}
    report["pass"]=test["positive"]["pass"] and test["negative_invalid_type_rejected"] and all(x["pass"] for x in results)
    print(json.dumps(report,indent=2))
    return 0 if report["pass"] else 1

if __name__=="__main__":
    raise SystemExit(main())


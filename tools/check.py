#!/usr/bin/env python3
"""Full schema/reference/numeric/export and pinned BOH metadata validation."""
from __future__ import annotations
import json
from pathlib import Path
import subprocess
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]

def main():
    try:
        import jsonschema
        import yaml
    except ImportError:
        raise SystemExit('Check dependencies missing. Install: python3 -m pip install -r requirements-checks.txt')
    for script,args in [('validate_package.py',[]),('boh_probe/validate_export_metadata.py',[str(ROOT/'export/boh')])]:
        result=subprocess.run([sys.executable,str(ROOT/'tools'/script),*args],cwd=ROOT,capture_output=True,text=True)
        if result.returncode:
            print(result.stdout);print(result.stderr,file=sys.stderr);return result.returncode
        payload=json.loads(result.stdout)
        if script.startswith('boh_probe'):
            print(json.dumps({'check':'pinned BOH metadata','pass':payload['pass'],
                              'documents':payload['file_count'],'boh_commit':payload['boh_commit'],
                              'scope':payload['scope']},indent=2))
        else: print(result.stdout.strip())
    notation=subprocess.run(['node',str(ROOT/'tools/check_notation.cjs'),'--report','docs/NOTATION_COVERAGE_0_23_0.json'],cwd=ROOT,capture_output=True,text=True)
    if notation.returncode:
        print(notation.stdout);print(notation.stderr,file=sys.stderr);return notation.returncode
    report=json.loads(notation.stdout)
    print(json.dumps({'check':'public notation coverage','pass':report['complete'],
                      'index_entries':report['indexEntries'],'counts':report['counts'],
                      'scope':report['scope']},indent=2))
    suite=unittest.TestSuite([
        unittest.defaultTestLoader.discover(str(ROOT/'tests'),pattern='pipeline_test.py'),
        unittest.defaultTestLoader.discover(str(ROOT/'tests'),pattern='terrain_generation_test.py'),
    ])
    return 0 if unittest.TextTestRunner(verbosity=2).run(suite).wasSuccessful() else 1

if __name__ == '__main__': raise SystemExit(main())

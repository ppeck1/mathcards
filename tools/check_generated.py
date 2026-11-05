#!/usr/bin/env python3
"""Verify offline artifact bytes and reject generated changes after a CI build."""
from pathlib import Path
import argparse
import hashlib
import json
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[1]
GENERATED = ['src/catalog.js', 'src/math-index-data.js', 'src/formula-data.js', 'src/continuation-metadata.js', 'src/subject-inventory-data.js', 'docs/EIGHT_BOOK_SUBJECT_MATRIX.csv', 'src/index.html',
             'dist', 'START_HERE.html', 'export', 'docs/NOTATION_COVERAGE_*.json']


def artifact_errors(root=ROOT):
    root = Path(root)
    try:
        manifest = json.loads((root / 'dist/build-manifest.json').read_text(encoding='utf-8'))
        html = (root / 'dist/index.html').read_bytes()
        standalone = (root / 'START_HERE.html').read_bytes()
    except (OSError, ValueError) as error:
        return ['Missing or invalid offline artifacts: ' + str(error)]
    errors = []
    if hashlib.sha256(html).hexdigest() != manifest.get('index_sha256'):
        errors.append('dist/index.html does not match its manifest SHA-256.')
    if standalone != html:
        errors.append('START_HERE.html differs from dist/index.html.')
    if b'\r\n' in html:
        errors.append('Generated HTML must use canonical LF line endings.')
    return errors


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--integrity-only', action='store_true')
    args = parser.parse_args()
    errors = artifact_errors()
    if not args.integrity_only:
        status = subprocess.run(['git', 'status', '--porcelain', '--untracked-files=all',
                                 '--', *GENERATED], cwd=ROOT, capture_output=True, text=True)
        if status.returncode:
            errors.append('Cannot inspect generated paths: ' + status.stderr.strip())
        elif status.stdout.strip():
            errors.append('Generated files differ from the committed build. Rebuild and commit:\n' + status.stdout.strip())
    if errors:
        print('\n'.join(errors), file=sys.stderr)
        return 1
    print('Offline artifact hashes and standalone parity match.' if args.integrity_only
          else 'Offline artifact hashes, standalone parity and generated-file state match.')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())

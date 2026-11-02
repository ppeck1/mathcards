#!/usr/bin/env python3
"""Read-only syntax and whitespace gate for authored source, not generated data.

This intentionally does not reformat existing code or mathematical strings.
EditorConfig supplies new-file conventions. Runtime packages are unnecessary.
"""
from __future__ import annotations
import ast
import json
from pathlib import Path
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[1]
GENERATED = {"catalog.js", "math-index-data.js", "formula-data.js", "subject-inventory-data.js"}


def main() -> int:
    errors = []
    files = sorted(p for p in (ROOT / "src").iterdir()
                   if p.suffix in {".js", ".css"} and p.name not in GENERATED)
    python_files = sorted((ROOT / "tools").glob("*.py"))
    for path in files + python_files:
        label = path.relative_to(ROOT).as_posix()
        raw = path.read_bytes()
        if raw.startswith(b"\xef\xbb\xbf"):
            errors.append(label + ": unexpected UTF-8 BOM")
        try:
            source = raw.decode("utf-8")
        except UnicodeDecodeError:
            errors.append(label + ": expected UTF-8")
            continue
        if not raw.endswith(b"\n"):
            errors.append(label + ": missing final newline")
        for line_number, line in enumerate(source.splitlines(), 1):
            if line.rstrip() != line:
                errors.append(f"{label}:{line_number}: trailing whitespace")
        if path.suffix == ".py":
            try:
                ast.parse(source, filename=label)
            except SyntaxError as error:
                errors.append(f"{label}:{error.lineno}: {error.msg}")
        elif path.suffix == ".js":
            checked = subprocess.run(["node", "--check", str(path)],
                                     capture_output=True, text=True, cwd=ROOT)
            if checked.returncode:
                errors.append(label + ": " + checked.stderr.strip())
    print(json.dumps({"check": "authored source syntax and whitespace",
                      "files": len(files) + len(python_files),
                      "scope": "src JavaScript/CSS and tools Python; generated/vendor excluded",
                      "pass": not errors, "errors": errors}, indent=2))
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())

#!/usr/bin/env python3
"""Create a deterministic source + offline application ZIP, without private notes."""
from pathlib import Path
from zipfile import ZipFile, ZipInfo, ZIP_DEFLATED
import argparse
from build import build
from release import application_version
ROOT=Path(__file__).resolve().parents[1]
p=argparse.ArgumentParser()
p.add_argument('output',nargs='?',default=str(ROOT/('math_cards_v'+application_version(ROOT).replace('.','_')+'.zip')))
args=p.parse_args()
build()
output=Path(args.output).resolve()
excluded={'.git','node_modules','__pycache__','.venv','.pytest_cache','.openai','.codex','.codex-remote-attachments','.agents','.aws'}
files=[f for f in ROOT.rglob('*') if f.is_file() and not any(x in excluded for x in f.relative_to(ROOT).parts) and f.relative_to(ROOT).parts[:2]!=('docs','publishing') and not any(part.startswith('qa-') for part in f.relative_to(ROOT).parts) and f.name!='.env' and not f.name.startswith('.env.') and f.suffix not in {'.pyc','.zip'} and f!=output and f!=ROOT/'START_HERE.html']
with ZipFile(output,'w',compression=ZIP_DEFLATED,compresslevel=9) as archive:
    for f in sorted(files):
        name='math-cards/'+f.relative_to(ROOT).as_posix()
        info=ZipInfo(name,date_time=(2026,10,27,0,0,0))
        info.compress_type=ZIP_DEFLATED
        info.external_attr=0o100644<<16
        archive.writestr(info,f.read_bytes())
    info=ZipInfo('math-cards/START_HERE.html',date_time=(2026,10,27,0,0,0))
    info.compress_type=ZIP_DEFLATED
    info.external_attr=0o100644<<16
    archive.writestr(info,(ROOT/'dist/index.html').read_bytes())
with ZipFile(output) as archive:
    assert archive.testzip() is None
    assert archive.read('math-cards/START_HERE.html')==(ROOT/'dist/index.html').read_bytes()
print(f'{output}\n{len(files)+1} files; {output.stat().st_size:,} bytes')

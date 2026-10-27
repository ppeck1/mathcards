"""Release identity shared by the build, checks and offline packager."""
import json
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]


def application_version(root=ROOT):
    version = json.loads((Path(root) / 'package.json').read_text(encoding='utf-8'))['version']
    if not isinstance(version, str) or not re.fullmatch(r'\d+\.\d+\.\d+(?:-[A-Za-z0-9.-]+)?', version):
        raise ValueError('package.json must declare a valid application version')
    return version


def stamp_template(template, version):
    template = re.sub(r'([?&]v=)\d+\.\d+\.\d+(?:-[A-Za-z0-9.-]+)?', lambda match: match[1] + version, template)
    return re.sub(r'(<span\b[^>]*data-application-version[^>]*>)[^<]*(</span>)',
                  lambda match: match[1] + version + match[2], template)

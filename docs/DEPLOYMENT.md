# Mathcards deployment

The public source lives at [ppeck1/mathcards](https://github.com/ppeck1/mathcards).
The hosted application is [ppeck.me/mathcards](https://ppeck.me/mathcards/).
The project uses the account's existing GitHub Pages custom domain. This
repository does not change DNS or add a CNAME file.

## What updates the demo

The [Pages workflow](../.github/workflows/pages.yml) rebuilds the application
from canonical source on every push to `main`. It also accepts a manual run
from the repository's Actions tab. A successful run on `main` publishes only
`dist/` to GitHub Pages, after both the application tests and content checks
pass. The deployment's `github-pages` environment links to the resulting URL.

Pull requests into `main` build and run the same checks. They do not upload a
Pages artifact or deploy. A manual run from another branch validates that
branch without deploying it. Main deployments share a queue; a pull request
can replace its own older validation run without cancelling a main deployment.

GitHub repository **Settings → Pages → Build and deployment → Source** must
use **GitHub Actions**. Pages and Actions must be enabled for the repository.
No personal access token, separate hosting account, scheduled job or copied
website content is required.

## Develop and validate locally

Use Node.js 22 and Python 3.11 to match CI. Install the two pinned Python
validation dependencies, then run the same commands as the workflow from the
repository root:

```sh
python -m pip install --requirement requirements-checks.txt
python tools/build.py
node --test tests/*.test.mjs
python tools/check.py
```

The application has no npm runtime dependencies. On systems whose Python
command is `python3`, substitute that command. The build regenerates the
catalog, written exports, `START_HERE.html` and `dist/index.html`. The content
check also verifies metadata, notation coverage and the export pipeline.

Open `START_HERE.html` or `dist/index.html` directly to review the offline
application. For a served preview, run `python -m http.server 8000 --directory
dist` and open `http://localhost:8000/`. All application assets are embedded,
so the same build works at the hosted `/mathcards/` path.

## Add content once

Edit the canonical source and shared modules, then rebuild and validate before
pushing. See the main [README](../README.md) and
[architecture guide](ARCHITECTURE.md) for the content and application layout.
New cards need their registry entry, mathematical model, connected story,
visuals, definitions and notation links to agree. A new visual mechanism may
need a renderer; changing JSON alone does not implement it. Existing reusable
renderers can serve additional cards through the shared playground contract.

Once a validated change reaches `main`, the workflow rebuilds the live demo
from that same source. There is no second card collection to maintain on
ppeck.me. A failed build or check leaves the previously successful demo in
place; inspect the failed Actions step, correct the source and push again.

## Workflow maintenance

The workflow grants repository read access to validation. Only the deployment
job receives Pages write access and an OpenID Connect token, and it runs only
after validation succeeds on an eligible `main` run. Only `dist/` is uploaded;
repository notes, local QA captures and publication drafts are not part of the
hosted app.

Official GitHub actions are pinned to full revisions. Their release references
at setup were [checkout v7.0.1](https://github.com/actions/checkout/releases/tag/v7.0.1),
[setup-node v7.1.0](https://github.com/actions/setup-node/releases/tag/v7.1.0),
[setup-python v7.1.0](https://github.com/actions/setup-python/releases/tag/v7.1.0),
[configure-pages v6.0.0](https://github.com/actions/configure-pages/releases/tag/v6.0.0),
[upload-pages-artifact v5.0.0](https://github.com/actions/upload-pages-artifact/releases/tag/v5.0.0)
and [deploy-pages v5.0.1](https://github.com/actions/deploy-pages/releases/tag/v5.0.1).
When updating an action, verify its official release and update both its pinned
revision and version comment. GitHub's
[custom Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
describes the deployment environment and permissions.

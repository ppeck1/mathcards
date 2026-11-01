# Temml 0.13.5 · build dependency

The compiler is vendored from the published `temml@0.13.5` npm package, without
running package scripts. Upstream: https://github.com/ronkok/Temml.
API documentation: https://temml.org/docs/en/administration.

`temml.cjs` SHA-256:
`51b2f0314be4fa2aebed0811c0ae8bc334dff28e8e3d18951f4520bfd9985d4f`.

The upstream MIT license is retained in `LICENSE`. The upstream `Temml-Local.css` stylesheet is adapted in `src/formula.css`
with its local-font declaration removed. No font or compiler is fetched by the
application. The compiler is never included in its JavaScript bundle.

`tools/build_mathml.cjs` compiles canonical card TeX with strict errors, untrusted
commands disabled and source annotations. Unsupported formulas fail the build.

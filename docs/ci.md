CI / CD overview

What I added
- `/.github/workflows/ci.yml`: runs lint, tests (Node 16/18 matrix), coverage and builds on `main`. Uploads `.next` as an artifact.
- `/.github/workflows/deploy-vercel.yml`: deploys to Vercel using the Vercel CLI. Builds on `main` and creates preview for PRs.
- `/.github/workflows/release.yml` and `/.releaserc`: semantic-release pipeline (runs on tag push) to publish releases and changelogs.
- `/.env.example`: documents `NEXT_PUBLIC_*` env keys used by the app.
- `/.nvmrc`: pins Node version to `18`.

Required repository secrets
- `VERCEL_TOKEN` — token for Vercel CLI deploys.
- `GITHUB_TOKEN` — provided by Actions for GitHub API calls (already available as `secrets.GITHUB_TOKEN`).
- `NPM_TOKEN` — (optional) for publishing packages via semantic-release.

How it works (why these steps)
- Lint + tests: ensures PRs are validated before merge.
- Matrix testing: validates on common Node LTS versions.
- Build on main only: avoids wasted builds for feature branches, but still creates preview deployments for PRs.
- Deploy with Vercel CLI + `--prebuilt`: uses CI-produced build when present for maximum parity between test and production.
- semantic-release: automates versioning, changelog, and GitHub Releases based on commit history.

Quick local checks
```bash
npm ci
npm run lint
npm test
npm run build
```

Next steps for you
- Add repository secret `VERCEL_TOKEN` in GitHub settings.
- Protect `main`: require status checks (CI) and require PR reviews before merge.
- (Optional) Add `NPM_TOKEN` if you want automated npm publishing.

# Advora Public Website — Operating Rules

**Last reviewed: 2026-04-17**

## Source of truth

- **GitHub repo (authoritative):** `git@github.com:kamilabarbaraarca-ux/advora-website.git`
- **Canonical local folder:** `/Users/juangabrielarca/02_Advora/website`
- **Immutable local backup:** `/Users/juangabrielarca/02_Advora/website_backup`
- **Packaged zip backups:** `/Users/juangabrielarca/02_Advora/website_backups_export`
- **Production domain:** `advoralabs.com`
- **Hosting:** Netlify (publish dir = repo root)

## Rules

1. **GitHub is the source of truth.** No change is considered real until it is committed and pushed to `origin/main`.
2. **Public deployments come only from this repo.** Netlify (or any other host) must be wired to `kamilabarbaraarca-ux/advora-website`, root directory.
3. **Never deploy the HQ dashboard publicly.** `/02_Advora/deploy`, `/02_Advora/09_Dashboard`, `/02_Advora/dashboard`, `/02_Advora/hq_dashboard` are internal — see `/02_Advora/DO_NOT_DEPLOY_DASHBOARD.md`.
4. **All changes go through Git.** No editing files directly on the live host. Edit locally → commit → push → let Netlify deploy.
5. **Branch policy.** `main` is the deployable branch. Meaningful work goes through commits with clear messages; for risky changes, use a feature branch and merge after review.
6. **Backups before large changes.** Run `/02_Advora/tools/backup-website.sh` before any risky refactor or bulk rewrite.
7. **No secrets in the repo.** No API keys, tokens, or credentials. `.env` and similar are gitignored.
8. **Identity check before pushing.** `git remote -v` must resolve to `kamilabarbaraarca-ux/advora-website`. If it doesn't, stop.

## If something breaks

See `RECOVERY.md` in this repo for restore paths.

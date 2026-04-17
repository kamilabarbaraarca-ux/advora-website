# DEPLOYMENT SOURCE OF TRUTH

**Last reviewed: 2026-04-17**

## The only source of `advoralabs.com`

This repository — `git@github.com:kamilabarbaraarca-ux/advora-website.git` — is the **only** valid source for the public website at `advoralabs.com`.

- **Deploying host:** Netlify
- **Publish directory:** repo root (`.`) — see `netlify.toml`
- **Build command:** none (static site)

## Folders / repos that are NOT valid public sources

The following are **internal Advora HQ / Command Center** folders. They contain dashboards titled *"Advora HQ — Command Center"* and must never be deployed publicly:

- `/Users/juangabrielarca/02_Advora/deploy/`
- `/Users/juangabrielarca/02_Advora/09_Dashboard/`
- `/Users/juangabrielarca/02_Advora/dashboard/`
- `/Users/juangabrielarca/02_Advora/hq_dashboard/`

If any Netlify / Vercel / GitHub Pages project is wired to any of these → **disconnect it immediately**.

## How to verify before a deploy

```bash
cd /Users/juangabrielarca/02_Advora/website
git remote -v   # must contain: kamilabarbaraarca-ux/advora-website
grep -l "Advora HQ — Command Center" index.html  # must return NOTHING
head -c 200 index.html  # should show the public marketing markup, not a dashboard
```

## If Netlify is misconfigured

1. Log into Netlify.
2. Confirm the site connected to `advoralabs.com` is linked to the GitHub repo `kamilabarbaraarca-ux/advora-website`.
3. Confirm publish directory = `.` (repo root).
4. Disconnect any other site that claims `advoralabs.com` or that publishes from an HQ/dashboard source.

See also: `OPERATING_RULES.md`, `RECOVERY.md`, and `/02_Advora/DO_NOT_DEPLOY_DASHBOARD.md`.

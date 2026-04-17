# Advora Public Website — Recovery Guide

**Last reviewed: 2026-04-17**

If the public website breaks or the canonical folder is damaged, this is how you bring it back.

## Locations at a glance

| What | Where |
|---|---|
| Canonical folder | `/Users/juangabrielarca/02_Advora/website` |
| Immutable local backup | `/Users/juangabrielarca/02_Advora/website_backup` |
| Packaged zip backups | `/Users/juangabrielarca/02_Advora/website_backups_export/` |
| GitHub (source of truth) | `git@github.com:kamilabarbaraarca-ux/advora-website.git` |
| Google Drive-ready mirror | `/Users/juangabrielarca/02_Advora/google_drive_ready/Advora/` |

## Recovery paths (fastest first)

### Option A — restore from GitHub (preferred)

```bash
cd /Users/juangabrielarca/02_Advora
mv website website.broken-$(date +%Y%m%d-%H%M%S)
git clone git@github.com:kamilabarbaraarca-ux/advora-website.git website
```

### Option B — restore from the immutable local backup

```bash
/Users/juangabrielarca/02_Advora/tools/restore-website.sh immutable
```

### Option C — restore from the latest packaged zip

```bash
/Users/juangabrielarca/02_Advora/tools/restore-website.sh latest-zip
```

### Option D — restore from a specific zip

```bash
/Users/juangabrielarca/02_Advora/tools/restore-website.sh zip /path/to/file.zip
```

## After any restore

1. `cd /Users/juangabrielarca/02_Advora/website`
2. `git status` — confirm the working tree is clean
3. `git remote -v` — must be `kamilabarbaraarca-ux/advora-website`
4. Open `index.html` in a browser to verify visually
5. If Netlify needs a nudge, push any trivial commit or trigger a redeploy

## Make a fresh backup before risky work

```bash
/Users/juangabrielarca/02_Advora/tools/backup-website.sh pre-<change-name>
```

## Dashboard separation reminder

The internal HQ / Command Center lives in `/02_Advora/deploy/`, `/02_Advora/09_Dashboard/`, `/02_Advora/dashboard/`, `/02_Advora/hq_dashboard/`. Never deploy any of them publicly. See `/02_Advora/DO_NOT_DEPLOY_DASHBOARD.md`.

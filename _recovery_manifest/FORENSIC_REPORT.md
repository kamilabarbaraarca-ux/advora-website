# Advora Website — Forensic Recovery Report

**Generated:** 2026-04-17 (UTC)
**Operator:** Claude (Cowork mode, read/copy only — no modifications to any original)
**Recovery folder:** `/Users/juangabrielarca/02_Advora/website_recovered_master/`

---

## LATEST CORRECT WEBSITE FOUND

| Field | Value |
|---|---|
| **Source file** | `/Users/juangabrielarca/07_Inbox/to_file/advora-assets/advora-v15.html` |
| **Size** | 77,952 bytes (1,180 lines) |
| **Modified** | 2026-04-15 21:37:09 |
| **Title** | `Advora — Patient Acquisition for Specialist Medical Clinics` |
| **Hero H1** | `Predictable patient acquisition for <em>specialist clinics</em>` (line 523) |
| **Hero sub** | "We help IVF, hair transplant and aesthetic clinics turn demand into booked consultations." |
| **MD5** | `e8d983ada977fffcd1e0e71a05f98d65` |
| **Self-containment** | Single-file HTML with embedded CSS/JS and inline SVG/data-URI images |
| **External dependencies** | Google Fonts CDN only (Plus Jakarta Sans + Fraunces) |
| **Landing-page score** | 6/6 (max) — matches all target signals: "Predictable patient acquisition" (✅), "specialist clinics" (✅), IVF (✅), hair transplant (✅), 27 gradient refs (✅) |

**Cross-verification:** The on-disk file is byte-identical to the last-saved Claude Code autosave (`.claude/file-history/...@v14`), confirming nothing newer exists anywhere on disk.

---

## ALL RELEVANT SOURCE PATHS

### A. Landing-page candidates (scored by content signals)

| Score | Modified | Size | Path | Category |
|---|---|---|---|---|
| **6** ⭐ | 2026-04-15 21:37 | 77,952 | `07_Inbox/to_file/advora-assets/advora-v15.html` | **LATEST — RECOVERED** |
| 4 | 2026-04-15 17:10 | 66,923 | `_STAGE1_QUARANTINE_2026-04-17/version-duplicates/advora-v15 (1).html` | Earlier draft of v15 (4h older, different MD5) |
| 4 | 2026-04-13 12:44 | 129,509 | `_STAGE1_QUARANTINE_2026-04-17/version-duplicates/advora-v7.html` | Older iteration |
| 3 | 2026-04-13 21:04 | 87,623 | `_STAGE1_QUARANTINE_2026-04-17/version-duplicates/advora-v14.html` | Older iteration |
| 3 | 2026-04-13 20:05 | 78,167 | `_STAGE1_QUARANTINE_2026-04-17/version-duplicates/advora-v13.html` | Older iteration |
| 3 | 2026-04-13 19:49 | 77,463 | `_STAGE1_QUARANTINE_2026-04-17/version-duplicates/advora-v12.html` | Older iteration |
| 3 | 2026-04-13 19:01 | 56,139 | `_STAGE1_QUARANTINE_2026-04-17/version-duplicates/advora-v11.html` | Older iteration |
| 3 | 2026-04-13 16:31 | 157,762 | `_STAGE1_QUARANTINE_2026-04-17/version-duplicates/advora-v10.html` | Older iteration |
| 3 | 2026-04-13 14:51 | 152,885 | `_STAGE1_QUARANTINE_2026-04-17/version-duplicates/advora-v9.html` | Older iteration |
| 3 | 2026-04-13 14:08 | 147,301 | `_STAGE1_QUARANTINE_2026-04-17/version-duplicates/advora-v8.html` | Older iteration |
| 3 | 2026-04-13 09:59 | 93,439 | `_STAGE1_QUARANTINE_2026-04-17/version-duplicates/files (4)/advora-v6-preview.html` | Older iteration |
| 1 | 2026-04-13 09:22 | 50,007 | `_STAGE1_QUARANTINE_2026-04-17/version-duplicates/files (2)/advora-v4-main.html` | Early prototype |

### B. OLD marketing site (simpler version — likely what's currently on advoralabs.com)

| Path | Size / Date | Notes |
|---|---|---|
| `07_Inbox/to_file/advora-assets/advora-website/` | 47 files, Apr 12 | Multi-page site titled "Advora \| Performance Marketing for Service Businesses". Full Netlify deploy config, Spanish version, privacy page, 404. Has its own `.git` with commit `b60fae0 Initial Advora website deployment`. |
| `07_Inbox/to_file/advora-assets/advora-website.tar.gz` | 234,046 bytes, Apr 13 | Tarball backup of same |

### C. Internal HQ dashboard (NOT the landing page)

| Path | Notes |
|---|---|
| `02_Advora/deploy/` | **This is what advoralabs.com currently serves.** Titled `Advora HQ — Command Center`. Multi-page dashboard. Git-tracked via `02_Advora/.git`. Last commit `a45add2 Fix favicon caching permanently with versioned branded icon references`. |
| `02_Advora/09_Dashboard/` | Dashboard development copy (same content) |
| `02_Advora/dashboard/` | Earlier dashboard draft (47,617 bytes) |

### D. Quarantine folder (created by 2026-04-17 cleanup)

| Path | Notes |
|---|---|
| `_STAGE1_QUARANTINE_2026-04-17/version-duplicates/` | 14 older landing-page iterations (v3-v15 drafts) — none newer than v15 |
| `_STAGE1_QUARANTINE_2026-04-17/desktop-junk/stale_Advora-HQ/` | Older HQ dashboard snapshots |
| `_STAGE1_QUARANTINE_2026-04-17/installers/` | Unrelated installers |

### E. Autosave / history backups

| Path | Notes |
|---|---|
| `.claude/file-history/54c4df3c-.../5667ed49e1009946@v1` … `@v14` | 14 incremental saves of v15 landing page during Claude Code edits (Apr 15 17:52 → 21:58). The final `@v14` is MD5-identical to the on-disk `advora-v15.html`. |
| `.claude/paste-cache/29a40ee2a055e8ad.txt` | 5,774 bytes, Apr 15 17:50 — fragment snippet, not a full page |
| `.claude/paste-cache/56ea94c975bf62dd.txt` | 12,438 bytes, Apr 15 19:44 — fragment snippet |
| `Library/Mobile Documents/.../Advora-HQ/` | iCloud backup — contains only dashboard files, no landing page |

### F. Other

| Path | Notes |
|---|---|
| `~/.Trash/` | **Not accessible** via MCP file permissions (macOS restriction). Recommend manually opening Finder → Trash to verify nothing relevant was trashed. |
| `02_Advora/.git` | Tracks only HQ dashboard files (`deploy/`, `09_Dashboard/`, `tools/`). Landing page was never committed to this repo. `git log --all --diff-filter=D` returned no deleted landing-page files. |
| `advora-website/.git` | Single commit from Apr 12 — predates v15 and has no newer history. |

---

## RESTORED RECOVERY FOLDER

**Path:** `/Users/juangabrielarca/02_Advora/website_recovered_master/`

**Total:** 27 files, ~256 KB

All files are **COPIES** made with `cp -p` (preserves timestamps and attributes). **No original file was moved, modified, or deleted.** Full per-file provenance is in `_recovery_manifest/COPY_LOG.txt`.

### What was copied and from where

| Destination file | Source | Category |
|---|---|---|
| `index.html` | `07_Inbox/to_file/advora-assets/advora-v15.html` | **PRIMARY landing page** |
| `netlify.toml` | `07_Inbox/to_file/advora-assets/advora-website/netlify.toml` | Full Netlify config with `publish = "."` and security headers |
| `_headers` | `07_Inbox/to_file/advora-assets/advora-website/_headers` | Security + cache-control headers |
| `_redirects` | `07_Inbox/to_file/advora-assets/advora-website/_redirects` | HTTPS/www redirects + `/privacy` + `/es/` routing |
| `robots.txt` | `07_Inbox/to_file/advora-assets/advora-website/robots.txt` | Crawl rules |
| `sitemap.xml` | `07_Inbox/to_file/advora-assets/advora-website/sitemap.xml` | 3 URLs: `/`, `/es/`, `/privacy` |
| `humans.txt` | `07_Inbox/to_file/advora-assets/advora-website/humans.txt` | |
| `security.txt` | `07_Inbox/to_file/advora-assets/advora-website/security.txt` | |
| `.well-known/security.txt` | `07_Inbox/to_file/advora-assets/advora-website/.well-known/security.txt` | RFC 9116 location |
| `manifest.json` | `07_Inbox/to_file/advora-assets/advora-website/manifest.json` | Marketing-site PWA manifest |
| `site.webmanifest` | `02_Advora/deploy/site.webmanifest` | Branded Advora manifest (from HQ) |
| `favicon.ico` | `02_Advora/deploy/favicon.ico` | 15,406 bytes — current branded |
| `favicon-16x16.png` | `02_Advora/deploy/favicon-16x16.png` | |
| `favicon-32x32.png` | `02_Advora/deploy/favicon-32x32.png` | |
| `apple-touch-icon.png` | `02_Advora/deploy/apple-touch-icon.png` | |
| `android-chrome-192x192.png` | `02_Advora/deploy/android-chrome-192x192.png` | |
| `android-chrome-512x512.png` | `02_Advora/deploy/android-chrome-512x512.png` | |
| `404.html` | `07_Inbox/to_file/advora-assets/advora-website/404.html` | Legacy 404 (old branding — see note below) |
| `privacy.html` | `07_Inbox/to_file/advora-assets/advora-website/privacy.html` | Legacy privacy page (old branding — see note) |
| `es/index.html` | `07_Inbox/to_file/advora-assets/advora-website/es/index.html` | Legacy Spanish page (old branding — see note) |
| `css/main.css` | `07_Inbox/to_file/advora-assets/advora-website/css/main.css` | Referenced by privacy/404/es |
| `js/main.js` | `07_Inbox/to_file/advora-assets/advora-website/js/main.js` | Referenced by privacy/404/es |
| `images/advora-blue.svg` | `07_Inbox/to_file/advora-assets/advora-website/images/advora-blue.svg` | |
| `images/advora-header.svg` | `07_Inbox/to_file/advora-assets/advora-website/images/advora-header.svg` | |
| `images/advora-icon.svg` | `07_Inbox/to_file/advora-assets/advora-website/images/advora-icon.svg` | |
| `images/advora-white.svg` | `07_Inbox/to_file/advora-assets/advora-website/images/advora-white.svg` | |
| `.nojekyll` | `07_Inbox/to_file/advora-assets/advora-website/.nojekyll` | GitHub Pages compat (harmless on Netlify) |

### Integrity verification

```
Original v15 MD5:  e8d983ada977fffcd1e0e71a05f98d65
Copied index MD5:  e8d983ada977fffcd1e0e71a05f98d65
✅ MATCH — byte-identical
```

All references in `index.html` are to Google Fonts CDN (external, always available) or inline SVG/data URIs. All references in legacy support pages (`privacy.html`, `404.html`, `es/index.html`) resolve to files present in the recovery folder.

---

## FINAL FOLDER TREE

```
website_recovered_master/
├── .nojekyll
├── .well-known/
│   └── security.txt
├── 404.html                       (legacy, old branding)
├── _headers
├── _recovery_manifest/
│   ├── COPY_LOG.txt
│   └── FORENSIC_REPORT.md         (this file)
├── _redirects
├── android-chrome-192x192.png
├── android-chrome-512x512.png
├── apple-touch-icon.png
├── css/
│   └── main.css                   (legacy, for privacy/404/es)
├── es/
│   └── index.html                 (legacy Spanish, old branding)
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon.ico
├── humans.txt
├── images/
│   ├── advora-blue.svg
│   ├── advora-header.svg
│   ├── advora-icon.svg
│   └── advora-white.svg
├── index.html                     ⭐ THE LATEST LANDING PAGE (v15)
├── js/
│   └── main.js                    (legacy)
├── manifest.json
├── netlify.toml
├── privacy.html                   (legacy, old branding)
├── robots.txt
├── security.txt
├── site.webmanifest
└── sitemap.xml
```

---

## MISSING OR UNCERTAIN ITEMS

1. **macOS Trash** — not accessible through the MCP file layer. If you want full certainty, manually check Finder → Trash for any Advora HTML files. The `.claude/file-history` plus git plus disk inventory already give strong evidence that nothing newer than v15 exists, so this is a low-risk gap.

2. **Spanish version mismatch** — the `es/index.html` copied is the OLD marketing-site Spanish page from Apr 12 ("Performance Marketing for Service Businesses" branding). **No Spanish version of the new v15 design exists anywhere on disk.** If you want a Spanish v15, it will need to be written fresh.

3. **privacy.html / 404.html branding mismatch** — same issue as above. Old-branding pages were kept so the `_redirects` rules (`/privacy → /privacy.html`, `/* → /404.html`) don't produce broken links. Replace them later with new-branding versions if needed.

4. **sitemap.xml** still lists `lastmod 2026-04-12` — consider updating to today's date post-deploy (cosmetic, doesn't affect deploy).

5. **Email obfuscation in legacy `es/index.html`** — contains `/cdn-cgi/l/email-protection#…` links, which are Cloudflare-specific artifacts. They won't work on Netlify, but they degrade gracefully (the email is still inline in the HTML).

6. **No cross-checked backups in iCloud or git** contain a newer landing page than v15.

---

## DEPLOY READINESS: **YES** ✅

The recovery folder is directly deployable to Netlify:

- ✅ `index.html` exists at root (the correct v15 landing page)
- ✅ `netlify.toml` has `publish = "."` — Netlify will serve the folder root
- ✅ All internal references resolve (no broken links for `index.html`)
- ✅ Security headers via `_headers` and `netlify.toml`
- ✅ Redirect rules via `_redirects` (HTTPS/www enforcement, `/privacy`, `/es/`, 404)
- ✅ Favicon set complete (6 files + 2 manifests)
- ✅ Supporting pages exist for every `_redirects` target
- ✅ `robots.txt` + `sitemap.xml` for SEO
- ✅ Byte-identical to the last saved Claude Code edit

Optional first-deploy tweaks (you can do these after deploying, not required):
- Update `sitemap.xml` `<lastmod>` to today's date
- Rebrand `privacy.html`, `404.html`, and `es/index.html` to match the new v15 design

---

## EXACT FOLDER TO UPLOAD TO NETLIFY

```
/Users/juangabrielarca/02_Advora/website_recovered_master
```

**How to deploy:**

Option A — Netlify CLI (fastest):
```
cd /Users/juangabrielarca/02_Advora/website_recovered_master
netlify deploy --prod --dir=.
```

Option B — Netlify dashboard drag-and-drop:
Open the folder in Finder, zip it, and drop the zip onto your site in the Netlify dashboard.

Option C — Update existing `advoralabs.com` site in Netlify:
Point your current Netlify site's publish directory to this folder (or replace its source). Do NOT delete the existing `02_Advora/deploy/` folder — that's still your internal HQ dashboard.

---

## NOTE ON ROOT CAUSE

The issue was NOT file deletion. It was misrouted deployment:
- **Landing page (what you want on advoralabs.com):** the v15 single-file HTML, living in `07_Inbox/…/advora-v15.html`, never placed into a deploy path and never committed to git.
- **What advoralabs.com currently serves:** `02_Advora/deploy/` (your internal "Advora HQ — Command Center" dashboard), because the root `02_Advora/netlify.toml` has `publish = "deploy"`.
- **The old simple version** you may also have seen is either a stale Netlify deploy from the Apr 12 `advora-website/` folder, or a cached snapshot.

Once you deploy the recovery folder, update your Netlify site settings (or `netlify.toml`) so advoralabs.com points to `website_recovered_master` (or to whatever path you move this folder to).

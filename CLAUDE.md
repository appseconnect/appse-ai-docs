# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Documentation site for **appse ai** (B2B SaaS AI & Automation Orchestration). Built with **Next.js 16 (App Router) + Fumadocs 16 + Tailwind 4**, deployed as a Next.js standalone server (Docker). Package manager: **pnpm 9.15.2** (Node >= 20).

**Migration in progress**: this repo is mid-migration from Docusaurus to Fumadocs on branch `sam/fumadocs-update`. The old `src/pages`, `src/css`, `src/components/HomepageFeatures`, and `content_backup/` are tracked-as-deleted; the entire `src/app/` Fumadocs implementation is currently untracked. Don't be surprised by churn — `git status` will show large staged deletions until the migration PR lands.

Brand: always write `appse ai` (lowercase, with a space). Never alter partner marks (SAP, Microsoft, Google, AWS).

## Commands

- `pnpm dev` — dev server on http://localhost:3000
- `pnpm build` — production build (run before opening a PR; Fumadocs compiles all MDX, so build catches frontmatter and MDX errors)
- `pnpm start` — start built server on port **3022** (not 3000)
- `pnpm typecheck` — `tsc --noEmit`
- Migration scripts (run on demand, not part of build):
  - `pnpm migrate:meta` — convert legacy Docusaurus `_category_.json` → `meta.json`
  - `pnpm migrate:admonitions` — Docusaurus `:::note` → Fumadocs `::note`
  - `pnpm migrate:frontmatter` — strip Docusaurus-only frontmatter
  - `pnpm migrate:redirects` — regenerate `redirects.generated.ts` from git history + content
  - `pnpm fix:mdx` — patch MDX compatibility issues

No test suite or linter is configured. `pnpm build` is the verification gate.

## Architecture

This is a **content-driven** site: MDX files under `docs/` are the source of truth, compiled by Fumadocs MDX at build time.

### Content → routes pipeline

1. `source.config.ts` defines a Fumadocs MDX collection rooted at `docs/` (all `*.md` / `*.mdx`). Remark plugins: `remark-directive` + `remarkDirectiveAdmonition` (enables `::note` style admonitions). Rehype pipeline prepends `rehype-raw` so legacy Docusaurus raw HTML (`<Tabs>`/`<TabItem>` in `.md` files) is normalized to HAST elements; this is what lets the default `rehype-toc` plugin walk the tree and produce the right-rail TOC. MDX-native nodes are passed through unmodified. If you ever need to disable `rehype-raw`, the TOC will silently disappear on every page that mixes raw HTML with markdown.
2. Fumadocs generates a virtual `.source/` module at build time; `tsconfig.json` aliases `collections/*` → `./.source/*`.
3. `src/lib/source.ts` wraps the generated collection in a Fumadocs `loader()` with `baseUrl: "/"`.
4. `src/app/(docs)/[...slug]/page.tsx` is the docs catch-all that renders any doc page via `source.getPage(slug)`. It's a **required** catch-all (`[...slug]`, not `[[...slug]]`) so it does not match `/`.
5. `src/app/api/search/route.ts` exposes the Fumadocs search index over the same `source`.

### Route groups (App Router)

The app uses two route groups so the landing page and docs use different chrome:

- `src/app/(home)/` — wraps `/` with **HomeLayout** (`fumadocs-ui/layouts/home`). Just a navbar, no sidebar. `page.tsx` is the marketing landing with CTA links into the docs.
- `src/app/(docs)/[...slug]/` — wraps every docs page with **DocsLayout** (`fumadocs-ui/layouts/docs`). Sidebar tabs are configured here (Platform / App Integrations).

Both layouts read shared nav config from `src/lib/layout.shared.tsx` (`baseOptions()` — logo + title + external link to `workflow.appse.ai`). Add a new top-level area (e.g. `/blog`, `/changelog`) as another route group; do **not** add new top-level URL segments without thinking about which layout should wrap them.

### Folder = section

`docs/platform/` and `docs/app_integrations/` are the two top-level sections, controlled by `docs/meta.json`. Each subfolder uses its own `meta.json` to set `title`, `pages` ordering, and optional `pagesIndex` (the section's landing page). Use `"..."` in `pages` for alphabetical auto-inclusion of unlisted files.

### MDX authoring rules

- Frontmatter must include at least `title`. Optional: `description`.
- Use Fumadocs admonition syntax: `::note`, `::warning`, `::tip`, `::info`, `::caution` — **not** Docusaurus `:::note`.
- `Tabs` / `TabItem` components are provided as MDX globals via `src/components/mdx.tsx` (shim in `src/components/docusaurus-tabs.tsx`) for backward compat with migrated Docusaurus content.
- Static images live under `public/img/` and are served at `/img/...`.

### Redirects

`redirects.generated.ts` is generated, not hand-edited. It feeds `next.config.ts` `redirects()`. Regenerate with `pnpm migrate:redirects` whenever slugs or paths change — the script walks git history and current docs to preserve old URLs (most entries map Docusaurus-style `/app-integrations/*` → Fumadocs-style `/app_integrations/*`).

Note: the previous home-page redirect (`/` → `/platform/what-is-appse-ai`) has been removed — `/` now renders the HomeLayout landing page. Do not reintroduce that redirect.

### Path aliases

- `@/*` → `src/*`
- `collections/*` → `.source/*` (Fumadocs-generated)

### Output mode

`next.config.ts` sets `output: "standalone"`, which is what the Dockerfile copies into the runner stage. Don't change this without updating the Dockerfile.

## Adding a doc page

1. Create `docs/<section>/<slug>.md(x)` with `title` frontmatter.
2. Add the slug to that folder's `meta.json` `pages` array (or rely on `"..."`).
3. `pnpm build` to verify it compiles and routes.

## Gotchas

- **No emojis** in files unless explicitly requested.
- Use `.mdx` (not `.md`) if you need JSX/components.
- `pnpm start` binds **3022**, but Docker and `pnpm dev` use **3000**. Match the right port.
- Both `package-lock.json` and `pnpm-lock.yaml` exist; **pnpm is the source of truth** (see `packageManager` in `package.json` and the Dockerfile). Don't run `npm install`.
- Default branch is `main`. Build must pass before PR (per `AGENTS.md`).
- The docs catch-all is `[...slug]` (required), not `[[...slug]]` (optional). Don't switch it back — that would re-collide with `/` and break the home page.

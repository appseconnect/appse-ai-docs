# appse ai Documentation

Official documentation for [appse ai](https://docs.appse.ai).

Built with [Next.js](https://nextjs.org/) and [Fumadocs](https://www.fumadocs.dev/).

## Quick start

### Prerequisites

- Node.js 20 or higher
- pnpm 9.x

### Install

```bash
pnpm install
```

### Local development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). The home page redirects to the platform overview.

### Production build

```bash
pnpm build
pnpm start
```

## Project structure

```
appse-ai-docs/
├── docs/                    # Documentation (Markdown / MDX)
│   ├── platform/            # Platform guides
│   └── app_integrations/    # App integration guides
├── public/img/              # Static images (served at /img/...)
├── src/
│   ├── app/                 # Next.js App Router (docs + search API)
│   ├── components/          # MDX components
│   └── lib/                 # Fumadocs source + layout config
├── scripts/                 # Content migration utilities
├── source.config.ts         # Fumadocs MDX collection config
└── next.config.ts           # Next.js + legacy URL redirects
```

## Adding documentation

1. Add a `.md` or `.mdx` file under `docs/platform/` or `docs/app_integrations/`.
2. Include frontmatter with at least `title`:

```markdown
---
title: Page title
description: Optional subtitle for SEO
---

# Content
```

3. Add the page slug (filename without extension) to the parent folder's `meta.json` `pages` array, or use `"..."` for alphabetical auto-inclusion.
4. Use Fumadocs admonitions: `::note`, `::warning`, etc. (not Docusaurus `:::note`).
5. Run `pnpm build` before opening a PR.

## Migration scripts

| Script | Purpose |
|--------|---------|
| `pnpm migrate:meta` | Convert Docusaurus `_category_.json` to `meta.json` |
| `pnpm migrate:admonitions` | Convert `:::note` blocks to `::note` |
| `pnpm migrate:frontmatter` | Remove Docusaurus-only frontmatter fields |
| `pnpm migrate:redirects` | Regenerate `redirects.generated.ts` from git slugs + paths |

## Docker

```bash
docker build -t appse-ai-docs .
docker run -p 3000:3000 appse-ai-docs
```

The container runs the Next.js standalone server on port **3000**.

## Contributing

1. Branch from `main` (or team default branch).
2. `pnpm dev` while editing.
3. `pnpm build` to verify.
4. Open a PR.

See [CONTRIBUTING.md](CONTRIBUTING.md) for full guidelines.

## Links

- [appse ai platform](https://workflow.appse.ai/)
- [Fumadocs documentation](https://www.fumadocs.dev/)

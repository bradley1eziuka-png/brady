# Brady's Lawn Service — website mockup

Prospective-client mockup (not a production site). Built on the TanStack Start
painting template, customized for Brady's Lawn Service.

```bash
npm install
npm run dev        # preview at http://localhost:5173
npm run build      # production build (runs scripts/generate-seo-files.mjs first)
npm run typecheck && npm run lint && npm run check
```

- Config: `src/config/site.config.json` (validated by `src/config/schema.ts`). Default copy: `src/config/defaults.ts`.
- Photos: `public/images/work/` (optimized WebP). Logo: `public/images/brand/`. Original JPGs stay in `../Images/`.
- Mockup safety: `seo.noindex` is `true` (noindex meta + robots.txt Disallow) and the estimate form is in demo mode (never reports a fake success). Set a real form endpoint in `form` and flip `noindex` only after Brady approves.

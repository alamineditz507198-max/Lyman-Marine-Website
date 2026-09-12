# Lyman Marine

A premium boating editorial and community website for U.S. boat owners, fishing enthusiasts, and yacht lovers.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/lyman-marine/src/App.tsx` — homepage content, navigation, search, newsletter, and interactive editorial modules
- `artifacts/lyman-marine/src/index.css` — ocean-derived visual system, typography, responsive layout, motion, and image treatments
- `artifacts/lyman-marine/public/` — static assets when brand photography is added

## Architecture decisions

- The first release is presentation-first and frontend-only so editorial content can be shaped before adding a CMS, accounts, or monetization integrations.
- Content modules are structured as reusable editorial patterns so future sponsored stories, affiliate cards, and ad placements can be introduced without changing the overall visual language.
- The homepage uses remote editorial photography for the initial pass; production brand imagery can replace those sources in one content pass.

## Product

Lyman Marine helps boat owners buy smarter, maintain their vessels, find useful gear, fish more confidently, and share life on the water. The current homepage includes featured stories, maintenance field notes, buying paths, gear comparisons, fishing and community dispatches, newsletter signup, search, and reserved advertising space.

## User preferences

- The user wants a clean, trustworthy, luxurious boating publication with practical beginner-friendly advice and a strong community focus.
- The user plans to provide current photography, advertising, affiliate content, and additional buying content later.

## Gotchas

- The homepage is intentionally content-ready rather than connected to a CMS; replacing the initial remote image URLs and editorial data should happen before publishing.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies (all packages)
pnpm install

# Run all dev servers (frontend on :5173, server on :3000)
pnpm dev

# Build all packages
pnpm build

# Run all tests (vitest run — one-shot, no watch)
pnpm test

# Run a single package's tests
pnpm --filter @agentclinic/frontend test
pnpm --filter @agentclinic/server test
pnpm --filter @agentclinic/shared test

# Run tests in watch mode (useful during development)
pnpm --filter @agentclinic/frontend exec vitest
pnpm --filter @agentclinic/server exec vitest
pnpm --filter @agentclinic/shared exec vitest

# Run a single test file
pnpm --filter @agentclinic/server exec vitest run src/index.test.ts

# Type-check all packages
pnpm type-check

# Prisma (run from repo root — schema.prisma lives there, not in server/)
pnpm prisma migrate dev          # apply migrations + regenerate client
pnpm prisma db push              # sync schema directly (no migration file)
pnpm prisma generate             # regenerate client without migration
pnpm prisma db seed              # seed the database
pnpm prisma studio               # open Prisma Studio GUI
```

## Architecture

This is a **pnpm workspace monorepo** with three packages:

| Package | Purpose | Key deps |
|---------|---------|----------|
| `@agentclinic/shared` | TypeScript interfaces shared across frontend and backend | (none) |
| `@agentclinic/server` | Express API server, Prisma client, SQLite database | `@agentclinic/shared`, `express`, `@prisma/client` |
| `@agentclinic/frontend` | React SPA built with Vite, glassmorphic UI | `react`, `vite` |

**Data flow**: Browser → Express REST API (JSON) → Prisma Client → SQLite

The server exports its `app` (Express instance) separately from the `listen()` call, so tests can import `app` without starting a server. The server checks `NODE_ENV !== "test"` before calling `app.listen()`.

The `shared` package is a compile-to-JS package (not just types). The server depends on it via `"@agentclinic/shared": "workspace:*"`. This means `shared` must be built before `server` — the root `pnpm build` handles ordering via `pnpm -r build`.

The database is SQLite via Prisma with `better-sqlite3`. Connection string lives in `.env` (`DATABASE_URL="file:./dev.db"`). The Prisma schema and migrations are at the repo root (`prisma/`), not inside the server package.

**Data models** (in `prisma/schema.prisma`):

| Model | Key fields |
|-------|-----------|
| Agent | id, name, specialty, description, availability |
| Ailment | id, name, description, severity |
| Therapy | id, name, description, duration, cost |
| Booking | id, agentId, therapyId, scheduledAt, status |

Booking has FK relations to Agent and Therapy.

## Spec-Driven Development

All feature work is driven by specs in `specs/`:
- `mission.md` — project purpose and stakeholder alignment
- `tech-stack.md` — approved tech choices and architecture diagram
- `roadmap.md` — phased implementation plan (nano phases, ~1 day each)

Each phase gets its own subdirectory: `specs/<date>-<phase-name>/` containing `plan.md`, `requirements.md`, and `validation.md`.

**Current state**: Phase 1 (Foundation) is complete. Next up is Phase 2 (Browse & Discover) — building the dashboard shell, agent listing/detail pages, and treatment catalog.

## Frontend Patterns

The UI uses a **glassmorphic design system** — frosted glass effects with backdrop blur on a fullscreen background image. Styles are in `frontend/src/styles/`:
- `layout.css` — page shell (Header, Main, Footer with glass effects, sticky header, dark overlay)
- `glass-components.css` — reusable component classes (`.glass-card`, `.glass-card-grid`, `.glass-btn`, `.glass-hero`, `.glass-cta`)

The component tree is:
```
App
└── MainLayout
    ├── Header (sticky, nav links)
    ├── Main (flex: 1 content area)
    └── Footer
```

Each layout component has a co-located test file (`*.test.tsx`).

The tech stack plans to add shadcn/ui, React Router, and TanStack Query — none are wired up yet.

## Testing

- **Vitest** across all packages (v2.1+)
- **Frontend**: jsdom environment, `@testing-library/react` for component tests, globals enabled. Has its own `vitest.config.ts` with the jsdom plugin and React plugin.
- **Server**: supertest for HTTP-level integration tests against the Express app. No vitest config file — uses defaults.
- **Shared**: pure vitest (no DOM/HTTP needed). No vitest config file — uses defaults.
- **Co-location**: test files live next to their source files (`Foo.test.tsx` alongside `Foo.tsx`)
- **TypeScript**: strict mode across all packages. Frontend additionally enforces `noUnusedLocals` and `noUnusedParameters` — unused imports will fail type-check.

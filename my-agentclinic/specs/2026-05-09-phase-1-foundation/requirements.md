# Phase 1: Foundation - Requirements

## Scope

Phase 1 Foundation includes all 5 roadmap items:

1. Initialize project with Vite + React + TypeScript
2. Set up Express server with TypeScript
3. Configure Prisma with SQLite
4. Define core schema: Agent, Ailment, Therapy, Booking
5. Seed initial mock data

**Deliverable**: Running dev server with database schema and seed data

---

## Context

This is a **greenfield project** with no existing codebase. All infrastructure, tooling, and data models will be established from scratch.

The project is being built for:
- Course students learning spec-driven development with AI coding agents
- Developers giving AI coding demos at conference booths

---

## Decisions

### Vite Choice Rationale

**Why Vite over alternatives:**

- **Vite vs Create React App (CRA)**: Vite provides faster development server startup and HMR (Hot Module Replacement) due to native ES modules. CRA is deprecated and slower.
- **Vite vs Next.js**: Next.js adds unnecessary complexity for this project (SSR, routing, API routes) when we only need a simple React frontend with a separate Express backend.
- **Vite vs Webpack**: Vite uses esbuild for dev server (10-100x faster) and Rollup for production builds, providing better DX than raw Webpack configuration.

**How to apply**: Use Vite for all frontend build and development needs. Do not consider CRA or Next.js alternatives.

### SQLite Choice Rationale

**Why SQLite over alternatives:**

- **SQLite vs PostgreSQL**: SQLite is file-based, requires no external infrastructure, and is perfect for this scale. PostgreSQL would require additional setup and is overkill.
- **SQLite vs MySQL**: Same reasoning as PostgreSQL—unnecessary infrastructure complexity.
- **SQLite vs MongoDB**: Relational data model (agents, bookings, therapies) fits SQL better than document storage.

**How to apply**: Use SQLite with better-sqlite3 driver for all database needs. Do not consider PostgreSQL, MySQL, or MongoDB.

### Architecture Patterns

**Monorepo structure**:
- `frontend/` - Vite + React application
- `server/` - Express + TypeScript API
- `shared/` - Shared types and utilities (if needed)
- Root level for Prisma configuration

**Separation of concerns**:
- Frontend and backend are separate processes
- Communication via HTTP/JSON API
- Database access only through backend (Prisma Client)

**How to apply**: Follow this structure. Do not mix frontend and backend code in the same directory.

### Constraints / Out of Scope

**Out of scope for Phase 1**:
- Authentication and authorization
- Email notifications
- Real-time features (WebSockets, SSE)
- Multi-tenancy or multi-clinic support
- Production deployment configuration
- Advanced error handling and logging
- Vitest testing infrastructure (deferred to Phase 2+)

**Constraints**:
- Must use TypeScript strict mode
- Must use pnpm as package manager
- Must use shadcn/ui for UI components (Phase 2+)
- Must use React Query for server state (Phase 2+)

**How to apply**: Do not implement any out-of-scope features in Phase 1. Focus only on the 5 roadmap items.

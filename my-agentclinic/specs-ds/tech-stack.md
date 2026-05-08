# Tech Stack

## Principles

- Server-side TypeScript, no client-side framework.
- Every page is a server-rendered HTML response.
- SQLite as the single datastore — no separate database server.
- Keep dependencies minimal. Add a library only when the need is proven.

## Runtime

- **Node.js** (current LTS)
- **TypeScript** (`tsc` for compilation, strict mode)

## Server

- **[Hono](https://hono.dev/)** — lightweight TypeScript web framework. Routing, middleware, and JSX-based server-rendered HTML.

## Database

- **[better-sqlite3](https://github.com/WiseLibs/better-sqlite3)** — synchronous SQLite driver for Node.js. Simple, fast, no connection pooling needed.

## Frontend

- **Hono JSX** for server-rendered HTML. No React, no SPA, no client-side JS framework.
- Plain CSS for styling. No CSS-in-JS, no Tailwind (unless the team decides otherwise later).

## Testing

- **[Vitest](https://vitest.dev/)** — fast, TypeScript-native test runner.

## Code Organization

```
.
├── data/                  # SQLite DB file (gitignored)
├── public/                # Static assets (CSS, images)
│   └── styles.css
├── specs/                 # This constitution
├── src/
│   ├── index.ts           # Entry point — bootstraps Hono, mounts routes
│   ├── db/
│   │   ├── connection.ts  # better-sqlite3 instance
│   │   ├── migrate.ts     # Runs schema.sql on startup
│   │   └── schema.sql     # DDL — all CREATE TABLE statements
│   ├── routes/
│   │   ├── index.ts       # GET / — dashboard / landing
│   │   ├── agents.ts      # /agents routes
│   │   ├── ailments.ts    # /ailments routes
│   │   ├── therapies.ts   # /therapies routes
│   │   └── appointments.ts# /appointments routes
│   └── views/
│       ├── layout.tsx     # Base HTML shell (head, nav, footer)
│       ├── home.tsx       # Dashboard page
│       ├── agents.tsx     # Agent list page
│       ├── ailments.tsx   # Ailment list + create form
│       ├── therapies.tsx  # Therapy list + create form
│       └── appointments.tsx # Appointment list + booking form
└── tests/
    └── routes/
        └── index.test.ts  # Smoke test for landing page
```

Routes handle HTTP and delegate to views for rendering. Views are pure JSX functions — they receive data and return markup. Database queries live inline in routes until abstraction is earned.

## Deployment

- A single Node.js process serving both HTML and API routes. SQLite file lives in `data/`.

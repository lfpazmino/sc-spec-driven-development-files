# Tech Stack

## Language

Server-side TypeScript throughout — shared types between layers, compile-time
safety, and the broad ecosystem Mary's team expects.

## Runtime & Framework

- **Node.js** — universal, well-understood
- **Express.js** — most popular Node framework; huge middleware ecosystem,
  simple mental model, ideal for the student and demo audience

## Database

- **SQLite** via `better-sqlite3` — zero-config, file-based, perfect for
  local dev and demo environments; no external database service needed

## Build & Dev Tools

- **TypeScript** (`tsc`) — already scaffolded
- **tsx** — for dev-mode execution without a separate compile step
- **Vitest** — fast, Vite-native test runner, TypeScript-first

## Code Organization

```
src/
  index.ts          # Express bootstrap
  db/               # Schema, migrations, seed data
  routes/           # Route handlers
  models/           # Data-access layer (queries)
  types/            # Shared TypeScript interfaces
```

## Principles

- Keep the stack small and boring — minimize "what's this?" moments for
  newcomers
- No ORM — plain SQL with `better-sqlite3` keeps the learning curve flat
  and the queries transparent
- One process, one file database — demo-ready with `npm start`

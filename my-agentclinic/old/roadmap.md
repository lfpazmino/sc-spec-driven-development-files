# Roadmap

Nano phases — each one is 1–3 features, done in a day or less, and ends
with something that runs.

---

## Nano 1.1 — Express + TypeScript bootstrap

Get the server listening on a port. Nothing behind it yet — just prove
the toolchain works.

- Express app bootstrapped with TypeScript
- Project scripts: `dev` (tsx watch), `build`, `start`
- `GET /` returns a JSON health check `{ ok: true }`

## Nano 1.2 — SQLite + agents table

Wire the database. One table, no endpoints yet — just prove the
migrations run on startup.

- SQLite file created on startup via `better-sqlite3`
- `agents` table migrated on boot
- Shared `Agent` type in `src/types/`

## Nano 1.3 — Agents CRUD + seed data

Complete the Agents vertical slice: data-access layer, endpoints, and
sample data to see it in action.

- `GET /agents`, `POST /agents`, `GET /agents/:id`
- Seed script with a handful of sample agents
- Manual smoke test: curl the endpoints, see JSON

---

## Nano 2.1 — Ailments entity

First companion entity, mirroring the Agents pattern.

- `ailments` table + migration
- `Ailment` type
- `GET /ailments`, `POST /ailments`, `GET /ailments/:id`
- Seed data (on-theme: "Prompt Fatigue Syndrome",
  "Context Window Overflow", etc.)

## Nano 2.2 — Therapies entity

Second companion entity — by now the pattern is mechanical.

- `therapies` table + migration
- `Therapy` type
- `GET /therapies`, `POST /therapies`, `GET /therapies/:id`
- Seed data ("Token Tapering", "Prompt Hygiene Protocol", etc.)

---

## Nano 3.1 — Bookings table + schedule endpoint

Wire the three entities together. Start with the write side: creating an
appointment.

- `bookings` table with foreign keys to agents, ailments, therapies
- `Booking` type
- `POST /agents/:id/bookings` — schedule an appointment

## Nano 3.2 — Bookings read endpoints + clinic-wide list

Complete the Bookings slice with the read side.

- `GET /agents/:id/bookings` — list an agent's appointments
- `GET /bookings` — clinic-wide appointment list
- Seed a few sample bookings so the list endpoints return data

---

## Nano 4.1 — Static serving + agent roster page

Get HTML in front of the API. Start with just the agents list — the
simplest useful view.

- Express serves static assets from `public/`
- Minimal HTML + CSS page displaying the agent roster
- Fetches `/agents` on load, renders a card per agent

## Nano 4.2 — Appointments view on dashboard

Add the bookings lens to the page — now the dashboard shows upcoming
appointments alongside the agent roster.

- Appointments section fetching `/bookings`
- Each appointment shows agent name, ailment, therapy, and time
- Page feels demo-ready: clean layout, no framework yet

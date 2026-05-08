# Roadmap

Nano phases: each is 1–3 features, completable in a day or less, and ends with a runnable application.

---

## Phase 1 — Hello, Clinic

- [ ] Hono server with a single `GET /` route returning HTML.
- [ ] `npm run dev` (tsx watch) and `npm run build` (tsc) scripts.
- [ ] Plain CSS stylesheet served from `/public`.

**Delivers**: a styled landing page in the browser.

## Phase 2 — Database & Agents

- [ ] SQLite database initialized on startup (schema in a migration file).
- [ ] Agents table: `id`, `name`, `role`, `status`, `created_at`.
- [ ] `GET /agents` — server-rendered page listing all agents.

**Delivers**: a working agent registry page with real data.

## Phase 3 — Ailments

- [ ] Ailments table: `id`, `title`, `description`, `severity`, `created_at`.
- [ ] `GET /ailments` — list page.
- [ ] `POST /ailments` — form to create a new ailment.

**Delivers**: full CRUD (create + read) for ailments.

## Phase 4 — Therapies

- [ ] Therapies table: `id`, `name`, `description`, `duration_minutes`, `created_at`.
- [ ] `GET /therapies` — list page.
- [ ] `POST /therapies` — form to create a new therapy.

**Delivers**: full catalog of therapies, matching the ailment pattern.

## Phase 5 — Appointments

- [ ] Appointments table: `id`, `agent_id`, `therapy_id`, `scheduled_at`, `notes`, `created_at`.
- [ ] `GET /appointments` — list with agent and therapy names.
- [ ] `POST /appointments` — booking form (select agent, therapy, date/time).

**Delivers**: staff can book an agent into a therapy session.

## Phase 6 — Dashboard & Polish

- [ ] `GET /` becomes a dashboard with summary counts (agents, ailments, therapies, upcoming appointments).
- [ ] Navigation bar across all pages.
- [ ] Final styling pass — layout, spacing, colors consistent across pages.

**Delivers**: a cohesive, navigable admin panel.

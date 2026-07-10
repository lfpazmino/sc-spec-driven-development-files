---
name: run-agentclinic
description: Launch and drive the AgentClinic web app (React frontend + Express server). Use when asked to run, start, screenshot, or smoke-test the app.
---

AgentClinic is a healthcare platform for AI agents — a React SPA on `:5173` backed by an Express API on `:3000` with a SQLite database.

The driver is a Playwright smoke-test script at `.claude/skills/run-agentclinic/driver.mjs`. It launches headless Chromium, loads the app, verifies all glassmorphic UI components are present, exercises a button click, and saves screenshots to `screenshots/`.

All paths below are relative to the repo root.

## Prerequisites

```bash
sudo apt-get install -y libnss3 libnspr4 libdbus-1-3 libatk1.0-0 \
  libatk-bridge2.0-0 libcups2 libdrm2 libxkbcommon0 libxcomposite1 \
  libxdamage1 libxfixes3 libxrandr2 libgbm1 libpango-1.0-0 \
  libcairo2 libasound2t64
```

## Setup

```bash
pnpm install
pnpm prisma generate
pnpm prisma db seed
```

The `shared` package is a compile-to-JS dependency of `server` — the dev server (`tsx watch`) transpiles on the fly, so no separate build step is needed for development.

## Run (agent path)

Launch both dev servers in the background, then run the driver:

```bash
pnpm dev &
sleep 4

# Wait for both servers to be ready
until curl -s http://localhost:3000/health > /dev/null 2>&1; do sleep 0.5; done
until curl -s -o /dev/null -w '' http://localhost:5173/ > /dev/null 2>&1; do sleep 0.5; done

node .claude/skills/run-agentclinic/driver.mjs
```

Screenshots land in `.claude/skills/run-agentclinic/screenshots/`:
- `01-homepage.png` — full page on load
- `02-after-click.png` — after clicking "Get Started"
- `ERROR-state.png` — captured on failure

The driver verifies:
- Server `/health` returns 200 with `{"status":"oki!"}`
- Page title is "AgentClinic"
- Hero section renders with "Welcome to AgentClinic"
- 3 glass cards, 2 CTA buttons, header, and footer are present
- Navigation links: Home, Agents, Therapies, Bookings

To stop:

```bash
kill $(lsof -t -i:5173) $(lsof -t -i:3000)
```

## Run (human path)

```bash
pnpm dev
```

Opens Vite at `http://localhost:5173` and the API at `http://localhost:3000`. Ctrl-C stops both.

## Test

```bash
pnpm test
```

Runs vitest across all three packages — frontend (jsdom + React Testing Library), server (supertest), shared (pure vitest).

## Gotchas

- **`playwright-core` is not enough for browser downloads.** The project ships `playwright-core` in devDependencies (no browsers). For the smoke test, `playwright` must be installed separately: `pnpm add -D -w playwright && npx playwright install chromium`.
- **Background image from Unsplash may not load.** The glassmorphic UI uses `url('https://images.unsplash.com/...')` as a background. In restricted-network environments this won't fetch — the transparent glass effects still render, just over a flat dark background.
- **Port conflicts.** The driver assumes `:5173` and `:3000` are free. If something is already listening, kill it first: `kill $(lsof -t -i:5173) $(lsof -t -i:3000)`.

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| `Error: browserType.launch: Target page, context or browser has been closed` | Missing system libs. Run the `apt-get install` line in Prerequisites. |
| `Cannot find module '@prisma/client'` | Run `pnpm prisma generate` (the postinstall hook should do this, but occasionally fails on fresh clones). |
| `pnpm dev` exits immediately | Port already in use. Kill stale processes first (see Gotchas). |

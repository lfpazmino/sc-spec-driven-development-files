# Phase 1: Foundation - Validation

## Validation Criteria

Phase 1 is considered complete when the following criteria are met:

### 1. Dev Servers Start Successfully

**Frontend (Vite)**:
- [ ] `pnpm --filter frontend dev` starts without errors
- [ ] Browser can access `http://localhost:5173`
- [ ] Default Vite React page renders

**Backend (Express)**:
- [ ] `pnpm --filter server dev` starts without errors
- [ ] Server listens on configured port (default 3000)
- [ ] Health check endpoint `GET /health` returns 200 OK

### 2. Database Migrations Work

**Prisma Setup**:
- [ ] `prisma/schema.prisma` file exists and is valid
- [ ] `pnpm prisma migrate dev` runs successfully
- [ ] SQLite database file is created at configured path
- [ ] All 4 tables exist: `Agent`, `Ailment`, `Therapy`, `Booking`
- [ ] Table schema matches model definitions (columns, types, relationships)

**Prisma Client**:
- [ ] `pnpm prisma generate` runs successfully
- [ ] Generated Prisma Client can be imported in TypeScript code
- [ ] TypeScript types are correctly inferred from schema

---

## Acceptance Criteria

**All validation criteria must pass** before Phase 1 work can be merged.

This means:
- Both frontend and backend dev servers must start successfully
- Database migrations must complete without errors
- All tables must be created with correct schema
- Prisma Client must be generated and usable

---

## Verification Steps

To verify Phase 1 is complete:

1. **Start servers**:
   ```bash
   # Terminal 1
   pnpm --filter frontend dev

   # Terminal 2
   pnpm --filter server dev
   ```

2. **Check frontend**:
   - Open `http://localhost:5173` in browser
   - Verify Vite default page loads

3. **Check backend**:
   - Run `curl http://localhost:3000/health`
   - Verify response is `200 OK`

4. **Check database**:
   ```bash
   pnpm prisma studio
   ```
   - Open Prisma Studio
   - Verify all 4 tables exist
   - Verify seed data is present (if seeded)

5. **Check TypeScript**:
   ```bash
   pnpm --filter frontend type-check
   pnpm --filter server type-check
   ```
   - Verify no TypeScript errors

---

## Automated Testing (Future Phases)

Vitest is the designated test runner for unit tests and validation. Once test suites are implemented, run:

```bash
pnpm test
```

This delegates to each workspace package's `test` script via `pnpm -r test`.

## Success Indicators

- ✅ New developer can clone repo and run `pnpm install` followed by dev servers
- ✅ Database schema is type-safe and matches Prisma models
- ✅ Project structure is clear and follows established patterns
- ✅ No TODO comments or placeholder code remain
- ✅ Git history shows clean, atomic commits per task group

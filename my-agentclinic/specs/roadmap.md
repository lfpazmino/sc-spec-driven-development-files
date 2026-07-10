# AgentClinic Roadmap

## Nano Phases Approach

Each phase is designed to be completed in a day or less, with 1-3 features per phase. This enables rapid iteration and early feedback.

---

## Phase 1: Foundation (Day 1) ✅ COMPLETE

**Goal**: Project scaffolding and core data models

- [x] Initialize project with Vite + React + TypeScript
- [x] Set up Express server with TypeScript
- [x] Configure Prisma with SQLite
- [x] Define core schema: Agent, Ailment, Therapy, Booking
- [x] Seed initial mock data

**Deliverable**: Running dev server with database schema and seed data

---

## Phase 2: Browse & Discover (Day 1)

**Goal**: Dashboard shell, agent listing, agent detail, and treatment catalog

- [ ] Create main dashboard layout with sidebar and navigation
- [ ] Set up shadcn/ui component library
- [ ] Create home page with clinic overview
- [ ] Build Agent card component and list page
- [ ] Implement API endpoint: GET /agents with search/filter
- [ ] Create Agent detail page with info, ailments, and therapy history
- [ ] Implement API endpoint: GET /agents/:id
- [ ] Add "Book Appointment" button
- [ ] Create Ailments and Therapies listing pages
- [ ] Implement API endpoints: GET /ailments, GET /therapies
- [ ] Link therapies to ailments they treat

**Deliverable**: Navigable dashboard with full browse and discover experience

---

## Phase 3: Booking Form (Day 1)

**Goal**: Create appointment booking UI

- [ ] Build booking form component
- [ ] Implement date/time picker
- [ ] Add agent and therapy selection
- [ ] Form validation

**Deliverable**: Functional booking form UI

---

## Phase 4: Booking API (Day 1)

**Goal**: Persist bookings to database

- [ ] Implement API endpoint: POST /bookings
- [ ] Add booking validation logic
- [ ] Prevent double-booking
- [ ] Return booking confirmation

**Deliverable**: Working booking creation endpoint

---

## Phase 5: My Bookings (Day 1)

**Goal**: View and manage bookings

- [ ] Create "My Bookings" page
- [ ] Implement API endpoint: GET /bookings
- [ ] Display upcoming and past bookings
- [ ] Add cancel booking functionality

**Deliverable**: Bookings management page

---

## Phase 6: Staff Dashboard (Day 1)

**Goal**: Staff view for clinic operations

- [ ] Create staff-specific dashboard
- [ ] Show daily schedule overview
- [ ] Display all bookings with status
- [ ] Add booking status update (confirmed/completed/cancelled)

**Deliverable**: Staff operations dashboard

---

## Phase 7: Polish & Testing (Day 1)

**Goal**: Refine and validate

- [ ] Add loading states and error handling
- [ ] Write critical unit tests
- [ ] Add E2E test for booking flow
- [ ] Responsive design fixes
- [ ] Accessibility audit

**Deliverable**: Production-ready application

---

## Future Considerations

- Authentication and authorization
- Email notifications
- Agent self-service portal
- Analytics and reporting
- Multi-clinic support

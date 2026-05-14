# AgentClinic Roadmap

## Nano Phases Approach

Each phase is designed to be completed in a day or less, with 1-3 features per phase. This enables rapid iteration and early feedback.

---

## Phase 1: Foundation (Day 1)

**Goal**: Project scaffolding and core data models

- [x] Initialize project with Vite + React + TypeScript
- [x] Set up Express server with TypeScript
- [x] Configure Prisma with SQLite
- [x] Define core schema: Agent, Ailment, Therapy, Booking
- [x] Seed initial mock data

**Deliverable**: Running dev server with database schema and seed data

---

## Phase 2: Dashboard Shell (Day 1)

**Goal**: Basic layout and navigation

- [ ] Create main dashboard layout with sidebar
- [ ] Implement navigation between sections
- [ ] Set up shadcn/ui component library
- [ ] Create home page with clinic overview

**Deliverable**: Navigable dashboard shell with home page

---

## Phase 3: Agent Listing (Day 1)

**Goal**: Display and browse agents

- [ ] Build Agent card component
- [ ] Create Agent list page
- [ ] Implement API endpoint: GET /agents
- [ ] Add search/filter functionality

**Deliverable**: Browseable list of agents with search

---

## Phase 4: Agent Detail (Day 1)

**Goal**: View individual agent profiles

- [ ] Create Agent detail page
- [ ] Display agent info, ailments, and therapy history
- [ ] Implement API endpoint: GET /agents/:id
- [ ] Add "Book Appointment" button

**Deliverable**: Detailed agent profile view

---

## Phase 5: Ailments & Therapies (Day 1)

**Goal**: Display available treatments

- [ ] Create Ailments listing page
- [ ] Create Therapies listing page
- [ ] Implement API endpoints: GET /ailments, GET /therapies
- [ ] Link therapies to ailments they treat

**Deliverable**: Browseable ailments and therapies

---

## Phase 6: Booking Form (Day 1)

**Goal**: Create appointment booking UI

- [ ] Build booking form component
- [ ] Implement date/time picker
- [ ] Add agent and therapy selection
- [ ] Form validation

**Deliverable**: Functional booking form UI

---

## Phase 7: Booking API (Day 1)

**Goal**: Persist bookings to database

- [ ] Implement API endpoint: POST /bookings
- [ ] Add booking validation logic
- [ ] Prevent double-booking
- [ ] Return booking confirmation

**Deliverable**: Working booking creation endpoint

---

## Phase 8: My Bookings (Day 1)

**Goal**: View and manage bookings

- [ ] Create "My Bookings" page
- [ ] Implement API endpoint: GET /bookings
- [ ] Display upcoming and past bookings
- [ ] Add cancel booking functionality

**Deliverable**: Bookings management page

---

## Phase 9: Staff Dashboard (Day 1)

**Goal**: Staff view for clinic operations

- [ ] Create staff-specific dashboard
- [ ] Show daily schedule overview
- [ ] Display all bookings with status
- [ ] Add booking status update (confirmed/completed/cancelled)

**Deliverable**: Staff operations dashboard

---

## Phase 10: Polish & Testing (Day 1)

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

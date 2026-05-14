# AgentClinic Tech Stack

## Core Framework

- **Language**: TypeScript (strict mode)
- **Runtime**: Node.js (LTS)
- **Framework**: Express.js for server-side API
- **Database**: SQLite with better-sqlite3 driver
- **ORM**: Prisma for type-safe database access

## Frontend

- **Framework**: React 18+ with Vite
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui for consistent, accessible UI
- **State Management**: React Query (TanStack Query) for server state
- **Routing**: React Router v6+

## Development Tools

- **Package Manager**: pnpm
- **Linting**: ESLint with TypeScript rules
- **Formatting**: Prettier
- **Testing**: Vitest for unit tests and validation, Playwright for E2E
- **Type Checking**: tsc (TypeScript compiler)

## Why This Stack

- **TypeScript End-to-End**: Meets Mary's requirement for a TypeScript-based stack
- **SQLite**: Lightweight, file-based database perfect for this scale—no external infrastructure needed
- **Express + React**: Proven, popular combination with strong community support
- **shadcn/ui**: Modern, accessible components that look great out of the box
- **Prisma**: Excellent TypeScript integration with SQLite support

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                      Browser                              │
│  ┌───────────────────────────────────────────────────┐  │
│  │              React + Vite Frontend                 │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐ │  │
│  │  │  Dashboard  │  │  Agents     │  │  Booking    │ │  │
│  │  └─────────────┘  └─────────────┘  └─────────────┘ │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                            │ HTTP/JSON
                            ▼
┌─────────────────────────────────────────────────────────┐
│                    Express Server                         │
│  ┌───────────────────────────────────────────────────┐  │
│  │              API Routes                             │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐ │  │
│  │  │  /agents    │  │  /ailments  │  │  /bookings   │ │  │
│  │  └─────────────┘  └─────────────┘  └─────────────┘ │  │
│  └───────────────────────────────────────────────────┘  │
│                            │                               │
│  ┌───────────────────────────────────────────────────┐  │
│  │              Prisma Client                         │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                    SQLite Database                        │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐    │
│  │  agents     │  │  ailments   │  │  bookings    │    │
│  └─────────────┘  └─────────────┘  └─────────────┘    │
└─────────────────────────────────────────────────────────┘
```

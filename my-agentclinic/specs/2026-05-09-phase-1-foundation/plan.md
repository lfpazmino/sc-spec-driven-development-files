# Phase 1: Foundation - Plan

## Overview

This plan breaks down Phase 1 Foundation into 5 sequential task groups, each corresponding to a roadmap item.

---

## Task Group 1: Initialize Project with Vite + React + TypeScript

1. Create project root structure
2. Initialize Vite with React + TypeScript template
3. Configure Vite for development and production builds
4. Set up project directory structure (frontend/, server/, shared/)
5. Configure TypeScript strict mode
6. Set up ESLint and Prettier
7. Verify Vite dev server starts successfully

---

## Task Group 2: Set Up Express Server with TypeScript

1. Initialize server directory with package.json
2. Install Express and TypeScript dependencies
3. Configure tsconfig.json for server
4. Create basic Express server entry point
5. Set up nodemon for development
6. Add health check endpoint (GET /health)
7. Configure CORS for frontend communication
8. Verify Express server starts successfully

---

## Task Group 3: Configure Prisma with SQLite

1. Install Prisma CLI and client
2. Initialize Prisma in project
3. Configure Prisma to use SQLite with better-sqlite3
4. Set up Prisma environment variables
5. Verify Prisma CLI commands work
6. Configure Prisma Client generation

---

## Task Group 4: Define Core Schema

1. Define Agent model with fields: id, name, specialty, description, availability
2. Define Ailment model with fields: id, name, description, severity
3. Define Therapy model with fields: id, name, description, duration, cost
4. Define Booking model with fields: id, agentId, therapyId, scheduledAt, status
5. Add relationships between models (Agent ↔ Booking, Therapy ↔ Booking)
6. Run Prisma migration to create database
7. Generate Prisma Client
8. Verify database schema matches models

---

## Task Group 5: Seed Initial Mock Data

1. Create seed script file
2. Add 5-10 sample Agent records
3. Add 5-10 sample Ailment records
4. Add 5-10 sample Therapy records
5. Add sample Booking records linking agents and therapies
6. Configure Prisma seed command in package.json
7. Run seed script
8. Verify seed data populates database correctly

---

## Dependencies

- Task Group 1 must complete before Task Group 2 (project structure needed)
- Task Group 2 must complete before Task Group 3 (server setup needed for Prisma integration)
- Task Group 3 must complete before Task Group 4 (Prisma must be configured)
- Task Group 4 must complete before Task Group 5 (schema must exist before seeding)

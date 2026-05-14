-- CreateTable
CREATE TABLE "Agent" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "specialty" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "availability" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "Ailment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "severity" TEXT NOT NULL DEFAULT 'medium'
);

-- CreateTable
CREATE TABLE "Therapy" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "cost" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "agentId" INTEGER NOT NULL,
    "therapyId" INTEGER NOT NULL,
    "scheduledAt" DATETIME NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    CONSTRAINT "Booking_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Booking_therapyId_fkey" FOREIGN KEY ("therapyId") REFERENCES "Therapy" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

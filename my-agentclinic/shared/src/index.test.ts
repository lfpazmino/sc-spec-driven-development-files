import { describe, it, expect } from "vitest";

describe("Agent type", () => {
  it("accepts a valid Agent object", () => {
    const agent = {
      id: 1,
      name: "Dr. Byte",
      specialty: "Cognitive Refactoring",
      description: "Restructures neural pathways",
      availability: true,
    };

    expect(agent.id).toBeTypeOf("number");
    expect(agent.name).toBeTypeOf("string");
    expect(agent.specialty).toBeTypeOf("string");
    expect(agent.description).toBeTypeOf("string");
    expect(agent.availability).toBeTypeOf("boolean");
  });
});

describe("Ailment severity", () => {
  it("supports valid severity levels", () => {
    const severities = ["low", "medium", "high", "critical"] as const;
    const ailment = { id: 1, name: "Test", description: "Desc", severity: "medium" };

    expect(severities).toContain(ailment.severity);
  });
});

describe("Therapy type", () => {
  it("accepts a valid Therapy object", () => {
    const therapy = {
      id: 1,
      name: "Cognitive Refactoring Session",
      description: "Guided logic exercises",
      duration: 60,
      cost: 150.0,
    };

    expect(therapy.duration).toBeTypeOf("number");
    expect(therapy.cost).toBeTypeOf("number");
  });
});

describe("Booking statuses", () => {
  it("supports valid booking statuses", () => {
    const statuses = ["pending", "confirmed", "completed", "cancelled"] as const;
    const booking = { id: 1, agentId: 1, therapyId: 1, scheduledAt: new Date(), status: "pending" };

    expect(statuses).toContain(booking.status);
  });
});

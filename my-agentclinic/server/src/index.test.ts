import { describe, it, expect } from "vitest";
import request from "supertest";
import { app } from "./index";

describe("GET /health", () => {
  it("returns 200 with status oki! and ISO timestamp", async () => {
    const res = await request(app).get("/health");

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("status", "oki!");
    expect(res.body).toHaveProperty("timestamp");
    expect(() => new Date(res.body.timestamp)).not.toThrow();
    expect(new Date(res.body.timestamp).toISOString()).toBe(res.body.timestamp);
  });

  it("responds with JSON content-type", async () => {
    const res = await request(app).get("/health");
    expect(res.headers["content-type"]).toMatch(/application\/json/);
  });
});

describe("unknown routes", () => {
  it("returns 404 for unmapped paths", async () => {
    const res = await request(app).get("/nonexistent");
    expect(res.status).toBe(404);
  });
});

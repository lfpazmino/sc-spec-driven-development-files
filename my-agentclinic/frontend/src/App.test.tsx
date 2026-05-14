import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the welcome heading", () => {
    render(<App />);
    expect(screen.getByText("Welcome to AgentClinic")).toBeDefined();
  });

  it("renders the CTA buttons", () => {
    render(<App />);
    expect(screen.getByText("Get Started")).toBeDefined();
    expect(screen.getByText("Learn More")).toBeDefined();
  });

  it("renders all feature cards", () => {
    render(<App />);
    expect(screen.getByText("AI Agents")).toBeDefined();
    expect(screen.getByText("Book Sessions")).toBeDefined();
    expect(screen.getByText("Track Progress")).toBeDefined();
  });
});

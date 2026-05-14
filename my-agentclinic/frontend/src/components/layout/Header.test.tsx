import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header", () => {
  it("renders the clinic name", () => {
    render(<Header />);
    expect(screen.getByText("AgentClinic")).toBeDefined();
  });

  it("renders all navigation links", () => {
    render(<Header />);
    const links = ["Home", "Agents", "Therapies", "Bookings"];
    for (const label of links) {
      expect(screen.getByText(label)).toBeDefined();
    }
  });

  it("navigation links have correct hrefs", () => {
    render(<Header />);
    expect(screen.getByText("Home").getAttribute("href")).toBe("/");
    expect(screen.getByText("Agents").getAttribute("href")).toBe("/agents");
    expect(screen.getByText("Therapies").getAttribute("href")).toBe("/therapies");
    expect(screen.getByText("Bookings").getAttribute("href")).toBe("/bookings");
  });
});

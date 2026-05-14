import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders copyright with year", () => {
    render(<Footer />);
    expect(screen.getByText(/2026 AgentClinic/)).toBeDefined();
  });

  it("renders footer links", () => {
    render(<Footer />);
    expect(screen.getByText("Privacy")).toBeDefined();
    expect(screen.getByText("Terms")).toBeDefined();
    expect(screen.getByText("Contact")).toBeDefined();
  });

  it("footer links have correct hrefs", () => {
    render(<Footer />);
    expect(screen.getByText("Privacy").getAttribute("href")).toBe("/privacy");
    expect(screen.getByText("Terms").getAttribute("href")).toBe("/terms");
    expect(screen.getByText("Contact").getAttribute("href")).toBe("/contact");
  });
});

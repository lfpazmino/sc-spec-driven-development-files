import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MainLayout } from "./MainLayout";

describe("MainLayout", () => {
  it("renders Header, Main, and Footer", () => {
    render(<MainLayout>Hello World</MainLayout>);

    expect(screen.getByText("AgentClinic")).toBeDefined();
    expect(screen.getByText("Hello World")).toBeDefined();
    expect(screen.getByText(/2026 AgentClinic/)).toBeDefined();
  });
});

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Main } from "./Main";

describe("Main", () => {
  it("renders children", () => {
    render(<Main><p>Test content</p></Main>);
    expect(screen.getByText("Test content")).toBeDefined();
  });

  it("renders empty without children", () => {
    const { container } = render(<Main><span /></Main>);
    const main = container.querySelector("main");
    expect(main).toBeDefined();
  });
});

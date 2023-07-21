import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";

import { Toolbar } from "../src";

describe("Toolbar", () => {
  it("renders Toolbar", () => {
    const { container } = render(<Toolbar />);

    // screen.debug(container);

    const tooltipEl = container.querySelector(".elf--toolbar");

    expect(tooltipEl.classList.contains(".elf--toolbar")).toBe(true);
  });
});

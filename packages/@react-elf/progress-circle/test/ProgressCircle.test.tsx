import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";

import { ProgressCircle } from "../src";

describe("ProgressCircle", () => {
  it("renders ProgressCircle", () => {
    const { container } = render(<ProgressCircle variant="primary" />);

    // screen.debug(container);

    const tooltipEl = container.querySelector(".elf--tooltip");

    expect(tooltipEl.classList.contains("primary")).toBe(true);
  });
});

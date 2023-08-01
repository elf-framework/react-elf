import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";

import { Radio } from "../src";

describe("Radio", () => {
  it("renders Radio", () => {
    const { container } = render(<Radio variant="primary" checked />);

    // screen.debug(container);

    const tooltipEl = container.querySelector(".elf--radio");

    expect(tooltipEl.classList.contains("primary")).toBe(true);
  });
});

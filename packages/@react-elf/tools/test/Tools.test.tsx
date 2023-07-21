import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";

import { Tools } from "../src";

describe("Tooltip", () => {
  it("renders Tooltip", () => {
    const { container } = render(<Tools />);

    // screen.debug(container);

    const tooltipEl = container.querySelector(".elf--tools");

    expect(tooltipEl.classList.contains(".elf--tools")).toBe(true);
  });
});

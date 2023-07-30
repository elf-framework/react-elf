import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";

import { Checkbox } from "../src";

describe("Checkbox", () => {
  it("renders Checkbox", () => {
    const { container } = render(<Checkbox variant="primary" checked />);

    // screen.debug(container);

    const tooltipEl = container.querySelector(".elf--checkbox");

    expect(tooltipEl.classList.contains("primary")).toBe(true);
  });
});

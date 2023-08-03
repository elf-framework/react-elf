import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";

import { Switch } from "../src";

describe("Switch", () => {
  it("renders Switch", () => {
    const { container } = render(<Switch variant="primary" />);

    // screen.debug(container);

    const tooltipEl = container.querySelector(".elf--switch");

    expect(tooltipEl.classList.contains("primary")).toBe(true);
  });
});

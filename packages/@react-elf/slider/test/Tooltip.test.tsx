import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";

import { Tooltip } from "../src";

describe("Tooltip", () => {
  it("renders Tooltip", () => {
    const {container } = render(<Tooltip variant="primary">body</Tooltip>);

    // screen.debug(container);

    const tooltipEl = container.querySelector('.elf--tooltip')

    expect(tooltipEl.classList.contains("primary")).toBe(true);
  });
});

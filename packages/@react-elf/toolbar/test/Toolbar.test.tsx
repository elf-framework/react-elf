import React from "react";
import { render } from "@testing-library/react";

import { describe, expect, it } from "vitest";

import { Toolbar } from "../src/";

describe("Toolbar", () => {
  it("renders Toolbar", () => {
    const { container } = render(<Toolbar items={[]} />);

    // screen.debug(container);

    const tooltipEl = container.querySelector(".elf--toolbar");

    expect(tooltipEl.classList.contains(".elf--toolbar")).toBe(true);
  });
});

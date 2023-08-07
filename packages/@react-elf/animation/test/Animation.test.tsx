import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";

import { SpinAnimation } from "../src/Animation";

describe("Animation", () => {
  it("renders Animation", () => {
    const { container } = render(<SpinAnimation>body</SpinAnimation>);

    // screen.debug(container);

    const tooltipEl = container.querySelector(".elf--animation");

    expect(tooltipEl.classList.contains("primary")).toBe(true);
  });
});

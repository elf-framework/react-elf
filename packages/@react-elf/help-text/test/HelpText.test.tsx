import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";

import { HelpText } from "../src";

describe("HelpText", () => {
  it("renders HelpText", () => {
    const { container } = render(<HelpText variant="primary" />);

    // screen.debug(container);

    const tooltipEl = container.querySelector(".elf--help-text");

    expect(tooltipEl.classList.contains("primary")).toBe(true);
  });
});

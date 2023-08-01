import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";

import { ColorMixer } from "../src";

describe("ColorMixer", () => {
  it("renders ColorMixer", () => {
    const { container } = render(<ColorMixer variant="primary" />);

    // screen.debug(container);

    const colorMixerEl = container.querySelector(".elf--color-mixer");

    expect(colorMixerEl.classList.contains("primary")).toBe(true);
  });
});

import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";

import { Toast } from "../src";

describe("Toast", () => {
  it("renders Toast", () => {
    const {container } = render(<Toast variant="primary" />);

    const toastEl = container.querySelector('.elf--toast')

    expect(toastEl.classList.contains("primary")).toBe(true);
  });
});

import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";

import { Button } from "../src";

describe("Button", () => {
  it("renders Button", () => {
    render(<Button variant="primary" />);

    screen.debug();

    expect(screen.getByRole("button")).toHaveAttribute(
      "data-variant",
      "primary"
    );
    // check if App components renders headline
  });
});

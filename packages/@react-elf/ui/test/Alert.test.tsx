import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";

import { Alert } from "../src";

describe("Alert", () => {
  it("renders Alert", () => {
    render(<Alert variant="primary" />);

    screen.debug();

    expect(screen.getByRole("button")).toHaveAttribute(
      "data-variant",
      "primary"
    );
    // check if App components renders headline
  });
});

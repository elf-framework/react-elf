import React from "react";
import { Alert, Grid, VBox } from "@react-elf/ui";

export function DismissableView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "20px 40px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 30,
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Alert variant="dark" dismissable closable>
          Your trial has expired. Please purchase to continue.
        </Alert>
      </div>
    </VBox>
  );
}

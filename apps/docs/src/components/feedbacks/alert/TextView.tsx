import React from "react";
import { Alert, VBox } from "@react-elf/ui";

export function TextView() {
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
        <Alert variant="dark" closable>
          Your trial has expired. Please purchase to continue.
        </Alert>
      </div>
    </VBox>
  );
}

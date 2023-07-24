import React from "react";
import { Alert, RoundButton, VBox } from "@react-elf/ui";

export function TextOverflowView() {
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
          <div style={{ textAlign: "right", marginTop: 10 }}>
            <RoundButton
              outline
              variant="primary"
              thin
              style={{ textColor: "white", borderColor: "white" }}
            >
              Update
            </RoundButton>
          </div>
        </Alert>
      </div>
    </VBox>
  );
}

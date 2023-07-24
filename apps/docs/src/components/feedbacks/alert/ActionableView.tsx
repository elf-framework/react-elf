import React from "react";
import { Alert, Grid, VBox, RoundButton } from "@react-elf/ui";

export function ActionableView() {
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
        <Alert
          variant="dark"
          closable
          actions={
            <RoundButton outline place="toast">
              open
            </RoundButton>
          }
        >
          Your trial has expired. Please purchase to continue.
        </Alert>

        <Alert
          variant="dark"
          closable
          actions={
            <RoundButton outline place="toast">
              open
            </RoundButton>
          }
          title="Title"
        >
          Your trial has expired. Please purchase to continue.
        </Alert>
      </div>
    </VBox>
  );
}

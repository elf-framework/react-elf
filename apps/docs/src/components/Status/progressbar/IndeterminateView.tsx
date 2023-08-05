import React from "react";
import { Grid, ProgressBar, VBox } from "@react-elf/ui";

export function IndeterminateView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "30px 20px",
        fontSize: 13,
        height: 200,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ProgressBar
          indeterminate
          title="Loading data..."
          style={{ width: 400 }}
        />
      </div>
    </VBox>
  );
}

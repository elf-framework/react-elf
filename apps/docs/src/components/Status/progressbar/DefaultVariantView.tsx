import React from "react";
import { ProgressBar, VBox } from "@react-elf/ui";

export function DefaultVariantView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
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
          padding: "20px 40px",
          justifyContent: "center",
          alignItems: "center",
          height: 200,
        }}
      >
        <div>
          <ProgressBar title="Loading data..." value={20} variant="primary" />
        </div>
      </div>
    </VBox>
  );
}

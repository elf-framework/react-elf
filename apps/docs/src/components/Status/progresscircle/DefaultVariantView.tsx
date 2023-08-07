import React from "react";
import { ProgressCircle, VBox } from "@react-elf/ui";

export function DefaultVariantView() {
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
          padding: "20px 40px",
          justifyContent: "center",
          alignItems: "center",
          height: 200,
        }}
      >
        <div style={{ display: "flex", gap: 100 }}>
          <ProgressCircle
            size="large"
            variant="primary"
            animated
            style={{ duration: "3s" }}
          />

          <ProgressCircle
            size="large"
            variant="primary"
            indeterminate
            style={{ duration: "3s" }}
          />
        </div>
      </div>
    </VBox>
  );
}

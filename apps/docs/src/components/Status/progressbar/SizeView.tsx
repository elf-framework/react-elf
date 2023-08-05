import React from "react";
import { ProgressBar, VBox } from "@react-elf/ui";

export function SizeView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        fontSize: 13,
        height: 500,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 30,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: 500,
        }}
      >
        {["small", "medium", "large", "extra-large"].map((size) => (
          <div style={{ display: "flex", width: "100%" }} key={size}>
            <div style={{ flex: "none", width: 100 }}>
              <em>{size}</em>
            </div>
            <ProgressBar
              title={"Loading..."}
              size={size as any}
              value={50}
              style={{
                width: 300,
              }}
            />
          </div>
        ))}
      </div>
    </VBox>
  );
}

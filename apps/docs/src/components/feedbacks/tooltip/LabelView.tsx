import React from "react";
import { Tooltip, VBox } from "@react-elf/ui";

export function LabelView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [50, 40],
        height: 150,
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Tooltip placement="top" message={"label"} show></Tooltip>
      </div>
    </VBox>
  );
}

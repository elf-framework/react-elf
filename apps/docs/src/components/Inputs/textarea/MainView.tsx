import React from "react";
import { TextArea, VBox } from "@react-elf/ui";

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [60, 200],
        position: "relative",
        fontSize: 13,
        justifyContent: "center",
        alignItems: "center",
        height: 300,
      }}
    >
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 30,
          width: 240,
        }}
      >
        <TextArea
          label={"Description"}
          value={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
          rows={7}
        />
      </div>
    </VBox>
  );
}

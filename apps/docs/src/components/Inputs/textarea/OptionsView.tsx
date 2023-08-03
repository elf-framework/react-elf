import React from "react";
import { TextArea, VBox } from "@react-elf/ui";

export function OptionsView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "30px 20px",
        fontSize: 13,
        justifyContent: "center",
        alignItems: "center",
        height: 300,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 30,
          flexDirection: "column",
          padding: "20px 40px",
          // justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextArea
          label={"Description"}
          value={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
          rows={3}
        />
      </div>
    </VBox>
  );
}

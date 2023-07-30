import React from "react";
import { Checkbox, VBox } from "@react-elf/ui";

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [40, 200],
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        height: 300,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 30,
          fontSize: 20,
          justifyContent: "flex-start",
        }}
      >
        <em style={{ color: "var(--color-gray-5)" }}>Interests</em>
        <Checkbox checked={true}>Illustration</Checkbox>

        <Checkbox checked={true}>Photo</Checkbox>

        <Checkbox indeterminate checked={true}>
          UI/UX Design
        </Checkbox>
      </div>
    </VBox>
  );
}

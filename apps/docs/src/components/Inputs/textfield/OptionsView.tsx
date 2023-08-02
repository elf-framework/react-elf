import React from "react";
import { TextField, VBox } from "@react-elf/ui";

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
        <TextField label="Email address" value="xxx@elf-framework.com" />
      </div>
    </VBox>
  );
}

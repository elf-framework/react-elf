import React from "react";
import { Grid, TextField, VBox } from "@react-elf/ui";

export function RequiredOptionalView() {
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
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
          <TextField
            label={"Email address"}
            optional={true}
            value={"xxx@elf-framework.com"}
          />

          <TextField
            label={"Email address"}
            requiredText={"(required)"}
            required={true}
            value={"xxx@elf-framework.com"}
          />

          <TextField
            label={"Email address"}
            required={true}
            value={"xxx@elf-framework.com"}
          />
        </div>
      </div>
    </VBox>
  );
}

import React from "react";
import { Field, InputEditor, VBox } from "@react-elf/ui";

export function LabelPositionView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "30px 20px",
        fontSize: 13,
        justifyContent: "center",
        alignItems: "center",
        height: 200,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 30,
          flexDirection: "column",
          padding: "20px 0px",
          justifyContent: "center",
          alignItems: "center",
          width: 300,
        }}
      >
        <Field
          label="Email address"
          style={{
            width: 300,
          }}
        >
          <InputEditor />
        </Field>

        <Field
          label="Email address"
          position="horizontal"
          style={{
            width: 300,
          }}
        >
          <InputEditor />
        </Field>
      </div>
    </VBox>
  );
}

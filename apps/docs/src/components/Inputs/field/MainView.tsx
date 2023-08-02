import React, { useRef, useState } from "react";
import { Field, InputEditor, VBox } from "@react-elf/ui";

export function MainView() {
  const ref = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("sample text");
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [60, 60],
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
        <Field label="Controlled">
          <InputEditor
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </Field>

        <Field label="uncontrolled">
          <InputEditor defaultValue={value} />
        </Field>
      </div>
    </VBox>
  );
}

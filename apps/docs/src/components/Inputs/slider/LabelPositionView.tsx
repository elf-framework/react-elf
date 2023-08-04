import React, { useState } from "react";
import { VBox, Slider } from "@react-elf/ui";

export function LabelPositionView() {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "60px 150px",
        fontSize: 13,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 20,
          gap: 50,
        }}
      >
        <Slider
          label={"Contrast"}
          value={value}
          fill
          min={-5}
          max={5}
          step={0.01}
          onChange={(v) => setValue(v)}
        />
        <Slider
          label={"Contrast"}
          labelPosition="side"
          value={value2}
          max={10000}
          step={20}
          onChange={(v) => setValue2(v)}
        />
      </div>
    </VBox>
  );
}

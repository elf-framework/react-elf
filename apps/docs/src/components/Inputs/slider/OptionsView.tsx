import React, { useState } from "react";
import { VBox, Slider } from "@react-elf/ui";

export function OptionsView() {
  const [value, setValue] = useState(0);
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "60px 200px",
        fontSize: 13,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", padding: 20 }}>
        <Slider
          label={"Contrast"}
          value={value}
          max={10000}
          step={20}
          onChange={(v) => setValue(v)}
        />
      </div>
    </VBox>
  );
}

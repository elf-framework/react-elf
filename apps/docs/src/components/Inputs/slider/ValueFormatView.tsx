import React from "react";
import { VBox, Slider } from "@react-elf/ui";

export function ValueFormatView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "60px 200px",
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
          label={"Opacity"}
          defaultValue={40}
          min={0}
          max={100}
          step={1}
          valueFunc={(v) => `${v}%`}
        />

        <Slider
          label={"Exposure"}
          defaultValue={1.83}
          fill
          min={-5}
          max={5}
          step={0.01}
          valueFunc={(v) => `${v < 0 ? "-" : "+"} ${v}%`}
        />

        <Slider
          label={"Expense"}
          defaultValue={20}
          fill
          min={0}
          max={100}
          step={1}
          valueFunc={(v) => `$${v}`}
        />
      </div>
    </VBox>
  );
}

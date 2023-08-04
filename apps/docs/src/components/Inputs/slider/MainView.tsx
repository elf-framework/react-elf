import React from "react";
import { Slider, VBox } from "@react-elf/ui";

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [60, 200],
        alignItems: "center",
        fontSize: 13,
        position: "relative",
        margin: [0, "auto"],
        justifyContent: "center",
        height: 500,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 30,
          fontSize: 20,
          width: "80%",
        }}
      >
        <Slider
          min={0}
          max={10000}
          step={20}
          defaultValue={0}
          valuePlacement="top"
          label={"Contrast"}
          // eslint-disable-next-line no-undef
          valueFunc={(v) => {
            return new Intl.NumberFormat().format(v);
          }}
        />

        <Slider
          min={0}
          max={10000}
          step={20}
          defaultValue={0}
          valuePlacement="top"
          showValue
          // eslint-disable-next-line no-undef
          valueFunc={(v) => new Intl.NumberFormat().format(v)}
        />

        <Slider
          min={0}
          max={10000}
          step={20}
          defaultValue={0}
          showValue
          // eslint-disable-next-line no-undef
          valueFunc={(v) => new Intl.NumberFormat().format(v)}
        />

        <Slider
          min={0}
          max={10000}
          step={20}
          defaultValue={0}
          valuePlacement="bottom"
          showValue
          // eslint-disable-next-line no-undef
          valueFunc={(v) => new Intl.NumberFormat().format(v)}
        />
      </div>
    </VBox>
  );
}

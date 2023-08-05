import React from "react";
import { ProgressBar, VBox } from "@react-elf/ui";

export function MinMaxValueView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        fontSize: 13,
        height: 500,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 30,
          padding: "20px 40px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          height: 200,
        }}
      >
        <div>
          <div style={{ margin: "10px 0px" }}>
            <strong>Example: file upload</strong>
            <div>&nbsp;</div>
            <div>Value: 15</div>
            <div>Min value: 0</div>
            <div>Max value: 18</div>
          </div>
          <ProgressBar title="Loading data..." value={15} />
        </div>

        <div>
          <div style={{ margin: "10px 0px" }}>
            <strong>Example: filter processing</strong>
            <div>&nbsp;</div>
            <div>Value: 0.92</div>
            <div>Min value: 0</div>
            <div>Max value: 1</div>
          </div>
          <ProgressBar title="Loading data..." max={1} value={0.92} />
        </div>
      </div>
    </VBox>
  );
}

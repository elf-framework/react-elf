import React from "react";
import { Radio, RadioGroup, VBox } from "@react-elf/ui";

export function SizeView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [60, 40],
        fontSize: 13,
        justifyContent: "center",
        alignItems: "center",
        height: 600,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <div style={{ display: "flex" }}>
          <em style={{ display: "inline-block", width: 100 }}>Small</em>
          <RadioGroup
            direction="vertical"
            value={10}
            onChange={(value) => console.log(value)}
          >
            <Radio value={10}>Option 10</Radio>
            <Radio value={20}>Option 20</Radio>
            <Radio value={30}>Option 30</Radio>
          </RadioGroup>
        </div>

        <div style={{ display: "flex" }}>
          <em style={{ display: "inline-block", width: 100 }}>large</em>
          <RadioGroup
            direction="vertical"
            size="large"
            value={10}
            onChange={(value) => console.log(value)}
          >
            <Radio value={10}>Option 10</Radio>
            <Radio value={20}>Option 20</Radio>
            <Radio value={30}>Option 30</Radio>
          </RadioGroup>
        </div>
        <div style={{ display: "flex" }}>
          <em style={{ display: "inline-block", width: 100 }}>Extra Large</em>
          <RadioGroup
            direction="vertical"
            value={10}
            size="extra-large"
            onChange={(value) => console.log(value)}
          >
            <Radio value={10}>Option 10</Radio>
            <Radio value={20}>Option 20</Radio>
            <Radio value={30}>Option 30</Radio>
          </RadioGroup>
        </div>
      </div>
    </VBox>
  );
}

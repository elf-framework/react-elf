import React from "react";
import { Checkbox, CheckboxGroup, VBox } from "@react-elf/ui";

export function SizeView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [100, 40],
        fontSize: 13,
        justifyContent: "center",
        alignItems: "center",
        height: 800,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 30,
        }}
      >
        <div style={{ display: "flex" }}>
          <em style={{ display: "inline-block", width: 100 }}>Small</em>
          <CheckboxGroup
            direction="vertical"
            values={[10]}
            size="small"
            onChange={(values) => console.log(values)}
          >
            <Checkbox value={10}>Travel</Checkbox>
            <Checkbox value={20}>Music</Checkbox>
            <Checkbox value={30}>Shopping</Checkbox>
          </CheckboxGroup>
        </div>
        <div style={{ display: "flex" }}>
          <em style={{ display: "inline-block", width: 100 }}>Extra Large</em>
          <CheckboxGroup
            direction="vertical"
            values={[10]}
            onChange={(values) => console.log(values)}
          >
            <Checkbox value={10}>Travel</Checkbox>
            <Checkbox value={20}>Music</Checkbox>
            <Checkbox value={30}>Shopping</Checkbox>
          </CheckboxGroup>
        </div>
        <div style={{ display: "flex" }}>
          <em style={{ display: "inline-block", width: 100 }}>Extra Large</em>
          <CheckboxGroup
            direction="vertical"
            values={[10]}
            size="large"
            onChange={(values) => console.log(values)}
          >
            <Checkbox value={10}>Travel</Checkbox>
            <Checkbox value={20}>Music</Checkbox>
            <Checkbox value={30}>Shopping</Checkbox>
          </CheckboxGroup>
        </div>
        <div style={{ display: "flex" }}>
          <em style={{ display: "inline-block", width: 100 }}>Extra Large</em>
          <CheckboxGroup
            direction="vertical"
            values={[10]}
            size="extra-large"
            onChange={(values) => console.log(values)}
          >
            <Checkbox value={10}>Travel</Checkbox>
            <Checkbox value={20}>Music</Checkbox>
            <Checkbox value={30}>Shopping</Checkbox>
          </CheckboxGroup>
        </div>
      </div>
    </VBox>
  );
}

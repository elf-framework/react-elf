import React from "react";
import { Field, Flex, VBox } from "@react-elf/ui";

export function SizeView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "30px 20px",
        fontSize: 13,
        justifyContent: "center",
        alignItems: "center",
        height: 300,
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
        <Flex>
          <div style={{ flex: "none", width: 100 }}>
            <em>small</em>
          </div>
          <Field label={"Label"} size={"small"} required={true} />
        </Flex>
        <Flex>
          <div style={{ flex: "none", width: 100 }}>
            <em>medium</em>
          </div>
          <Field label={"Label"} required={true} />
        </Flex>
        <Flex>
          <div style={{ flex: "none", width: 100 }}>
            <em>large</em>
          </div>
          <Field label={"Label"} size={"large"} required={true} />
        </Flex>
        <Flex>
          <div style={{ flex: "none", width: 100 }}>
            <em>extra-large</em>
          </div>
          <Field label={"Label"} size={"extra-large"} required={true} />
        </Flex>
      </div>
    </VBox>
  );
}

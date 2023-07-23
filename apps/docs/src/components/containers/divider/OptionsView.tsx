import React from "react";
import { Divider, Flex, Grid, VBox } from "@react-elf/ui";

export function OptionsView() {
  return (
    <VBox
      gap={30}
      style={{
        backgroundColor: "var(--color-gray-0)",
        padding: "60px 50px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          display: "flex",
          gap: 30,
          flexDirection: "column",
          width: 300,
        }}
      >
        <Flex style={{ gap: 30 }}>
          <em>Small</em>
          <Divider size="small" />
        </Flex>
        <Flex style={{ gap: 30 }}>
          <em>Medium</em>
          <Divider size="medium" />
        </Flex>
        <Flex style={{ gap: 30 }}>
          <em>Large</em>
          <Divider size="large" />
        </Flex>
      </div>
    </VBox>
  );
}

import React from "react";
import { Tooltip, VBox } from "@react-elf/ui";

function Item({ variant }) {
  return (
    <Tooltip variant={variant} message={"text message"} placement="top" show />
  );
}

export function VariantView() {
  return (
    <VBox
      style={{
        gap: 50,
        backgroundColor: "var(--color-gray-0)",
        padding: "30px 0px",
        height: 240,
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "grid",
          columnGap: 140,
          gridTemplateColumns: "repeat(3, 1fr)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Item variant="default" />
        <Item variant="dark" />
        <Item variant="primary" />
        <Item variant="secondary" />
        <Item variant="success" />
        <Item variant="warning" />
        <Item variant="danger" />
        <Item variant="info" />
      </div>
    </VBox>
  );
}

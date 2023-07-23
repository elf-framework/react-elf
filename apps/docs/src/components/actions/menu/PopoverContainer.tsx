import React from "react";
import { Menu, VBox } from "@react-elf/ui";

export function PopoverContainer() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "60px 20px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <Menu
          items={[
            { type: "item", title: "Document Setup" },
            { type: "item", title: "Settings" },
            { type: "item", title: "Copy" },
          ]}
          style={{
            position: "relative",
          }}
        />
      </div>
    </VBox>
  );
}

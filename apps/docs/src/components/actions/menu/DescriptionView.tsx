import React from "react";
import { Menu, VBox } from "@react-elf/ui";

export function DescriptionView() {
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
            {
              type: "item",
              title: "Quick export",
              description: "Share a low-res snapshot",
            },
            { type: "item", title: "Settings" },
            {
              type: "item",
              title: "Open a copy",
              description: "Open in iPad",
            },
          ]}
          style={{
            position: "relative",
          }}
        />
      </div>
    </VBox>
  );
}

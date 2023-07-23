import React from "react";
import { Menu, VBox } from "@react-elf/ui";

export function ValueView() {
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
              shortcut: "⌘ + Ctrl+E",
              description: "Share a low-res snapshot",
              items: [{ type: "item", title: "Document Setup" }],
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

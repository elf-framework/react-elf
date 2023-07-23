import React from "react";
import { Menu, VBox } from "@react-elf/ui";

export function VariantView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "60px 60px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <strong>Light</strong>
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
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <strong>Dark</strong>
          <Menu
            variant="dark"
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
      </div>
    </VBox>
  );
}

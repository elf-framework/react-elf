import React from "react";
import { Menu, VBox } from "@react-elf/ui";
import { MdDescription } from "react-icons/md";

export function IconView() {
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
              icon: <MdDescription />,
              title: "Document Setup",
            },
            { type: "item", title: "Settings" },
            {
              type: "item",
              title: "Copy",
              items: [{ type: "item", title: "Document Setup" }],
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

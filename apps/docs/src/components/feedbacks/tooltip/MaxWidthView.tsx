import React from "react";
import { IconWrapper, Tooltip, VBox } from "@react-elf/ui";
import { MdInfoOutline } from "react-icons/md";

function Item({ variant, icon }) {
  return (
    <Tooltip
      variant={variant}
      icon={icon}
      message={
        <div style={{ whiteSpace: "pre-wrap" }}>
          Your admin must grant you permission to create segments
        </div>
      }
      placement="bottom"
      show
      style={{
        maxWidth: 160,
      }}
    />
  );
}

export function MaxWidthView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [0, 40],
        height: 300,
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 70,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Item
          variant="default"
          icon={
            <IconWrapper>
              <MdInfoOutline />
            </IconWrapper>
          }
        />
      </div>
    </VBox>
  );
}

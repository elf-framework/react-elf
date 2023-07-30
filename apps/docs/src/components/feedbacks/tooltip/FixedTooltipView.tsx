import React from "react";
import { Button, FixedTooltip, IconWrapper, VBox } from "@react-elf/ui";
import { MdInfoOutline } from "react-icons/md";

export function FixedTooltipView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [120, 40],
        height: 200,
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 70,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FixedTooltip message={"Sample"} variant="dark">
          <Button>
            <IconWrapper>
              <MdInfoOutline />
            </IconWrapper>
            Hello
          </Button>
        </FixedTooltip>
      </div>
    </VBox>
  );
}

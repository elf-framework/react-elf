import React from "react";
import { IconWrapper, Toast, VBox } from "@react-elf/ui";
import { MdInfoOutline } from "react-icons/md";

export function IconView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "40px 40px",
      }}
    >
      <div>
        <Toast
          direction="bottom-right"
          icon={
            <IconWrapper
              style={{
                fontSize: 20,
              }}
            >
              <MdInfoOutline />
            </IconWrapper>
          }
        >
          Hello World yellow 234
        </Toast>
      </div>
    </VBox>
  );
}

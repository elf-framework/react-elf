import React from "react";
import { Dialog, Ghost, VBox } from "@react-elf/ui";

export function DescriptionView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "50px 40px",
        height: 280,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <div style={{ position: "relative", textAlign: "center" }}>
          <Dialog
            visible={true}
            noBorder
            style={{
              width: 300,
            }}
            closable={false}
            title={<Ghost style={{ width: "100%" }} />}
            footer={<span />}
          >
            The following typefaces are not available. Please either install
            these on your computer or in Figma. Alternatively you can replace
            them with other fonts.
          </Dialog>
        </div>
      </div>
    </VBox>
  );
}

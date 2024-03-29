import React from "react";
import { Dialog, VBox } from "@react-elf/ui";

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "60px 0px",
        position: "relative",
        height: 300,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          flex: "none",
          position: "relative",
        }}
      >
        <Dialog
          visible={true}
          style={{
            width: 400,
            // height: 200,
          }}
          noBorder
          title="Dialog"
        >
          The following typefaces are not available. Please either install these
          on your computer or in Figma. Alternatively you can replace them with
          other fonts.
        </Dialog>
      </div>
    </VBox>
  );
}

import React from "react";
import { Dialog, Ghost, VBox } from "@react-elf/ui";

export function TitleView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "50px 40px",
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
            title="Dialog"
            closable={false}
            footer={<span />}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Ghost style={{ width: "100%" }} />
              <Ghost style={{ width: "90%" }} />
            </div>
          </Dialog>
        </div>
      </div>
    </VBox>
  );
}

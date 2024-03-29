import React from "react";
import { Dialog, VBox } from "@react-elf/ui";

export function ClosableView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [50, 50],
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            textAlign: "center",
            padding: 50,
          }}
        >
          <Dialog
            visible={true}
            style={{
              width: 300,
            }}
            title="Title"
          >
            Smart filters are nondestructive
          </Dialog>
        </div>
      </div>
    </VBox>
  );
}

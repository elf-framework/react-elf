import React from "react";
import { Button, ProgressBar, VBox } from "@react-elf/ui";

export function ValueView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "30px 20px",
        fontSize: 13,
        height: 200,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 30,
          justifyContent: "center",
          alignItems: "center",
          height: 200,
        }}
      >
        <div>
          <ProgressBar
            title={
              <Button
                disabled
                size="extra-small"
                style={{
                  width: 50,
                }}
              >
                {"     "}
              </Button>
            }
            value={33}
          />
        </div>
      </div>
    </VBox>
  );
}

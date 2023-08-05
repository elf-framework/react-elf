import React from "react";
import { Button, ProgressBar, VBox } from "@react-elf/ui";

export function WidthView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
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
          flexDirection: "column",
          padding: "20px 40px",
          justifyContent: "center",
          alignItems: "flex-start",
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
              />
            }
            value={33}
            style={{
              width: 200,
            }}
          />
        </div>

        <div>
          <ProgressBar
            title={
              <Button
                disabled
                size="extra-small"
                style={{
                  width: 50,
                }}
              />
            }
            value={33}
            style={{
              width: 240,
            }}
          />
        </div>
      </div>
    </VBox>
  );
}

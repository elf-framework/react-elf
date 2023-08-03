import React from "react";
import { TextArea, VBox } from "@react-elf/ui";

export function SizeView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "30px 20px",
        fontSize: 13,
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
          alignItems: "center",
        }}
      >
        {["small", "medium", "large", "extra-large"].map((size) => (
          <div style={{ display: "flex" }} key={size}>
            <div style={{ flex: "none", width: 100 }}>
              <em>{size}</em>
            </div>
            <TextArea
              label="Email address"
              size={size as any}
              value={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              rows={5}
            />
          </div>
        ))}
      </div>
    </VBox>
  );
}

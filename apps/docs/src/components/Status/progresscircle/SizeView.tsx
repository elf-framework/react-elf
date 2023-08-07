import React from "react";
import { Grid, ProgressCircle, VBox } from "@react-elf/ui";

export function SizeView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "30px 20px",
        fontSize: 13,
        height: 400,
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
          alignItems: "flex-start",
        }}
      >
        {["small", "medium", "large", "extra-large"].map((size) => (
          <Grid columns={[1, 1]} gap={20} key={size}>
            <div
              style={{
                flex: "none",
                width: 100,

                textAlign: "center",
                verticalAlign: "middle",
              }}
            >
              <em>{size}</em>
            </div>
            <div
              style={{
                textAlign: "center",
                verticalAlign: "middle",
              }}
            >
              <ProgressCircle size={size as any} value={33} />
            </div>
          </Grid>
        ))}
      </div>
    </VBox>
  );
}

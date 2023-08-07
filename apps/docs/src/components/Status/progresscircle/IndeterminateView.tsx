import React from "react";
import { Grid, ProgressCircle, VBox } from "@react-elf/ui";

export function IndeterminateView() {
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
          padding: "20px 40px",
          justifyContent: "center",
          alignItems: "center",
          // height: 200,
          textAlign: "center",
        }}
      >
        <Grid columns={[1, 1]} gap={50}>
          <div>
            <div style={{ padding: "10px 0px" }}>
              <em>Determinate</em>
            </div>
            <ProgressCircle size="large" variant="primary" animated />
          </div>
          <div>
            <div style={{ padding: "10px 0px" }}>
              <em>Indeterminate </em>
            </div>
            <ProgressCircle size="large" indeterminate variant="primary" />
          </div>
        </Grid>
      </div>
    </VBox>
  );
}

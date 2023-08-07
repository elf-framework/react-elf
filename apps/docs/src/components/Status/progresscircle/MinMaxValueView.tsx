import React from "react";
import { Grid, ProgressCircle, VBox } from "@react-elf/ui";

export function MinMaxValueView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "20px 20px",
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
          padding: "20px 40px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: 200,
        }}
      >
        <div>
          <div style={{ margin: "10px 0px" }}>
            <strong>Example: file upload</strong>
            <Grid columns={[1, 1]} gap={100} style={{ marginTop: 30 }}>
              <div>
                <div>Value: 15</div>
                <div>Min value: 0</div>
                <div>Max value: 18</div>
              </div>

              <div>
                <ProgressCircle value={15} max={18} size="large" />
              </div>
            </Grid>
          </div>
        </div>

        <div>
          <div style={{ margin: "10px 0px" }}>
            <strong>Example: filter processing</strong>
            <Grid columns={[1, 1]} gap={100} style={{ marginTop: 30 }}>
              <div>
                <div>Value: 0.92</div>
                <div>Min value: 0</div>
                <div>Max value: 1</div>
              </div>
              <div>
                <ProgressCircle max={1} value={0.92} size="large" />
              </div>
            </Grid>
          </div>
        </div>
      </div>
    </VBox>
  );
}

import React from "react";
import { Checkbox, Grid, VBox } from "@react-elf/ui";

export function ErrorView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "60px 20px",
        fontSize: 13,
        justifyContent: "center",
      }}
    >
      <Grid columns={1} style={{ padding: [0, 100] }}>
        <div style={{ display: "flex", flexDirection: "column", padding: 20 }}>
          <div>&nbsp;</div>
          <Checkbox variant="danger">label</Checkbox>
          <Checkbox variant="danger" checked>
            label
          </Checkbox>
          <Checkbox variant="danger" indeterminate>
            label
          </Checkbox>
        </div>
      </Grid>
    </VBox>
  );
}

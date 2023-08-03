import React from "react";
import { Switch, Grid, VBox } from "@react-elf/ui";

export function ReadOnlyView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "60px 20px",
        fontSize: 13,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid columns={1} style={{ padding: [0, 100] }}>
        <div style={{ display: "flex", flexDirection: "column", padding: 20 }}>
          <div>&nbsp;</div>
          <Switch readOnly>label</Switch>
          <Switch readOnly checked>
            label
          </Switch>
          <Switch readOnly>label</Switch>
        </div>
      </Grid>
    </VBox>
  );
}

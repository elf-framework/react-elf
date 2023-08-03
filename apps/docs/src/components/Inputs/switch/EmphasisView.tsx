import React from "react";
import { Switch, Grid, VBox } from "@react-elf/ui";

export function EmphasisView() {
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
      <Grid columns={2}>
        <div style={{ display: "flex", flexDirection: "column", padding: 20 }}>
          <em style={{ color: `var(--color-gray-6)` }}>Not emphasized</em>
          <div>&nbsp;</div>
          <Switch>label</Switch>
          <Switch checked>label</Switch>
          <Switch>label</Switch>
        </div>
        <div style={{ display: "flex", flexDirection: "column", padding: 20 }}>
          <em style={{ color: `var(--color-gray-6)` }}>Emphasized</em>
          <div>&nbsp;</div>
          <Switch variant="primary" checked>
            Label
          </Switch>
          <Switch variant="success" checked>
            Label
          </Switch>
          <Switch variant="danger" checked>
            Label
          </Switch>
        </div>
      </Grid>
    </VBox>
  );
}

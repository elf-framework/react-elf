import React from "react";
import { Divider, Grid, VBox } from "@react-elf/ui";

export function OrientationView() {
  return (
    <VBox
      gap={30}
      style={{
        backgroundColor: "var(--color-gray-0)",
        padding: "40px 40px",
        height: 200,
      }}
    >
      <Grid columns={2} gap={100}>
        <VBox
          gap={30}
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Divider size="small" orientation="horizontal" />
          <em>Horizontal</em>
        </VBox>
        <VBox gap={10} style={{ alignItems: "center" }}>
          <Divider
            size="small"
            orientation="vertical"
            style={{ alignSelf: "center", height: 100 }}
          />
          <em>Vertical</em>
        </VBox>
      </Grid>
    </VBox>
  );
}

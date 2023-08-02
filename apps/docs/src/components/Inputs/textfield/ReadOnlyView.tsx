import React from "react";
import { Grid, TextField, VBox } from "@react-elf/ui";

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
      <Grid columns={1} style={{ padding: [0, 10] }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 20,
            alignItems: "center",
          }}
        >
          <TextField
            label={"Read only"}
            readOnly
            value="xxx@elf-framework.com"
          />
        </div>
      </Grid>
    </VBox>
  );
}

import React from "react";
import { Grid, RoundButton, Toast, VBox } from "@react-elf/ui";

export function ToolsView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "40px 40px",
        }}
      >
        <div>
          <Toast
            direction="bottom-right"
            tools={[<RoundButton variant="outline">Action</RoundButton>]}
          >
            Hello World yellow 234
          </Toast>
        </div>
      </VBox>
      <div>
        <p></p>
      </div>
    </Grid>
  );
}

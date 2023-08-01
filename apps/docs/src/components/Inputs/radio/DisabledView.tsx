import React from "react";
import { Grid, Radio, RadioGroup, VBox } from "@react-elf/ui";

export function DisabledView() {
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
      <Grid columns={1} style={{ padding: [0, 50] }}>
        <div style={{ display: "flex", flexDirection: "column", padding: 20 }}>
          <div>&nbsp;</div>
          <RadioGroup
            direction="vertical"
            value={10}
            disabled
            onChange={(value) => console.log(value)}
          >
            <Radio value={10}>Option 10</Radio>
            <Radio value={20}>Option 20</Radio>
            <Radio value={30}>Option 30</Radio>
          </RadioGroup>
        </div>
      </Grid>
    </VBox>
  );
}

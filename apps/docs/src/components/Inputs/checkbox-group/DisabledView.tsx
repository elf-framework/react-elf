import React from "react";
import { Checkbox, CheckboxGroup, Grid, VBox } from "@react-elf/ui";

export function DisabledView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "60px 20px",
        fontSize: 13,
      }}
    >
      <Grid columns={1} style={{ padding: [0, 100] }}>
        <div style={{ display: "flex", flexDirection: "column", padding: 20 }}>
          <div>&nbsp;</div>
          <CheckboxGroup
            values={[10, 20]}
            disabled
            onChange={(values) => console.log(values)}
          >
            <Checkbox value={10}>Travel</Checkbox>
            <Checkbox value={20}>Music</Checkbox>
            <Checkbox value={30}>Shopping</Checkbox>
          </CheckboxGroup>
        </div>
      </Grid>
    </VBox>
  );
}

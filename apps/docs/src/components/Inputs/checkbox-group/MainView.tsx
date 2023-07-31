import React from "react";
import { Checkbox, CheckboxGroup, Grid, VBox } from "@react-elf/ui";

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [100, 100],
        position: "relative",
        height: 300,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid columns={2} gap={100}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 30,
            fontSize: 20,
          }}
        >
          <em style={{ color: "var(--color-gray-5)" }}>Interests *</em>

          <CheckboxGroup
            direction="vertical"
            values={[10, 20]}
            disabled
            variant="danger"
            onChange={(values) => console.log(values)}
          >
            <Checkbox value={10}>Travel</Checkbox>
            <Checkbox value={20}>Music</Checkbox>
            <Checkbox value={30}>Shopping</Checkbox>
          </CheckboxGroup>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 30,
            fontSize: 20,
          }}
        >
          <em style={{ color: "var(--color-gray-5)" }}>Interests *</em>
          <CheckboxGroup
            direction="vertical"
            variant="dark"
            values={[10]}
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

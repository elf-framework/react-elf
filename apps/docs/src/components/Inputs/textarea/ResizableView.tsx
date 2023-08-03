import React from "react";
import { Grid, TextArea, VBox } from "@react-elf/ui";

export function ResizableView() {
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
          <TextArea
            label="Email address"
            resizable
            value={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            rows={5}
            inputStyle={{
              width: 300,
            }}
          />
        </div>
      </Grid>
    </VBox>
  );
}

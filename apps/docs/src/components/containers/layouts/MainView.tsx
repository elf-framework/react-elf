import React from "react";
import { Flex, Ghost, Grid, VBox } from "@react-elf/ui";

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        overflow: "auto",
        backgroundColor: "var(--color-gray-0)",
        padding: 40,
      }}
    >
      <div>
        <strong style={{ marginBottom: 10 }}>Grid</strong>
        <Grid columns={3} style={{ gap: 10 }} rows={["100px", "100px"]}>
          <Ghost />
          <Ghost />
          <Ghost />
          <Ghost />
          <Ghost />
          <Ghost />
        </Grid>
        <strong>Flex</strong>
        <Flex style={{ gap: 10, justifyContent: "flex-start" }}>
          <Ghost style={{ width: 140 }} />
          <Ghost style={{ width: 140 }} />
          <Ghost style={{ width: 140 }} />
        </Flex>
        <div>&nbsp;</div>
        <Flex wrap style={{ gap: 10, justifyContent: "flex-start" }}>
          <Ghost style={{ width: 140 }} />
          <Ghost style={{ width: 240, height: 50 }} />
          <Ghost style={{ width: 140 }} />
          <Ghost style={{ width: 140 }} />
          <Ghost style={{ width: 40 }} />
          <Ghost style={{ width: 140 }} />
          <Ghost style={{ width: 150 }} />
          <Ghost style={{ width: 140 }} />
        </Flex>
      </div>
    </VBox>
  );
}

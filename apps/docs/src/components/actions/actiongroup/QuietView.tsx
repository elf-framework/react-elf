import React from "react";
import { ActionGroup, Button, VBox } from "@react-elf/ui";
import { MdDescription, MdSettings } from "react-icons/md";

export function QuietView() {
  return (
    <VBox
      style={{
        flexDirection: "column",
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: 40,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <div>
          <em>Not quiet</em>
        </div>
        <ActionGroup style={{ gap: 10, margin: 10 }}>
          <Button>
            <MdDescription />
            Document Setup
          </Button>
          <Button>
            <MdSettings /> Settings
          </Button>
        </ActionGroup>
      </div>
      <div>
        <div>
          <em>Quiet</em>
        </div>
        <ActionGroup style={{ gap: 10, margin: 10 }} quiet>
          <Button quiet={true}>
            <MdDescription />
            Document Setup
          </Button>
          <Button quiet={true}>
            <MdSettings /> Settings
          </Button>
        </ActionGroup>
      </div>
    </VBox>
  );
}

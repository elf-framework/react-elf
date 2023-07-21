import React from "react";
import { ActionGroup, Button, VBox } from "@react-elf/ui";
import { MdContentCopy, MdDescription, MdSettings } from "react-icons/md";

export function MultiSelectionView() {
  return (
    <VBox
      style={{ gap: 30, backgroundColor: "var(--color-gray-0)", padding: 40 }}
    >
      <div>
        <div>
          <em>Single Selection</em>
        </div>
        <ActionGroup style={{ gap: 10, margin: 10 }}>
          <Button quiet selected>
            <MdDescription />
            Document Setup
          </Button>
          <Button quiet>
            <MdSettings /> Settings
          </Button>
          <Button quiet>
            <MdContentCopy /> Copy
          </Button>
        </ActionGroup>
      </div>
      <div>
        <div>
          <em>Multi Selection</em>
        </div>
        <ActionGroup style={{ gap: 10, margin: 10 }}>
          <Button quiet selected>
            <MdDescription />
            Document Setup
          </Button>
          <Button quiet selected>
            <MdSettings /> Settings
          </Button>
          <Button quiet>
            <MdContentCopy /> Copy
          </Button>
        </ActionGroup>
      </div>
    </VBox>
  );
}

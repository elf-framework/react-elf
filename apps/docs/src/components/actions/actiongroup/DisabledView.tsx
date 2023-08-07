import React from "react";
import { ActionGroup, Button, VBox } from "@react-elf/ui";
import { MdContentCopy, MdDescription, MdSettings } from "react-icons/md";

export function DisabledView() {
  return (
    <VBox
      style={{ gap: 30, backgroundColor: "var(--color-gray-0)", padding: 40 }}
    >
      <div>
        <div>
          <em>Disabled</em>
        </div>
        <ActionGroup style={{ gap: 10, margin: 10 }} disabled>
          <Button>
            <MdDescription />
            Document Setup
          </Button>
          <Button>
            <MdSettings /> Settings
          </Button>
          <Button>
            <MdContentCopy /> Copy
          </Button>
        </ActionGroup>
      </div>
    </VBox>
  );
}

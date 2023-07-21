import React from "react";
import { ActionGroup, Button, VBox } from "@react-elf/ui";
import { MdDescription, MdSettings } from "react-icons/md";

export function EnableSelectionView() {
  return (
    <VBox
      style={{ gap: 30, backgroundColor: "var(--color-gray-0)", padding: 40 }}
    >
      <div>
        <div>
          <em>Selection not enabled</em>
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
        <ActionGroup style={{ gap: 10, margin: 10 }}>
          <Button quiet={true}>
            <MdDescription />
            Document Setup
          </Button>
          <Button quiet={true}>
            <MdSettings /> Settings
          </Button>
        </ActionGroup>
      </div>
      <div>
        <div>
          <em>Selection enabled</em>
        </div>
        <ActionGroup style={{ gap: 10, margin: 10 }}>
          <Button selected={true}>
            <MdDescription />
            Document Setup
          </Button>
          <Button>
            <MdSettings /> Settings
          </Button>
        </ActionGroup>
        <ActionGroup compact={true} style={{ gap: 10, margin: 10 }}>
          <Button selected={true}>
            <MdDescription />
            Document Setup
          </Button>
          <Button>
            <MdSettings /> Settings
          </Button>
        </ActionGroup>
      </div>
    </VBox>
  );
}

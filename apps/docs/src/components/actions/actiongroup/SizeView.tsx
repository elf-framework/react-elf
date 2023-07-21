import React from "react";
import { ActionGroup, Button, Grid, VBox } from "@react-elf/ui";
import { MdDescription, MdSettings } from "react-icons/md";

export function SizeView() {
  return (
    <VBox
      style={{ gap: 30, backgroundColor: "var(--color-gray-0)", padding: 20 }}
    >
      <VBox>
        <em>Small</em>
        <ActionGroup style={{ gap: 10, margin: 10 }}>
          <Button size="small">
            <MdDescription />
            Document Setup
          </Button>
          <Button size="small">
            <MdSettings /> Settings
          </Button>
        </ActionGroup>
      </VBox>
      <VBox>
        <em>Medium</em>
        <ActionGroup style={{ gap: 10, margin: 10 }}>
          <Button>
            <MdDescription />
            Document Setup
          </Button>
          <Button>
            <MdSettings /> Settings
          </Button>
        </ActionGroup>
      </VBox>

      <VBox>
        <em>Large</em>
        <ActionGroup style={{ gap: 10, margin: 10 }}>
          <Button size="large">
            <MdDescription />
            Document Setup
          </Button>
          <Button size="large">
            <MdSettings /> Settings
          </Button>
        </ActionGroup>
      </VBox>
      <VBox>
        <em>Extra Large</em>
        <ActionGroup style={{ gap: 10, margin: 10 }}>
          <Button size="extra-large">
            <MdDescription />
            Document Setup
          </Button>
          <Button size="extra-large">
            <MdSettings /> Settings
          </Button>
        </ActionGroup>
      </VBox>
    </VBox>
  );
}

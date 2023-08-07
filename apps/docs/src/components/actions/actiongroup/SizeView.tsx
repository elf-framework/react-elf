import React from "react";
import { ActionGroup, Button, Grid, VBox } from "@react-elf/ui";
import { MdDescription, MdSettings } from "react-icons/md";

export function SizeView() {
  return (
    <VBox
      style={{
        flexDirection: "column",
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: 20,
        fontSize: 13,
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <VBox
        style={{
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <em>Extra Small</em>
        <ActionGroup style={{ gap: 10, margin: 10 }} size="extra-small">
          <Button>
            <MdDescription />
            Document Setup
          </Button>
          <Button>
            <MdSettings /> Settings
          </Button>
        </ActionGroup>
      </VBox>

      <VBox
        style={{
          alignItems: "center",
        }}
      >
        <em>Small</em>
        <ActionGroup style={{ gap: 10, margin: 10 }} size="small">
          <Button>
            <MdDescription />
            Document Setup
          </Button>
          <Button>
            <MdSettings /> Settings
          </Button>
        </ActionGroup>
      </VBox>
      <VBox
        style={{
          alignItems: "center",
        }}
      >
        <em>Medium</em>
        <ActionGroup style={{ gap: 10, margin: 10 }} size="medium">
          <Button>
            <MdDescription />
            Document Setup
          </Button>
          <Button>
            <MdSettings /> Settings
          </Button>
        </ActionGroup>
      </VBox>

      <VBox
        style={{
          alignItems: "center",
        }}
      >
        <em>Large</em>
        <ActionGroup style={{ gap: 10, margin: 10 }} size="large">
          <Button size="large">
            <MdDescription />
            Document Setup
          </Button>
          <Button size="large">
            <MdSettings /> Settings
          </Button>
        </ActionGroup>
      </VBox>
      <VBox
        style={{
          alignItems: "center",
        }}
      >
        <em>Extra Large</em>
        <ActionGroup style={{ gap: 10, margin: 10 }} size="extra-large">
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

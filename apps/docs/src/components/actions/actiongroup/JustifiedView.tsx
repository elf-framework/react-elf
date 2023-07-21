import React from "react";
import { ActionGroup, Button, VBox } from "@react-elf/ui";
import {
  MdContentCopy,
  MdDescription,
  MdEdit,
  MdSettings,
} from "react-icons/md";

export function JustifiedView() {
  return (
    <VBox
      style={{ gap: 30, backgroundColor: "var(--color-gray-0)", padding: 40 }}
    >
      <VBox>
        <em>Not justified</em>
        <ActionGroup style={{ gap: 10, margin: 10 }}>
          <Button>
            <MdDescription />
            Document Setup
          </Button>
          <Button>
            <MdSettings /> Settings
          </Button>
        </ActionGroup>
        <ActionGroup compact={true} style={{ gap: 10, margin: 10 }}>
          <Button>
            <MdDescription />
            Document
          </Button>
          <Button>
            <MdContentCopy /> Copy
          </Button>
          <Button>
            <MdSettings /> Settings
          </Button>
        </ActionGroup>
        <ActionGroup compact={true} style={{ gap: 10, margin: "10px 10px" }}>
          <Button>
            <MdEdit />
          </Button>
          <Button>
            <MdDescription />
          </Button>
          <Button>
            <MdSettings />
          </Button>
        </ActionGroup>
      </VBox>
      <VBox>
        <em>Justified</em>
        <ActionGroup justified={true} style={{ gap: 10, margin: 10 }}>
          <Button>
            <MdDescription />
            Document Setup
          </Button>
          <Button>
            <MdSettings /> Settings
          </Button>
        </ActionGroup>
        <ActionGroup
          justified={true}
          compact={true}
          style={{ gap: 10, margin: 10 }}
        >
          <Button>
            <MdContentCopy /> Copy
          </Button>
          <Button>
            <MdSettings /> Settings
          </Button>
        </ActionGroup>
        <ActionGroup
          justified={true}
          compact={true}
          style={{ gap: 10, margin: "10px 10px" }}
        >
          <Button>
            <MdEdit />
          </Button>
          <Button>
            <MdDescription />
          </Button>
          <Button>
            <MdSettings />
          </Button>
        </ActionGroup>
      </VBox>
    </VBox>
  );
}

import React from "react";
import {
  ActionGroup,
  Button,
  IconButton,
  IconWrapper,
  VBox,
} from "@react-elf/ui";
import {
  MdContentCopy,
  MdDescription,
  MdEdit,
  MdSettings,
} from "react-icons/md";

export function JustifiedView() {
  return (
    <VBox
      style={{
        flexDirection: "column",
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: 40,
      }}
    >
      <VBox
        style={{
          alignItems: "center",
        }}
      >
        <em>Not justified</em>
        <ActionGroup style={{ gap: 10, margin: 10 }}>
          <Button>
            <IconWrapper>
              <MdDescription />
            </IconWrapper>
            Document Setup
          </Button>
          <Button>
            <IconWrapper>
              <MdSettings />
            </IconWrapper>{" "}
            Settings
          </Button>
        </ActionGroup>
        <ActionGroup compact={true} style={{ gap: 10, margin: 10 }}>
          <Button>
            <IconWrapper>
              <MdDescription />
            </IconWrapper>
            Document
          </Button>
          <Button>
            <IconWrapper>
              <MdContentCopy />
            </IconWrapper>{" "}
            Copy
          </Button>
          <Button>
            <IconWrapper>
              <MdSettings />
            </IconWrapper>{" "}
            Settings
          </Button>
        </ActionGroup>
        <ActionGroup compact={true} style={{ gap: 10, margin: "10px 10px" }}>
          <IconButton>
            <MdEdit />
          </IconButton>
          <IconButton>
            <MdDescription />
          </IconButton>
          <IconButton>
            <MdSettings />
          </IconButton>
        </ActionGroup>
      </VBox>
      <VBox
        style={{
          alignItems: "center",
        }}
      >
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
          <IconButton>
            <MdEdit />
          </IconButton>
          <IconButton>
            <MdDescription />
          </IconButton>
          <IconButton>
            <MdSettings />
          </IconButton>
        </ActionGroup>
      </VBox>
    </VBox>
  );
}

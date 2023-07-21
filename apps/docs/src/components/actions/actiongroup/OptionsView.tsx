import React from "react";
import { ActionGroup, Button, Grid, IconButton, VBox } from "@react-elf/ui";
import { MdDescription, MdEdit, MdSettings } from "react-icons/md";

export function OptionsView() {
  return (
    <VBox
      style={{ gap: 30, backgroundColor: "var(--color-gray-0)", padding: 40 }}
    >
      <div>
        <em>Horizontal</em>
        <ActionGroup style={{ gap: 10, margin: 10 }}>
          <Button>
            <MdDescription />
            Document Setup
          </Button>
          <Button>
            <MdSettings /> Settings
          </Button>
        </ActionGroup>
        <ActionGroup style={{ gap: 10, margin: "10px 10px" }}>
          <IconButton quiet={true}>
            <MdEdit />
          </IconButton>
          <IconButton quiet={true}>
            <MdDescription />
          </IconButton>
          <IconButton quiet={true}>
            <MdSettings />
          </IconButton>
        </ActionGroup>
      </div>
      <div>
        <em>Vertical</em>
        <Grid columns={2} gap={20}>
          <ActionGroup direction="vertical" style={{ gap: 10, margin: 10 }}>
            <Button>
              <MdDescription />
              Document Setup
            </Button>
            <Button>
              <MdSettings /> Settings
            </Button>
          </ActionGroup>
          <ActionGroup
            direction="vertical"
            style={{ gap: 10, margin: "10px 10px" }}
          >
            <IconButton quiet={true}>
              <MdEdit />
            </IconButton>
            <IconButton quiet={true}>
              <MdDescription />
            </IconButton>
            <IconButton quiet={true}>
              <MdSettings />
            </IconButton>
          </ActionGroup>
        </Grid>
      </div>
    </VBox>
  );
}

import React from "react";
import { ActionGroup, Button, Grid, IconButton, VBox } from "@react-elf/ui";
import { MdDescription, MdEdit, MdSettings } from "react-icons/md";

export function DensityView() {
  return (
    <VBox
      style={{ gap: 30, backgroundColor: "var(--color-gray-0)", padding: 20 }}
    >
      <VBox>
        <em>Regular</em>
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
      </VBox>
      <Grid columns={2}>
        <VBox>
          <em>Compact</em>
          <ActionGroup compact={true} style={{ gap: 10, margin: 10 }}>
            <Button>
              <MdDescription />
              Document Setup
            </Button>
            <Button>
              <MdSettings /> Settings
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
          <ActionGroup compact={true} style={{ gap: 10, margin: "10px 10px" }}>
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
        </VBox>
        <VBox>
          <em>Compact Vertical</em>
          <ActionGroup
            compact={true}
            direction={"vertical"}
            style={{ gap: 10, margin: 10 }}
          >
            <Button>
              <MdDescription />
              Document Setup
            </Button>
            <Button>
              <MdSettings /> Settings
            </Button>
          </ActionGroup>
          <ActionGroup
            compact={true}
            direction={"vertical"}
            style={{ gap: 10, margin: "10px 10px" }}
          >
            <Button iconOnly>
              <MdEdit />
            </Button>
            <IconButton selected>
              <MdDescription />
            </IconButton>
            <IconButton>
              <MdSettings />
            </IconButton>
          </ActionGroup>
          <ActionGroup
            compact={true}
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
        </VBox>
      </Grid>
    </VBox>
  );
}

import React from "react";
import { Button, Grid, IconWrapper, Panel, Popover, VBox } from "@react-elf/ui";
import { MdInfoOutline, MdOutlineHelpOutline } from "react-icons/md";

export function PlacementView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "40px 40px",
        height: 900,
        justifyContent: "center",
      }}
    >
      <Grid rows={2} style={{ gap: 30 }}>
        <div style={{ textAlign: "left" }}>
          <em style={{ marginBottom: 10 }}>
            Placement : bottom-left (default)
          </em>
          <div style={{ paddingTop: 20 }}>
            <Popover
              show
              body={
                <Panel title={"Permission required"}>
                  <p>
                    Your admin must grant you permission to create segments.
                  </p>
                  <a href="#">Learn about permissions</a>
                </Panel>
              }
              placement="bottom-left" // default
            >
              <Button iconOnly quiet size="extra-small" selected>
                <IconWrapper>
                  <MdInfoOutline />
                </IconWrapper>
              </Button>
            </Popover>
          </div>
        </div>
        <div style={{ height: 200 }}>
          <div
            style={{
              paddingTop: 240,
              paddingLeft: 120,
            }}
          >
            <Popover
              show
              body={
                <Panel title={"Permission required"}>
                  <p>
                    Your admin must grant you permission to create segments.
                  </p>
                  <a href="#">Learn about permissions</a>
                </Panel>
              }
              placement="top"
            >
              <Button iconOnly quiet size="extra-small" selected>
                <IconWrapper>
                  <MdOutlineHelpOutline />
                </IconWrapper>
              </Button>
            </Popover>
          </div>
          <em style={{ marginBottom: 10 }}>Placement: top</em>
        </div>

        <div style={{ height: 200, marginTop: 100 }}>
          <em style={{ marginBottom: 10 }}>Placement: right-bottom</em>
          <div
            style={{
              paddingTop: 20,
            }}
          >
            <Popover
              show
              body={
                <Panel title={"Permission required"}>
                  <p>
                    Your admin must grant you permission to create segments.
                  </p>
                  <a href="#">Learn about permissions</a>
                </Panel>
              }
              placement="right-bottom"
            >
              <Button iconOnly quiet size="extra-small" selected>
                <IconWrapper>
                  <MdOutlineHelpOutline />
                </IconWrapper>
              </Button>
            </Popover>
          </div>
        </div>
      </Grid>
    </VBox>
  );
}

import React from "react";
import { Button, Grid, IconWrapper, Tooltip, VBox } from "@react-elf/ui";
import { MdInfoOutline } from "react-icons/md";

export function PlacementView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "40px 40px",
        height: 700,
        justifyContent: "center",
      }}
    >
      <Grid rows={2} style={{ gap: 30 }}>
        <div style={{ textAlign: "center" }}>
          <em style={{ marginBottom: 10 }}>Placement : top (default)</em>
          <div style={{ paddingTop: 100 }}>
            <Tooltip
              show
              message={
                <div style={{ whiteSpace: "pre-wrap" }}>
                  Your admin must grant you permission to create segments
                </div>
              }
              style={{
                maxWidth: 200,
              }}
              placement="top" // default
            >
              <Button quiet iconOnly size="extra-small" selected>
                <IconWrapper>
                  <MdInfoOutline />
                </IconWrapper>
              </Button>
            </Tooltip>
          </div>
        </div>
        <div style={{ textAlign: "left", height: 200 }}>
          <em style={{ marginBottom: 10 }}>Placement: bottom-right</em>
          <div
            style={{
              paddingTop: 40,
              paddingLeft: 120,
            }}
          >
            <Tooltip
              show
              message={
                <div style={{ whiteSpace: "pre-wrap" }}>
                  Your admin must grant you permission to create segments
                </div>
              }
              style={{
                maxWidth: 200,
              }}
              placement="bottom-right" // default
            >
              <Button quiet iconOnly size="extra-small" selected>
                <IconWrapper>
                  <MdInfoOutline />
                </IconWrapper>
              </Button>
            </Tooltip>
          </div>
        </div>

        <div style={{ textAlign: "center", height: 200 }}>
          <em style={{ marginBottom: 10 }}>Placement: bottom</em>
          <div
            style={{
              paddingTop: 20,
            }}
          >
            <Tooltip
              show
              message={
                <div style={{ whiteSpace: "pre-wrap" }}>
                  Your admin must grant you permission to create segments
                </div>
              }
              style={{
                maxWidth: 200,
              }}
              placement="bottom" // default
            >
              <Button quiet iconOnly size="extra-small" selected>
                <IconWrapper>
                  <MdInfoOutline />
                </IconWrapper>
              </Button>
            </Tooltip>
          </div>
        </div>
      </Grid>
    </VBox>
  );
}

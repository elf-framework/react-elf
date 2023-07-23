import React from "react";
import { Button, Grid, Menu, Popover, VBox } from "@react-elf/ui";
import { MdSettings } from "react-icons/md";

export function ShowTipView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "20px 40px",
        height: 560,
        justifyContent: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
        }}
      >
        <div style={{ position: "relative", height: 270 }}>
          <div>
            <em>Show tip: no</em>
          </div>
          <Popover
            body={
              <Menu
                type="dropdown"
                items={[
                  { type: "item", title: "Document Setup" },
                  { type: "item", title: "Settings" },
                  { type: "item", title: "Copy" },
                ]}
                style={{
                  width: 200,
                  position: "relative",
                  boxShadow: "none",
                }}
              />
            }
            show={true}
            placement="bottom"
          >
            <Button selected={true} style={{ visibility: "hidden" }}>
              <MdSettings /> Settings
            </Button>
          </Popover>
        </div>

        <div style={{ position: "relative" }}>
          <div>
            <em>Show tip: yes</em>
          </div>
          <Popover
            body={
              <Menu
                type="dropdown"
                relative
                items={[
                  { type: "item", title: "Document Setup" },
                  { type: "item", title: "Settings" },
                  { type: "item", title: "Copy" },
                ]}
                style={{
                  width: 200,
                  boxShadow: "none",
                }}
              />
            }
            show={true}
            showTip
            placement="bottom"
          >
            <Button selected={true} style={{ visibility: "hidden" }}>
              <MdSettings /> Settings
            </Button>
          </Popover>
        </div>
      </div>
    </VBox>
  );
}

import React from "react";
import { Button, Menu, Popover, VBox } from "@react-elf/ui";
import { MdSettings } from "react-icons/md";

export function PlacementView() {
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
      <div>
        <div style={{ position: "relative", height: 270 }}>
          <div>
            <em>bottom-left</em>
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
            placement="bottom-left"
          >
            <Button>
              <MdSettings /> Settings
            </Button>
          </Popover>
        </div>

        <div style={{ position: "relative", paddingTop: 150 }}>
          <Popover
            body={
              <Menu
                compact
                type="dropdown"
                relative
                items={[
                  { type: "item", title: "Document Setup" },
                  { type: "item", title: "Settings" },
                ]}
                style={{
                  width: "auto",
                }}
              />
            }
            trigger="click"
            show={true}
            placement="top-left"
          >
            <Button>
              <MdSettings /> Settings
            </Button>
          </Popover>
          <div>
            <em>top-left</em>
          </div>
        </div>
      </div>
    </VBox>
  );
}

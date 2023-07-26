import React from "react";
import { Button, IconWrapper, Panel, Popover, VBox } from "@react-elf/ui";
import { MdInfoOutline } from "react-icons/md";

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [100, 100],
        position: "relative",
        height: 400,
        justifyContent: "center",
      }}
    >
      <div
        style={{
          flex: "none",
          position: "relative",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Button>Create segment</Button>
        <Popover
          show
          body={
            <Panel
              title={"Permission required"}
              style={{
                width: 200,
              }}
            >
              <p>Your admin must grant you permission to create segments.</p>
              <a href="#">Learn about permissions</a>
            </Panel>
          }
          placement="right-bottom"
        >
          <Button iconOnly quiet size="extra-small" selected>
            <IconWrapper>
              <MdInfoOutline />
            </IconWrapper>
          </Button>
        </Popover>
      </div>
    </VBox>
  );
}

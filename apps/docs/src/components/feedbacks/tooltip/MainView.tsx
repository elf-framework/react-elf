import React from "react";
import { Button, VBox, Tooltip, IconWrapper } from "@react-elf/ui";
import { MdCached, MdEdit, MdHelpOutline, MdInfoOutline } from "react-icons/md";

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "0px 150px",
        position: "relative",
        height: 200,
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
        <div
          style={{
            height: 200,
            position: "relative",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Button iconOnly>
            <IconWrapper>
              <MdEdit />
            </IconWrapper>
          </Button>
          <Button iconOnly>
            <IconWrapper>
              <MdInfoOutline />
            </IconWrapper>
          </Button>
          <Button iconOnly>
            <IconWrapper>
              <MdCached />
            </IconWrapper>
          </Button>
          <Tooltip placement="top" message={"text message"} show>
            <Button iconOnly>
              <IconWrapper>
                <MdHelpOutline />
              </IconWrapper>
            </Button>
          </Tooltip>
        </div>
      </div>
    </VBox>
  );
}

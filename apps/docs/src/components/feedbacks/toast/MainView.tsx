import React from "react";
import { VBox, Toast, RoundButton, IconWrapper } from "@react-elf/ui";
import { MdInfoOutline } from "react-icons/md";

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "10px 10px",
        position: "relative",
        height: 400,
        justifyContent: "end",
        alignItems: "end",
      }}
    >
      <div
        style={{
          flex: "none",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            height: 200,
            position: "relative",
            width: "100%",
            backgroundColor: "white",
          }}
        >
          <Toast
            direction="bottom-right"
            icon={
              <IconWrapper>
                <MdInfoOutline />
              </IconWrapper>
            }
            style={{
              position: "absolute",
            }}
            tools={
              <RoundButton
                outline
                variant="white"
                thin
                onClick={() => console.log("action")}
              >
                Action
              </RoundButton>
            }
            closable
          >
            Hello World yellow 234
          </Toast>
        </div>
      </div>
    </VBox>
  );
}

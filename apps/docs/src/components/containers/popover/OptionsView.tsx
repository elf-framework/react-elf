import React from "react";
import { Button, Menu, Popover, VBox } from "@react-elf/ui";
import { MdSettings } from "react-icons/md";

export function OptionsView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "20px 40px",
        height: 280,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 30,
          flexDirection: "column",
        }}
      >
        <div style={{ position: "relative" }}>
          <Popover
            body={
              <Menu
                type="dropdown"
                relative
                items={[
                  { type: "item", title: "Document Setup" },
                  { type: "item", title: "Settings" },
                  { type: "item", title: "Copy" },
                  {
                    type: "section",
                    title: "Group",
                  },
                  {
                    type: "item",
                    title: "Languages",
                  },
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
            <Button selected={true} style={{ display: "none" }}>
              <MdSettings /> Settings
            </Button>
          </Popover>
          <div
            style={{
              position: "absolute",
              width: 200,
              height: 10,
              top: 10,
              backgroundColor: "#e9cdef",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              width: 10,
              height: 225,
              top: 30,
              left: 210,
              backgroundColor: "#e9cdef",
            }}
          ></div>
        </div>
      </div>
    </VBox>
  );
}

import React from "react";
import { Button, Flex, Menu, Popover, VBox } from "@react-elf/ui";
import { MdEdit, MdSettings } from "react-icons/md";

export function MainView() {
  return (
    <Flex
      justifyContent="space-around"
      style={{
        backgroundColor: "var(--color-gray-2)",
        marginBottom: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          alignItems: "start",
          gap: 10,
          padding: 50,
          height: 300,
          overflow: "hidden",
          flex: " 1 1 auto",
        }}
      >
        <div>
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
            showTip
            placement="bottom-left"
          >
            <Button>
              <MdSettings /> Settings
            </Button>
          </Popover>
        </div>
      </div>
      <Flex
        justifyContent="flex-start"
        alignItems="center"
        style={{
          flex: " 1 1 auto",
        }}
      >
        <div>
          <Popover
            body={
              <Menu
                type="dropdown"
                relative
                items={[
                  {
                    type: "item",
                    title: "Document Setup",
                    selected: true,
                    selectable: true,
                  },
                  { type: "item", title: "Document Setup" },
                ]}
              />
            }
            show
            animated
            showTip
            placement="top"
          >
            <Button>
              <MdEdit /> Edit
            </Button>
          </Popover>
        </div>
      </Flex>
    </Flex>
  );
}

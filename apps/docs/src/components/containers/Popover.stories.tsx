import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, Menu, Popover } from "@react-elf/ui";
import { MdSettings } from "react-icons/md";

const meta = {
  component: Popover,
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Preview Popover Story
 */
export const Default: Story = {
  render: (args) => {
    return (
      <div
        style={{
          height: 240,
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
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
          show
          showTip
          placement="bottom-left"
        >
          <Button>
            <MdSettings /> Settings
          </Button>
        </Popover>
      </div>
    );
  },
};

export const WidthHeight: Story = {
  render: (args) => {
    return (
      <div
        style={{
          height: 240,
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
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
                width: 300,
                boxShadow: "none",
              }}
            />
          }
          show
          placement="bottom-left"
        >
          <Button>
            <MdSettings /> Settings
          </Button>
        </Popover>
      </div>
    );
  },
};

export const Placement: Story = {
  render: (args) => {
    return (
      <div
        style={{
          height: 240,
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
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
                width: 300,
                boxShadow: "none",
              }}
            />
          }
          show
          placement="top-left"
        >
          <Button>
            <MdSettings /> Settings
          </Button>
        </Popover>
      </div>
    );
  },
};

export const ShowTip: Story = {
  render: (args) => {
    return (
      <div
        style={{
          height: 240,
          display: "flex",
          alignItems: "end",
          justifyContent: "center",
        }}
      >
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
                width: 300,
                boxShadow: "none",
              }}
            />
          }
          show
          showTip
          placement="top-left"
        >
          <Button>
            <MdSettings /> Settings
          </Button>
        </Popover>
      </div>
    );
  },
};

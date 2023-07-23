import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Menu } from "@react-elf/ui";
import { MdDescription } from "react-icons/md";

const meta = {
  component: Menu,
  tags: ["autodocs"],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
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
        hover: true,
        items: [
          { type: "item", title: "English", selectable: true },
          {
            type: "item",
            title: "German",
            selected: true,
            selectable: true,
          },
          { type: "item", title: "French", selectable: true },
          { type: "item", title: "Spanish", selectable: true },
          { type: "item", title: "Italian", selectable: true },
          "-",
          { type: "item", title: "Portuguese", selectable: true },
          { type: "item", title: "Russian", selectable: true },
          { type: "item", title: "Japanese", selectable: true },
          { type: "item", title: "Chinese", selectable: true },
        ],
      },
    ],
    style: {
      position: "relative",
    },
  },
};

export const PopoverContainer: Story = {
  args: {
    items: [
      { type: "item", title: "Document Setup" },
      { type: "item", title: "Settings" },
      { type: "item", title: "Copy" },
    ],
    style: {
      position: "relative",
    },
  },
};

export const Icon: Story = {
  args: {
    items: [
      { type: "item", title: "Document Setup", icon: <MdDescription /> },
      { type: "item", title: "Settings" },
      { type: "item", title: "Copy" },
    ],
    style: {
      position: "relative",
    },
  },
};

export const Description: Story = {
  args: {
    items: [
      {
        type: "item",
        title: "Quick export",
        description: "Share a low-res snapshot",
      },
      { type: "item", title: "Settings" },
      {
        type: "item",
        title: "Open a copy",
        description: "Open in iPad",
      },
    ],
    style: {
      position: "relative",
    },
  },
};

export const Value: Story = {
  args: {
    items: [
      {
        type: "item",
        title: "Quick export",
        shortcut: "⌘ + Ctrl+E",
        hover: true,
        description: "Share a low-res snapshot",
        items: [{ type: "item", title: "Document Setup" }],
      },
      { type: "item", title: "Settings" },
      {
        type: "item",
        title: "Open a copy",
        description: "Open in iPad",
      },
    ],
    style: {
      position: "relative",
    },
  },
};

export const Disabled: Story = {
  args: {
    items: [
      {
        type: "item",
        title: "Quick export",
        shortcut: "⌘ + Ctrl+E",
        disabled: true,
        description: "Share a low-res snapshot",
        items: [{ type: "item", title: "Document Setup" }],
      },
      { type: "item", title: "Settings" },
      {
        type: "item",
        title: "Open a copy",
        disabled: true,
        description: "Open in iPad",
      },
    ],
    style: {
      position: "relative",
    },
  },
};

export const Section: Story = {
  args: {
    items: [
      {
        type: "section",
        title: "Section 1",
      },
      {
        type: "item",
        title: "Quick export",
        shortcut: "⌘ + Ctrl+E",
        description: "Share a low-res snapshot",
        items: [{ type: "item", title: "Document Setup" }],
      },
      { type: "item", title: "Settings" },
      "-",
      {
        type: "item",
        title: "Open a copy",
        description: "Open in iPad",
      },
    ],
    style: {
      position: "relative",
    },
  },
};

export const Variant: Story = {
  args: {
    variant: "dark",
    items: [
      {
        type: "item",
        title: "Quick export",
        shortcut: "⌘ + Ctrl+E",
        description: "Share a low-res snapshot",
        items: [{ type: "item", title: "Document Setup" }],
      },
      { type: "item", title: "Settings" },
      {
        type: "item",
        title: "Open a copy",
        description: "Open in iPad",
      },
    ],
    style: {
      position: "relative",
    },
  },
};

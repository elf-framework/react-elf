import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Toolbar } from "@react-elf/ui";
import { Md10K, MdContentCopy, MdDelete, MdEdit } from "react-icons/md";

const meta = {
  component: Toolbar,
  tags: ["autodocs"],
} satisfies Meta<typeof Toolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rounded: true,
    variant: "secondary",
    items: [
      {
        items: [
          {
            type: "item",
            icon: <Md10K />,
            title: "Add Card",
          },
        ],
      },
      {
        items: [
          {
            type: "item",
            icon: <MdEdit />,
            title: "Edit",
          },
          {
            type: "item",
            icon: <MdContentCopy />,
            title: "Copy",
          },
          {
            type: "item",
            icon: <MdDelete />,
            title: "Delete",
          },
        ],
      },
    ],
  },
};

export const Emphasis: Story = {
  args: {
    rounded: true,
    variant: "primary",
    items: [
      {
        items: [
          {
            type: "item",
            icon: <Md10K />,
            title: "Add Card",
          },
        ],
      },
      {
        items: [
          {
            type: "item",
            icon: <MdEdit />,
            title: "Edit",
          },
          {
            type: "item",
            icon: <MdContentCopy />,
            title: "Copy",
          },
          {
            type: "item",
            icon: <MdDelete />,
            title: "Delete",
          },
        ],
      },
    ],
  },
};

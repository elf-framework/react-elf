import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { IconWrapper, RoundButton, Toast } from "@react-elf/ui";
import { MdInfoOutline } from "react-icons/md";

const meta = {
  component: Toast,
  tags: ["autodocs"],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Preview Toast Story
 */
export const Default: Story = {
  args: {
    direction: "center",
    icon: (
      <IconWrapper>
        <MdInfoOutline />
      </IconWrapper>
    ),
    children: "Your trial has expired. Please purchase to continue.",
    tools: (
      <RoundButton
        outline
        variant="white"
        thin
        onClick={() => console.log("action")}
      >
        Action
      </RoundButton>
    ),
    closable: true,
  },
};

export const Text: Story = {
  args: {
    direction: "center",
    children: "Your trial has expired. Please purchase to continue.",
  },
};

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Alert, RoundButton } from "@react-elf/ui";

const ContextualHelp = () => {
  return <div></div>;
};

const meta = {
  component: ContextualHelp,
  tags: ["autodocs"],
} satisfies Meta<typeof ContextualHelp>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Preview ContextualHelp Story
 */
export const Default: Story = {
  args: {
    children: "Your trial has expired. Please purchase to continue.",
  },
};

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Alert, RoundButton } from "@react-elf/ui";

const meta = {
  title: "Components/Feed backs/Alert",
  component: Alert,
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Preview Alert Story
 */
export const Default: Story = {
  args: {
    children: "Your trial has expired. Please purchase to continue.",
  },
};

export const Text: Story = {
  args: {
    children: "Your trial has expired. Please purchase to continue.",
    variant: "dark",
    closable: true,
  },
};

export const Variant: Story = {
  args: {
    children: "Your trial has expired. Please purchase to continue.",
    variant: "primary",
    closable: true,
  },
};

export const Actionable: Story = {
  args: {
    children: "Your trial has expired. Please purchase to continue.",
    variant: "primary",
    closable: true,
    actions: (
      <RoundButton variant="dark" outline place="alert">
        open
      </RoundButton>
    ),
  },
};

export const Dismissable: Story = {
  args: {
    children: "Your trial has expired. Please purchase to continue.",
    variant: "dark",
    closable: true,
    dismissable: true,
  },
};

export const TextOverflow: Story = {
  args: {
    closable: true,
    children: (
      <>
        Your trial has expired. Please purchase to continue.
        <div style={{ textAlign: "right", marginTop: 10 }}>
          <RoundButton
            outline
            variant="dark"
            // place="toast"
            thin
            style={{ textColor: "white", borderColor: "white" }}
          >
            Update
          </RoundButton>
        </div>
      </>
    ),
    variant: "dark",
  },
};

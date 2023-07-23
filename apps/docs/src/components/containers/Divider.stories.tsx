import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "@react-elf/ui";

const meta = {
  // title: "Components/Actions/Button",
  component: Divider,
  tags: ["autodocs"],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Preview Divider Story
 */
export const Default: Story = {
  render: (args) => {
    return (
      <div>
        <h1>Profile</h1>
        <Divider />
        <p>Your profile is a place to keep your settings and preferences.</p>
      </div>
    );
  },
};

export const SizeSmall: Story = {
  args: {
    size: "small",
  },
};

export const SizeLarge: Story = {
  args: {
    size: "large",
  },
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: (args) => {
    return (
      <div
        style={{
          height: 100,
        }}
      >
        <Divider orientation="vertical" />
      </div>
    );
  },
};

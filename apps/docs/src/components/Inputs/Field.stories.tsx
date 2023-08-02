import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Field, InputEditor } from "@react-elf/ui";

const meta = {
  title: "Components/Inputs/Field",
  component: Field,
  tags: ["autodocs"],
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Preview RadioGroup Story
 */
export const Default: Story = {
  args: {
    label: "Email address",
    children: <InputEditor defaultValue="sample text" />,
  },
};

export const Label: Story = {
  args: {
    label: "Email address",
    children: <InputEditor defaultValue="sample text" />,
  },
};

export const LabelPosition: Story = {
  args: {
    label: "Email address",
    position: "horizontal",
    style: {
      width: 300,
    },
    children: <InputEditor defaultValue="sample text" />,
  },
};

export const Size: Story = {
  args: {
    label: "Email address",
    size: "extra-large",
    children: <InputEditor size="extra-large" defaultValue="sample text" />,
  },
};

export const Disabled: Story = {
  args: {
    label: "Email address",
    disabled: true,
    children: <InputEditor disabled defaultValue="sample text" />,
  },
};

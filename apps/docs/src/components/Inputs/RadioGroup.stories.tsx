import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Radio, RadioGroup } from "@react-elf/ui";

const meta = {
  title: "Components/Inputs/Radio Group",
  component: RadioGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Preview RadioGroup Story
 */
export const Default: Story = {
  args: {
    children: (
      <>
        <Radio value={10}>Option 10</Radio>
        <Radio value={20}>Option 20</Radio>
        <Radio value={30}>Option 30</Radio>
      </>
    ),
  },
};

export const SizeLarge: Story = {
  args: {
    size: "large",
    children: (
      <>
        <Radio value={10}>Option 10</Radio>
        <Radio value={20}>Option 20</Radio>
        <Radio value={30}>Option 30</Radio>
      </>
    ),
  },
};

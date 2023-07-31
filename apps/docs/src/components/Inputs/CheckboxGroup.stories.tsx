import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxGroup } from "@react-elf/ui";

const meta = {
  title: "Components/Inputs/Checkbox Group",
  component: CheckboxGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Preview CheckboxGroup Story
 */
export const Default: Story = {
  args: {
    values: ["1", "2"],
    children: (
      <>
        <Checkbox value="1">Checkbox 1</Checkbox>
        <Checkbox value="2">Checkbox 2</Checkbox>
        <Checkbox value="3">Checkbox 3</Checkbox>
      </>
    ),
  },
};

export const Size: Story = {
  args: {
    size: "large",
    values: ["1", "2"],
    children: (
      <>
        <Checkbox value="1">Checkbox 1</Checkbox>
        <Checkbox value="2">Checkbox 2</Checkbox>
        <Checkbox value="3">Checkbox 3</Checkbox>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    values: ["1", "2"],
    children: (
      <>
        <Checkbox value="1">Checkbox 1</Checkbox>
        <Checkbox value="2">Checkbox 2</Checkbox>
        <Checkbox value="3">Checkbox 3</Checkbox>
      </>
    ),
  },
};

export const Error: Story = {
  args: {
    variant: "danger",
    values: ["1", "2"],
    children: (
      <>
        <Checkbox value="1">Checkbox 1</Checkbox>
        <Checkbox value="2">Checkbox 2</Checkbox>
        <Checkbox value="3">Checkbox 3</Checkbox>
      </>
    ),
  },
};

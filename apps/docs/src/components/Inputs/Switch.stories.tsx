import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@react-elf/ui";

const meta = {
  title: "Components/Inputs/Switch",
  component: Switch,
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Preview Switch Story
 */
export const Default: Story = {
  args: {
    defaultChecked: true,
    variant: "primary",
  },
};

export const Label: Story = {
  args: {
    defaultChecked: true,
    variant: "primary",
  },
};

export const Size: Story = {
  args: {
    defaultChecked: true,
    size: "extra-large",
    variant: "primary",
  },
};

export const Disabled: Story = {
  args: {
    defaultChecked: true,
    disabled: true,
    variant: "primary",
  },
};

export const Emphasis: Story = {
  args: {
    defaultChecked: true,
    variant: "success",
  },
};

export const ReadOnly: Story = {
  args: {
    defaultChecked: true,
    readOnly: true,
    variant: "success",
  },
};

export const WithLabelView: Story = {
  args: {
    size: "small",
    defaultChecked: true,
    withLabel: true,
    variant: "primary",
    labels: ["OFF", "ON"],
  },
};

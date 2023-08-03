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

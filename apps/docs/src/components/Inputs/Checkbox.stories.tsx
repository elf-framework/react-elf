import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@react-elf/ui";

const meta = {
  title: "Components/Inputs/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Preview Checkbox Story
 */
export const Default: Story = {
  args: {
    children: "Checkbox",
  },
};

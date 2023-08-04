import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "@react-elf/ui";

const meta = {
  title: "Components/Inputs/Slider",
  component: Slider,
  tags: ["autodocs"],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Preview Switch Story
 */
export const Default: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 50,
    variant: "primary",
  },
};

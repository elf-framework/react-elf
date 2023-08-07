import type { Meta, StoryObj } from "@storybook/react";
import { ProgressCircle } from "@react-elf/ui";

const meta = {
  title: "Components/Status/Progress Circle",
  component: ProgressCircle,
  tags: ["autodocs"],
} satisfies Meta<typeof ProgressCircle>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Preview ProgressCircle Story
 */
export const Default: Story = {
  args: {
    min: 0,
    max: 1,
    value: 0.5,
    size: "large",
    variant: "primary",
  },
};

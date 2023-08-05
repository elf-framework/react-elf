import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "@react-elf/ui";

const meta = {
  title: "Components/Status/Progress Bar",
  component: ProgressBar,
  tags: ["autodocs"],
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Preview ProgressBar Story
 */
export const Default: Story = {
  args: {
    value: 50,
    variant: "primary",
  },
};

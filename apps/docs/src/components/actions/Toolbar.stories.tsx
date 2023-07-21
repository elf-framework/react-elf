import type { Meta, StoryObj } from "@storybook/react";
import { Toolbar } from "@react-elf/ui";

const meta = {
  component: Toolbar,
  tags: ["autodocs"],
} satisfies Meta<typeof Toolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "extra-large",
    variant: "primary",
    shape: "round",
    children: "Getting Started",
  },
};

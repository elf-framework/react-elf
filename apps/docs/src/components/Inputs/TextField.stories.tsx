import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "@react-elf/ui";

const meta = {
  title: "Components/Inputs/TextField",
  component: TextField,
  tags: ["autodocs"],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Preview TextField Story
 */
export const Default: Story = {
  args: {
    label: "Email address",
    value: "sample text",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "@react-elf/ui";

const meta = {
  title: "Components/Inputs/TextArea",
  component: TextArea,
  tags: ["autodocs"],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Preview TextArea Story
 */
export const Default: Story = {
  args: {
    label: "Email address",
    value: "sample text",
  },
};

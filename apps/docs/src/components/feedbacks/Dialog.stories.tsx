import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Dialog, RoundButton } from "@react-elf/ui";

const meta = {
  component: Dialog,
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Preview Dialog Story
 */
export const Default: Story = {
  args: {
    visible: true,
    style: {
      width: 400,
      // height: 200,
    },
    noBorder: true,
    title: "Dialog",
    children: (
      <div>
        The following typefaces are not available. Please either install these
        on your computer or in Figma. Alternatively you can replace them with
        other fonts.
      </div>
    ),
  },
};

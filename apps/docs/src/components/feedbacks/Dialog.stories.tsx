import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Dialog, Ghost, RoundButton } from "@react-elf/ui";

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

export const Title: Story = {
  args: {
    visible: true,
    style: {
      width: 300,
      // height: 200,
    },
    closable: false,
    title: "Dialog",
    footer: <span />,
    children: (
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <Ghost style={{ width: "100%" }} />
        <Ghost style={{ width: "90%" }} />
      </div>
    ),
  },
};

export const Description: Story = {
  args: {
    visible: true,
    noBorder: true,
    style: {
      width: 300,
      // height: 200,
    },
    closable: false,
    title: <Ghost style={{ width: "100%" }} />,
    footer: <span />,
    children: (
      <>
        The following typefaces are not available. Please either install these
        on your computer or in Figma. Alternatively you can replace them with
        other fonts.
      </>
    ),
  },
};

export const Variant: Story = {
  args: {
    visible: true,
    noBorder: true,
    style: {
      width: 300,
      // height: 200,
    },
    closable: false,
    okProps: {
      variant: "dark",
    },
    title: <Ghost style={{ width: "100%" }} />,
    children: "Smart filters are nondestructive",
  },
};

export const Closable: Story = {
  args: {
    visible: true,
    style: {
      width: 300,
      // height: 200,
    },
    title: "Title",
    children: "Smart filters are nondestructive",
  },
};

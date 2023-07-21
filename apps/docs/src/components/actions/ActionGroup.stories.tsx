import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ActionGroup, Button, Tooltip } from "@react-elf/ui";
import { FaBeer, FaCopy, FaEdit, FaMortarPestle } from "react-icons/fa";
import { MdContentCopy, MdEdit, MdMore } from "react-icons/md";

const meta = {
  // title: "Components/Actions/Button",
  component: ActionGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof ActionGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Preview Button Story
 */
export const Default: Story = {
  args: {
    children: (
      <>
        <Button>
          <FaEdit />
          Edit
        </Button>
        <Button>
          <FaCopy />
          Copy
        </Button>
        <Button iconOnly>
          <FaMortarPestle />
        </Button>
        <Button quiet>
          <FaEdit />
          Edit
        </Button>
      </>
    ),
  },
};

export const Horizontal: Story = {
  args: {
    children: (
      <>
        <Button>
          <FaEdit />
          Edit
        </Button>
        <Button>
          <FaCopy />
          Copy
        </Button>
        <Button iconOnly>
          <FaMortarPestle />
        </Button>
        <Button quiet>
          <FaEdit />
          Edit
        </Button>
      </>
    ),
  },
};

export const HorizontalQuiet: Story = {
  args: {
    children: (
      <>
        <Button quiet>
          <MdEdit />
          Edit
        </Button>
        <Button quiet>
          <MdContentCopy />
          Copy
        </Button>
        <Button iconOnly quiet>
          <MdMore />
        </Button>
        <Button quiet>
          <MdEdit />
          Edit
        </Button>
      </>
    ),
  },
};

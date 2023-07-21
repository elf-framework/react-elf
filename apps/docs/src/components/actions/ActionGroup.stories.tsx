import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ActionGroup, Button } from "@react-elf/ui";
import { MdContentCopy, MdEdit, MdMore, MdPadding } from "react-icons/md";

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
          <MdEdit />
          Edit
        </Button>
        <Button>
          <MdContentCopy />
          Copy
        </Button>
        <Button iconOnly>
          <MdPadding />
        </Button>
        <Button quiet>
          <MdEdit />
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
          <MdEdit />
          Edit
        </Button>
        <Button>
          <MdContentCopy />
          Copy
        </Button>
        <Button iconOnly>
          <MdPadding />
        </Button>
        <Button quiet>
          <MdEdit />
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

export const Vertical: Story = {
  args: {
    direction: "vertical",
    children: (
      <>
        <Button>
          <MdEdit />
          Edit
        </Button>
        <Button>
          <MdContentCopy />
          Copy
        </Button>
        <Button iconOnly>
          <MdPadding />
        </Button>
        <Button quiet>
          <MdEdit />
          Edit
        </Button>
      </>
    ),
  },
};

export const VerticalQuiet: Story = {
  args: {
    direction: "vertical",
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

export const SizeDefault: Story = {
  args: {
    children: (
      <>
        <Button>
          <MdEdit />
          Edit
        </Button>
        <Button>
          <MdContentCopy />
          Copy
        </Button>
        <Button iconOnly>
          <MdPadding />
        </Button>
        <Button>
          <MdEdit />
          Edit
        </Button>
      </>
    ),
  },
};

export const SizeSmall: Story = {
  args: {
    children: (
      <>
        <Button size="small">
          <MdEdit />
          Edit
        </Button>
        <Button size="small">
          <MdContentCopy />
          Copy
        </Button>
        <Button iconOnly size="small">
          <MdPadding />
        </Button>
        <Button size="small">
          <MdEdit />
          Edit
        </Button>
      </>
    ),
  },
};

export const SizeLarge: Story = {
  args: {
    children: (
      <>
        <Button size="large">
          <MdEdit />
          Edit
        </Button>
        <Button size="large">
          <MdContentCopy />
          Copy
        </Button>
        <Button iconOnly size="large">
          <MdPadding />
        </Button>
        <Button size="large">
          <MdEdit />
          Edit
        </Button>
      </>
    ),
  },
};

export const SizeExtraLarge: Story = {
  args: {
    children: (
      <>
        <Button size="extra-large">
          <MdEdit />
          Edit
        </Button>
        <Button size="extra-large">
          <MdContentCopy />
          Copy
        </Button>
        <Button iconOnly size="extra-large">
          <MdPadding />
        </Button>
        <Button size="extra-large">
          <MdEdit />
          Edit
        </Button>
      </>
    ),
  },
};

export const Compact: Story = {
  args: {
    compact: true,
    children: (
      <>
        <Button>
          <MdEdit />
          Edit
        </Button>
        <Button>
          <MdContentCopy />
          Copy
        </Button>
        <Button iconOnly>
          <MdPadding />
        </Button>
        <Button>
          <MdEdit />
          Edit
        </Button>
      </>
    ),
  },
};

export const Justified: Story = {
  args: {
    justified: true,
    children: (
      <>
        <Button>
          <MdEdit />
          Edit
        </Button>
        <Button>
          <MdContentCopy />
          Copy
        </Button>
        <Button iconOnly>
          <MdPadding />
        </Button>
        <Button>
          <MdEdit />
          Edit
        </Button>
      </>
    ),
  },
};

export const JustifiedCompact: Story = {
  args: {
    justified: true,
    compact: true,
    children: (
      <>
        <Button>
          <MdEdit />
          Edit
        </Button>
        <Button>
          <MdContentCopy />
          Copy
        </Button>
        <Button iconOnly>
          <MdPadding />
        </Button>
        <Button>
          <MdEdit />
          Edit
        </Button>
      </>
    ),
  },
};

export const Quiet: Story = {
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
          <MdPadding />
        </Button>
        <Button quiet>
          <MdEdit />
          Edit
        </Button>
      </>
    ),
  },
};

export const Selection: Story = {
  args: {
    compact: true,
    children: (
      <>
        <Button selected>
          <MdEdit />
          Edit
        </Button>
        <Button>
          <MdContentCopy />
          Copy
        </Button>
        <Button iconOnly>
          <MdPadding />
        </Button>
        <Button>
          <MdEdit />
          Edit
        </Button>
      </>
    ),
  },
};

export const MultiSelection: Story = {
  args: {
    children: (
      <>
        <Button selected>
          <MdEdit />
          Edit
        </Button>
        <Button selected>
          <MdContentCopy />
          Copy
        </Button>
        <Button iconOnly>
          <MdPadding />
        </Button>
        <Button>
          <MdEdit />
          Edit
        </Button>
      </>
    ),
  },
};

export const Collapsed: Story = {
  args: {
    collapsed: true,
    children: (
      <>
        <Button>
          <MdEdit />
          Edit
        </Button>
        <Button>
          <MdContentCopy />
          Copy
        </Button>
        <Button iconOnly>
          <MdPadding />
        </Button>
        <Button>
          <MdEdit />
          Edit
        </Button>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    children: (
      <>
        <Button disabled>
          <MdEdit />
          Edit
        </Button>
        <Button disabled>
          <MdContentCopy />
          Copy
        </Button>
        <Button iconOnly disabled>
          <MdPadding />
        </Button>
        <Button disabled>
          <MdEdit />
          Edit
        </Button>
      </>
    ),
  },
};

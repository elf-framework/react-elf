import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ActionGroup, Button, IconWrapper } from "@react-elf/ui";
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
    shape: "round",
    children: (
      <>
        <Button>
          <IconWrapper>
            <MdEdit />
          </IconWrapper>
          Edit
        </Button>
        <Button>
          <IconWrapper>
            <MdContentCopy />
          </IconWrapper>
          Copy
        </Button>
        <Button iconOnly>
          <IconWrapper>
            <MdPadding />
          </IconWrapper>
        </Button>
        <Button quiet>
          <IconWrapper>
            <MdEdit />
          </IconWrapper>
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
    shape: "round",
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
    size: "medium",
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
    size: "small",
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

export const SizeLarge: Story = {
  args: {
    size: "large",
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

export const SizeExtraLarge: Story = {
  args: {
    size: "extra-large",
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
    quiet: true,
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
    value: [1],
    children: (
      <>
        <Button value={1}>
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
    compact: true,
    value: [1, 2],
    children: (
      <>
        <Button value={1}>
          <MdEdit />
          Edit
        </Button>
        <Button value={2}>
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
    disabled: true,
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

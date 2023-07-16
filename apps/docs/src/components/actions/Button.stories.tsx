import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, Tooltip } from "@react-elf/ui";
import { FaBeer } from "react-icons/fa";

const meta = {
  // title: "Components/Actions/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Preview Button Story
 */
export const ExtraLargePrimary: Story = {
  args: {
    size: "extra-large",
    variant: "primary",
    shape: "round",
    children: "Getting Started",
  },
};

export const WithLabelAndIcon: Story = {
  args: {
    shape: "round",
    variant: "primary",
    children: (
      <>
        <FaBeer />
        Getting Started
      </>
    ),
  },
};

export const WithoutIcon: Story = {
  args: {
    shape: "round",
    variant: "primary",
    children: "Getting Started",
  },
};

export const WithIconAndLabelHidden: Story = {
  args: {
    shape: "round",
    variant: "primary",
    iconOnly: true,
    children: <FaBeer />,
  },
};

export const Default: Story = {
  args: {
    variant: "default",
    children: "Action",
    shape: "round",
  },
};

export const DefaultOutline: Story = {
  args: {
    variant: "default",
    children: "Action",
    shape: "round",
    outline: true,
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Action",
    shape: "round",
  },
};

export const PrimaryOutline: Story = {
  args: {
    variant: "primary",
    children: "Action",
    outline: true,
    shape: "round",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Action",
    shape: "round",
  },
};

export const SecondaryOutline: Story = {
  args: {
    variant: "secondary",
    children: "Action",
    outline: true,
    shape: "round",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Action",
    shape: "round",
  },
};

export const DangerOutline: Story = {
  args: {
    variant: "danger",
    children: "Action",
    outline: true,
    shape: "round",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Action",
    shape: "round",
  },
};

export const WarningOutline: Story = {
  args: {
    variant: "warning",
    children: "Action",
    outline: true,
    shape: "round",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    children: "Action",
    shape: "round",
  },
};

export const InfoOutline: Story = {
  args: {
    variant: "info",
    children: "Action",
    outline: true,
    shape: "round",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Action",
    shape: "round",
  },
};

export const SuccessOutline: Story = {
  args: {
    variant: "success",
    children: "Action",
    outline: true,
    shape: "round",
  },
};

export const Dark: Story = {
  args: {
    variant: "dark",
    children: "Action",
    shape: "round",
  },
};

export const DarkOutline: Story = {
  args: {
    variant: "dark",
    children: "Action",
    outline: true,
    shape: "round",
  },
};

export const ExtraSmall: Story = {
  args: {
    size: "extra-small",
    children: "Button",
    shape: "round",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Button",
    shape: "round",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Button",
    shape: "round",
  },
};

export const ExtraLarge: Story = {
  args: {
    size: "extra-large",
    children: "Button",
    shape: "round",
  },
};

export const Justified: Story = {
  args: {
    children: "Button",
    shape: "round",
    justified: true,
    variant: "primary",
  },
};

export const JustifiedWithIcon: Story = {
  args: {
    children: (
      <>
        <FaBeer />
        Button
      </>
    ),
    shape: "round",
    justified: true,
    variant: "primary",
  },
};

/**
 * Pending Button Story
 *
 * TODO: Add play button
 */
export const PendingSmall: Story = {
  args: {
    children: "Button",
    shape: "round",
    pending: true,
    play: true,
    size: "small",
  },
};

export const PendingDefault: Story = {
  args: {
    children: "Button",
    shape: "round",
    pending: true,
    play: true,
    size: "default",
  },
};

export const PendingLarge: Story = {
  args: {
    children: "Button",
    shape: "round",
    pending: true,
    play: true,
    size: "large",
  },
};

export const PendingExtraLarge: Story = {
  args: {
    children: "Button",
    shape: "round",
    pending: true,
    play: true,
    size: "extra-large",
  },
};

// Disabled Button Story
export const DisabledFill: Story = {
  args: {
    children: "Button",
    shape: "round",
    disabled: true,
  },
};

export const DisabledOutline: Story = {
  args: {
    children: "Button",
    shape: "round",
    disabled: true,
    outline: true,
  },
};

export const DisabledPreview: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: 30,
      }}
    >
      <Button shape="round" disabled>
        Button
      </Button>
      <Button shape="round" disabled outline>
        Button
      </Button>
    </div>
  ),
};

// Focus Button Story

export const Focus: Story = {
  args: {
    children: "Button",
    shape: "round",
    variant: "primary",
    focused: true,
  },
};

export const FocusPreview: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: 30,
      }}
    >
      <Button shape="round" focused variant="primary">
        Button
      </Button>
    </div>
  ),
};

// Tooltip Button Story

export const TooltipPreview: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: 30,
      }}
    >
      <Tooltip message={"Share"} show placement="top" variant="dark">
        <Button shape="round" variant="primary" iconOnly>
          <FaBeer />
        </Button>
      </Tooltip>
    </div>
  ),
};

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, FixedTooltip, IconWrapper, Tooltip } from "@react-elf/ui";
import { MdInfoOutline } from "react-icons/md";

const meta = {
  title: "Components/Feed backs/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Preview Tooltip Story
 */
export const Default: Story = {
  args: {
    placement: "top",
    message: "text message",
    show: true,
    children: <Button>Tooltip: top</Button>,
  },
  render: (args) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: 150,
        }}
      >
        <Tooltip {...args} />
      </div>
    );
  },
};

export const Label: Story = {
  args: {
    placement: "top",
    message: "text message",
    show: true,
  },
  render: (args) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingLeft: 50,
          height: 150,
        }}
      >
        <Tooltip {...args} />
      </div>
    );
  },
};

export const Variant: Story = {
  args: {
    placement: "top",
    message: "text message",
    show: true,
    variant: "primary",
  },
  render: (args) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingLeft: 50,
          height: 150,
        }}
      >
        <Tooltip {...args} />
      </div>
    );
  },
};

export const Icon: Story = {
  args: {
    placement: "top",
    message: "text message",
    show: true,
    variant: "primary",
    icon: (
      <IconWrapper>
        <MdInfoOutline />
      </IconWrapper>
    ),
  },
  render: (args) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingLeft: 50,
          height: 150,
        }}
      >
        <Tooltip {...args} />
      </div>
    );
  },
};

export const MaxWidth: Story = {
  args: {
    placement: "right",
    message: (
      <div style={{ whiteSpace: "pre-wrap" }}>
        Your admin must grant you permission to create segments
      </div>
    ),
    show: true,
    variant: "primary",
    icon: (
      <IconWrapper>
        <MdInfoOutline />
      </IconWrapper>
    ),
    style: {
      maxWidth: 200,
    },
  },
  render: (args) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingLeft: 50,
          width: "100%",
          height: 150,
        }}
      >
        <Tooltip {...args} />
      </div>
    );
  },
};

export const Placement: Story = {
  args: {
    placement: "right",
    message: (
      <div style={{ whiteSpace: "pre-wrap" }}>
        Your admin must grant you permission to create segments
      </div>
    ),
    show: true,
    variant: "primary",
    icon: (
      <IconWrapper>
        <MdInfoOutline />
      </IconWrapper>
    ),
    style: {
      maxWidth: 200,
    },
  },
  render: (args) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingLeft: 50,
          width: "100%",
          height: 150,
        }}
      >
        <Tooltip {...args} />
      </div>
    );
  },
};

export const FixedTooltipDefault: Story = {
  args: {
    placement: "top",
    message: (
      <div style={{ width: 200, whiteSpace: "pre-wrap" }}>
        Your admin must grant you permission to create segments
      </div>
    ),
    show: true,
    variant: "primary",
    icon: (
      <IconWrapper>
        <MdInfoOutline />
      </IconWrapper>
    ),
    children: <Button>Tooltip: top</Button>,
  },
  render: (args) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingLeft: 50,
          width: "100%",
          height: 150,
        }}
      >
        <FixedTooltip {...args} />
      </div>
    );
  },
};

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { IconWrapper, RoundButton, Toast } from "@react-elf/ui";
import { MdInfoOutline } from "react-icons/md";

const meta = {
  component: Toast,
  tags: ["autodocs"],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Preview Toast Story
 */
export const Default: Story = {
  args: {
    direction: "center",
    icon: (
      <IconWrapper>
        <MdInfoOutline />
      </IconWrapper>
    ),
    children: "Your trial has expired. Please purchase to continue.",
    tools: (
      <RoundButton
        outline
        variant="white"
        thin
        onClick={() => console.log("action")}
      >
        Action
      </RoundButton>
    ),
    closable: true,
  },
};

export const Text: Story = {
  args: {
    direction: "center",
    children: "Your trial has expired. Please purchase to continue.",
  },
};

export const Icon: Story = {
  args: {
    icon: (
      <IconWrapper
        style={{
          fontSize: 20,
        }}
      >
        <MdInfoOutline />
      </IconWrapper>
    ),
    direction: "center",
    children: "Your trial has expired. Please purchase to continue.",
  },
};

export const Closable: Story = {
  args: {
    closable: true,
    icon: (
      <IconWrapper
        style={{
          fontSize: 20,
        }}
      >
        <MdInfoOutline />
      </IconWrapper>
    ),
    direction: "center",
    children: "Your trial has expired. Please purchase to continue.",
  },
};

export const Variant: Story = {
  args: {
    closable: true,
    variant: "primary",
    icon: (
      <IconWrapper
        style={{
          fontSize: 20,
        }}
      >
        <MdInfoOutline />
      </IconWrapper>
    ),
    direction: "center",
    children: "Your trial has expired. Please purchase to continue.",
  },
};

export const Tools: Story = {
  args: {
    closable: true,
    tools: (
      <RoundButton
        outline
        variant="white"
        thin
        onClick={() => console.log("action")}
      >
        Action
      </RoundButton>
    ),
    icon: (
      <IconWrapper
        style={{
          fontSize: 20,
        }}
      >
        <MdInfoOutline />
      </IconWrapper>
    ),
    direction: "center",
    children: "Your trial has expired. Please purchase to continue.",
  },
};

export const Placement: Story = {
  render: () => (
    <div
      style={{
        position: "relative",
        height: 500,
      }}
    >
      <Toast
        direction="left"
        style={{
          position: "absolute",
        }}
      >
        Left
      </Toast>
      <Toast
        direction="right"
        style={{
          position: "absolute",
        }}
      >
        Right
      </Toast>
      <Toast
        direction="top"
        style={{
          position: "absolute",
        }}
      >
        Top
      </Toast>
      <Toast
        direction="bottom"
        style={{
          position: "absolute",
        }}
      >
        Bottom
      </Toast>
      <Toast
        direction="top-left"
        style={{
          position: "absolute",
        }}
      >
        Top Left
      </Toast>
      <Toast
        direction="top-right"
        style={{
          position: "absolute",
        }}
      >
        Top Right
      </Toast>
      <Toast
        direction="bottom-left"
        style={{
          position: "absolute",
        }}
      >
        Bottom Left
      </Toast>
      <Toast
        direction="bottom-right"
        style={{
          position: "absolute",
        }}
      >
        Bottom Right
      </Toast>
      <Toast
        direction="center"
        style={{
          position: "absolute",
        }}
      >
        Center
      </Toast>
    </div>
  ),
};

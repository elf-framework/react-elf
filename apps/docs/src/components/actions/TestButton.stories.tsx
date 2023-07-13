import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./TestButton";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Actions/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "info",
        "danger",
        "warning",
        "outline",
        "light",
        "dark",
      ],
      control: {
        type: "select",
      },
    },
    "style.backgroundColor": { control: "color" },
    "style.textColor": { control: "color" },
  },
  args: {
    variant: "default",
  },
  parameters: {
    componentSubtitle:
      "Buttons should always have a label, unless they are only using an icon that is universally understood and accessible. ",
    docs: {
      description: {
        component: `
They can have an optional icon, but it should not be used for decoration. Use an icon only when necessary and when it has a strong association with the label text. 
        `,
      },
    },
    actions: {
      argTypesRegex: "^on.*",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    variant: "default",
    children: "Default Button",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Sample Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Button",
  },
};

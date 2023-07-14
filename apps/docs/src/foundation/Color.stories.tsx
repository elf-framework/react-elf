import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Alert } from "@react-elf/ui";

function ColorView() {
  return <div>c</div>;
}
const meta = {
  title: "Foundation/Base Style/Color",
  component: ColorView,
  tags: ["autodocs"],
  argTypes: {
    title: {
      name: "title",
      description: "The title of the alert.",
      type: { name: "string", required: true },
      control: {
        type: "text",
      },
    },
    variant: {
      name: "variant",
      description: "The variant to use.",
      type: { name: "string", required: false },
      defaultValue: "default",
      options: [
        "default",
        "primary",
        "secondary",
        "dark",
        "success",
        "info",
        "warning",
        "danger",
      ],
      control: {
        type: "select",
      },
    },
  },
  args: {
    title: "Alert Sample Content",
  },
  parameters: {
    componentSubtitle:
      "Buttons should always have a label, unless they are only using an icon that is universally understood and accessible. ",
    docs: {
      description: {
        component: `
They can have an optional icon, but it should not be used for decoration. Use an icon only when necessary and when it has a strong association with the label text.

The label can be hidden to create an icon-only button. If the label is hidden, an icon is required, and the label will appear in a tooltip.
        `,
      },
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary",
    title: "Alert",
    children: "Alert Content",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    title: "Alert",
    children: "Alert Content",
  },
};

import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { Button } from "@react-elf/ui";
import { Tooltip } from "@react-elf/ui";
import "@elf-framework/design-system/style.css";
import { FaBeer } from "react-icons/fa";

export default {
  component: Tooltip,
  title: "Components/Status/Tooltip",
  argTypes: {
    children: {
      name: "children",
      description: "The content(or label) of the button.",
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
    placement: {
      name: "placement",
      description: "The placement of the tooltip.",
      type: { name: "string", required: false },
      defaultValue: "bottom",
      options: [
        "top",
        "right",
        "bottom",
        "left",
        "top-left",
        "top-right",
        "bottom-left",
        "bottom-right",
      ],
      control: {
        type: "select",
      },
    },
  },
  args: {
    children: "Tooltip Sample Content",
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
} as Meta;
export const DefaultTooltip: Story = (args) => {
  const { children, variant, placement } = args;
  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        flexDirection: "column",
        padding: 100,
      }}
    >
      <div style={{ display: "flex", gap: 10 }}>
        <label>Tooltip</label>

        <Tooltip message={"test"} show placement={placement} variant={variant}>
          <Button>
            <FaBeer /> {children}
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};

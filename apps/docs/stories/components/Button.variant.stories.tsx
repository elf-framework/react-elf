import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { Button } from "@react-elf/button";
import "@elf-framework/design-system/style.css";

export default {
  component: Button,
  title: "Components/Button",
  argTypes: {
    children: {
      name: "children",
      description: "The content of the button.",
      type: { name: "string", required: true },
      control: {
        type: "text",
      }     
    },
    variant: {
      name: "variant",
      description: "The variant to use.",
      type: { name: "string", required: false },
      defaultValue: "default",
      options: ["default", "primary", "secondary"],
      control: {
        type: "radio",
      },
    }
  },
  args: {
    children: "Button",
    variant: "default",
  }
} as Meta;

export const Variant: Story = (args) => {
  const { children, variant } = args;
  return <Button variant={variant}>
    {children}
  </Button>;
}
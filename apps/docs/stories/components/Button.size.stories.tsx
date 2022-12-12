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
    size: {
      name: "size",
      description: "The size to use.",
      type: { name: "string", required: false },
      defaultValue: "medium",
      options: ["extra-small", "small", "medium", "large", "extra-large"],
      control: {
        type: "radio",
      },
    }
  },
  args: {
    children: "Button",
    size: "medium",
  },
  parameters: {
    componentSubtitle: "Buttons come in five different sizes: `extra-small`, `small`, `medium`, `large`, and `extra-large`.",
    docs: {
      description: {
        component: `
- The medium size is the default and most frequently used option. 
- Use the other sizes sparingly; they should be used to create a hierarchy of importance within the page.        
        `
      }
    }
  }
} as Meta;

/**
- Buttons come in four different sizes: small, medium, large, and extra-large. 
- The medium size is the default and most frequently used option. 
- Use the other sizes sparingly; they should be used to create a hierarchy of importance within the page.
**/
export const Size: Story = (args) => {
  const { children, size } = args;
  return <Button size={size}>
    {children}
  </Button>;
}
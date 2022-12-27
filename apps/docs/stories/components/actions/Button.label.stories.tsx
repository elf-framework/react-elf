import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { Button } from "@react-elf/button";
import "@elf-framework/design-system/style.css";
import { FaBeer } from 'react-icons/fa';


export default {
  component: Button,
  title: "Components/Actions/Button",
  argTypes: {
    children: {
      name: "children",
      description: "The content(or label) of the button.",
      type: { name: "string", required: true },
      control: {
        type: "text",
      }     
    },
  },
  args: {
    children: "Button",
  },
  parameters: {
    componentSubtitle: "Buttons should always have a label, unless they are only using an icon that is universally understood and accessible. ",
    docs: {
      description: {
        component: `
They can have an optional icon, but it should not be used for decoration. Use an icon only when necessary and when it has a strong association with the label text.

The label can be hidden to create an icon-only button. If the label is hidden, an icon is required, and the label will appear in a tooltip.
        `
      }
    }
  }
} as Meta;
export const LabelIcon: Story = (args) => {
  const { children } = args;
  return <div style={{display: "flex", gap: 10, flexDirection: "column"}}>
    <div style={{display: "flex", gap: 10}}>
      <label>Label and Icon</label>
      <Button>
        <FaBeer /> {children}
      </Button>
    </div>
    <div style={{display: "flex", gap: 10}}>
      <label>Label</label>
      <Button>
        {children}
      </Button>
    </div>
    <div style={{display: "flex", gap: 10}}>
      <label>Icon only</label>
      <Button iconOnly>
        <FaBeer />
      </Button>
    </div>    
  </div>;
}
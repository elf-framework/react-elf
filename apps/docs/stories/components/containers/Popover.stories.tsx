import * as React from "react";
import { Meta, Story } from "@storybook/react";
import "@elf-framework/design-system/style.css";
import { Popover, Divider, Button } from "@react-elf/ui";


export default {
  component: Divider,
  title: "Components/Containers/Popover",
  argTypes: {
    title: {
      name: "title",
      description: "trigger text",
      defaultValue: "ReactNode or text",
      control: {
        type: "text"
      }
    },
    show: {
      name: "show",
      description: "show popover",
      defaultValue: false,
      control: {
        type: "boolean"
      }
    },
    trigger: {
      name: "trigger",
      description: "trigger to open popover",
      defaultValue: 'hover',
      control: {
        type: 'select',
        options: ['hover', 'click']
      }
    }
  },
  args: {
    title: "Popover trigger text",
    show: false,
    trigger: 'hover'
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
export const DefaultPopover: Story = (args) => {
  const { title, show, trigger } = args;
  return <div style={{ padding: 10 }}>
    <Popover body={<div>body</div>} trigger={trigger} show={show}>
      <Button style={{ padding: 10, border: "1px solid #ececec" }}>{title}</Button>
    </Popover>
  </div>;
}
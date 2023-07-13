import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { Menu } from "@react-elf/menu";
import "@elf-framework/design-system/style.css";
import { FaBeer } from 'react-icons/fa';


export default {
  component: Menu,
  title: "Components/Actions/Menu",
  argTypes: {
    type: {
      name: "type",
      description: "type of menu",
      type: { name: "string", required: true },
      control: {
        type: "select",
        options: ["menu", "dropdown", "contextmenu"],
      }
    },
    hover: {
      name: "hover",
      description: "hover",
      type: { name: "boolean", required: false },
      control: {
        type: "boolean",
      }
    },
    compact: {
      name: "compact",
      description: "compact",
      type: { name: "boolean", required: false },
      control: {
        type: "boolean",

      }
    }
  },
  args: {
    type: "menu",
    hover: false,
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
export const DefaultMenu: Story = (args) => {
  const { type, hover, compact } = args;
  return <div style={{ display: "flex", gap: 10, flexDirection: "column" }}>
    <div style={{ display: "flex", gap: 10, padding: 100 }}>
      <Menu
        type={type}
        compact={compact}

        items={[{
          type: "item",
          title: "Item 1",
        }, {
          type: "divider",
          dashed: true,
        },
        { type: "section", title: "Section title" },
        {
          type: "item",
          title: "Item 2",
        }, {
          type: "item",
          title: "Item 3",
          hover: hover,
          items: [{
            type: "item",
            title: "aaaa",
          }]
        }
        ]} />
    </div>

  </div>;
}
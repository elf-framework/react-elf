import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { Alert } from "@react-elf/alert";
import "@elf-framework/design-system/style.css";


export default {
  component: Alert,
  title: "Components/Containers/Grid",
  argTypes: {
    title: {
      name: "title",
      description: "The title of the alert.",
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
      options: ["default", "primary", "secondary", "dark", "success", "info", "warning", "danger"],
      control: {
        type: "select",
      }
    },
  },
  args: {
    title: "Alert Sample Content",
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
export const DefaultAlert: Story = (args) => {
  const { title,variant } = args;
  return <div style={{display: "flex", gap: 10, flexDirection: "column"}}>
    <div style={{display: "flex", gap: 10, flex: "1 1 auto"}}>
      <Alert title={title} variant={variant}>
        하이
      </Alert>
    </div>
  </div>;
}
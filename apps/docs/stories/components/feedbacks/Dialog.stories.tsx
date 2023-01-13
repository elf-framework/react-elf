import * as React from "react";
import { Meta, Story } from "@storybook/react";
import "@elf-framework/design-system/style.css";
import { Dialog } from "@react-elf/ui";
import { useArgs } from '@storybook/client-api';


export default {
  component: Dialog,
  title: "Components/Feed Backs/Dialog",
  argTypes: {
    visible: {
      name: "visible",
      description: "visible state of the dialog",
      control: {
        type: "boolean",
      }
    },
    content: {
      name: "children",
      description: "The content of the dialog",
      control: {
        type: "text",
        multiline: true,
      }
    },
    title: {
      name: "title",
      description: "The title of dialog",
      control: {
        type: "text"
      }
    },
    okText: {
      name: "okText",
      description: "The text of ok button",
      control: {
        type: "text"
      }
    }
  },
  args: {
    visible: true,
    content: "Dialog Content",
    title: "Dialog Title",
    okText: "OK"
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
export const DefaultNotification: Story = (args) => {
  const [{ content, title, okText, visible }, updateArgs] = useArgs();
  const handleClose = () => updateArgs({ visible: !visible });

  return <div >
    {visible ? <Dialog title={title} okText={okText} visible={visible} onClose={handleClose}>{content}</Dialog> : undefined}
  </div >;
}
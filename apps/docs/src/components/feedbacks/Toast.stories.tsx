import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { Toast } from "@react-elf/ui";
import { useArgs } from "@storybook/client-api";

export default {
  component: Toast,
  title: "Components/Feed Backs/Toast",
  argTypes: {
    variant: {
      name: "variant",
      description: "The variant of the toast",
      control: {
        type: "select",
        options: [
          "default",
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "info",
          "light",
          "dark",
        ],
      },
    },

    closable: {
      name: "closable",
      description: "closable state of the dialog",
      control: {
        type: "boolean",
      },
    },
    content: {
      name: "children",
      description: "The content of the dialog",
      control: {
        type: "text",
        multiline: true,
      },
    },
    position: {
      name: "position",
      description: "The position of the toast",
      control: {
        type: "select",
        options: ["static", "fixed", "absolute"],
      },
    },
    direction: {
      name: "direction",
      description: "The direction of the toast",
      control: {
        type: "select",
        options: [
          "left",
          "right",
          "center",
          "top",
          "bottom",
          "top-left",
          "top-right",
          "bottom-left",
          "bottom-right",
        ],
      },
    },
  },
  args: {
    variant: "default",
    closable: true,
    content: "Toast Content",
    position: "absolute",
    direction: "top",
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
export const DefaultToast: Story = (args) => {
  const [{ content, closable, direction, position, variant }, updateArgs] =
    useArgs();

  const handleClose = () => {
    console.log("closed");
  };

  return (
    <div>
      <Toast
        variant={variant}
        closable={closable}
        direction={direction}
        style={{
          position,
        }}
        onClose={handleClose}
      >
        {content}
      </Toast>
    </div>
  );
};

import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { Notification, Button } from "@react-elf/ui";

export default {
  component: Notification,
  title: "Components/Feed Backs/Notification",
  argTypes: {
    content: {
      name: "children",
      description: "The content of the notification",
      control: {
        type: "text",
        multiline: true,
      },
    },
  },
  args: {
    content: "Notification Content",
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
export const DefaultNotification: Story = (args) => {
  const { content } = args;
  return (
    <div>
      <Notification
        tools={[<Button>Dismiss</Button>, <Button>Positive</Button>]}
      >
        {" "}
        {content}
      </Notification>
    </div>
  );
};

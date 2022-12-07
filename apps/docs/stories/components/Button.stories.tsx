import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { Button } from "@react-elf/button";

export default {
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["primary", "secondary", "tertiary"],
      },
    }
  }
} as Meta;

export const Primary: Story = (args) => {
  console.log(args);
  return <Button {...args} />;
}
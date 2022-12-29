import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { Grid } from "@react-elf/layout";
import "@elf-framework/design-system/style.css";


export default {
  component: Grid,
  title: "Components/Containers/Grid",
  argTypes: {
    title: {
      name: "title",
      description: "The title of the Grid item.",
      type: { name: "string" },
      defaultValue: "(empty)",
      control: {
        type: "text",
      }     
    },
    gap: {
      name: "gap",
      description: "The gap between the Grid items.",
      type: { name: "number", defaultValue: 0, required: false },
      defaultValue: "0",
      control: {
        type: "number",
      }
    },
    onClick: { action: 'clicked' }
  },
  args: {
    title: "Grid Item",
    gap: 0,
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
export const DefaultGrid: Story = (args) => {
  const { title, gap } = args;
  return <div >
    <Grid columns={3} gap={gap}>
      <div style={{border: "1px solid #ececec"}}>{title}</div>
      <div style={{border: "1px solid #ececec"}}>{title}</div>
      <div style={{border: "1px solid #ececec"}}>{title}</div>
    </Grid>
    <Grid columns={3} gap={gap}>
      <div style={{border: "1px solid #ececec"}}>{title}</div>
      <div style={{border: "1px solid #ececec"}}>{title}</div>
      <div style={{border: "1px solid #ececec"}}>{title}</div>
    </Grid>
    <Grid columns={3} gap={gap}>
      <div style={{border: "1px solid #ececec"}}>{title}</div>
      <div style={{border: "1px solid #ececec"}}>{title}</div>
      <div style={{border: "1px solid #ececec"}}>{title}</div>
    </Grid>
  </div>;
}
import * as React from "react";
import { Meta, Story } from "@storybook/react";
import "@elf-framework/design-system/style.css";
import { Grid, Divider } from "@react-elf/ui";


export default {
  component: Divider,
  title: "Components/Containers/Divider",
  argTypes: {
  },
  args: {
    title: "Grid Item",
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
export const DefaultDivider: Story = (args) => {
  const { title, gap } = args;
  return <div >
    <Grid columns={3} gap={30} rows={[100]}>
      <div>
        <Divider />
        <Divider style={{
          borderStyle: "dashed",
          borderWidth: 30
        }}/>
      </div>
      <div>
        <Divider />
        <Divider style={{
          borderStyle: "dashed",
          borderWidth: 10
        }}/>        
      </div>
      <div>
        <Divider />
      </div>
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
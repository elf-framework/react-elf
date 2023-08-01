import React from "react";
import {
  Grid,
  HelpText,
  IconWrapper,
  Radio,
  RadioGroup,
  VBox,
} from "@react-elf/ui";
import { MdOutlineWarning } from "react-icons/md";

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [60, 100],
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        height: 300,
      }}
    >
      <Grid columns={2} style={{ gap: 50 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            fontSize: 13,
          }}
        >
          <em style={{ color: "var(--color-gray-5)" }}>Size *</em>
          <RadioGroup
            direction="vertical"
            value={10}
            onChange={(value) => console.log(value)}
          >
            <Radio value={10}>Option 10</Radio>
            <Radio value={20}>Option 20</Radio>
            <Radio value={30}>Option 30</Radio>
          </RadioGroup>
          <HelpText>Select a product size</HelpText>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            fontSize: 13,
          }}
        >
          <em style={{ color: "var(--color-gray-5)" }}>Size *</em>
          <RadioGroup
            direction="vertical"
            variant="dark"
            value={10}
            onChange={(value) => console.log(value)}
          >
            <Radio value={10}>Option 10</Radio>
            <Radio value={20}>Option 20</Radio>
            <Radio value={30}>Option 30</Radio>
          </RadioGroup>
          <HelpText
            variant="danger"
            icon={
              <IconWrapper>
                <MdOutlineWarning />
              </IconWrapper>
            }
          >
            Select a product size
          </HelpText>
        </div>
      </Grid>
    </VBox>
  );
}

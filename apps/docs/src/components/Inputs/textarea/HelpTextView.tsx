import React, { useState } from "react";
import { Grid, HelpText, IconWrapper, TextArea, VBox } from "@react-elf/ui";
import { MdCheck, MdOutlineWarning } from "react-icons/md";

export function HelpTextView() {
  const [invalid, setInvalid] = useState(false);
  const [hasValidIcon, setHasValidIcon] = useState(false);
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "60px 0px",
        fontSize: 13,
        justifyContent: "center",
        alignItems: "center",
        height: 400,
      }}
    >
      <Grid columns={1} style={{ padding: [0, 10] }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 0,
            alignItems: "center",
            gap: 30,
          }}
        >
          <TextArea
            label="Email address"
            placeholder="Enter your password"
            value={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            rows={5}
            help={<HelpText>Password must be at least 8 characters.</HelpText>}
          />

          <TextArea
            label="Email address"
            placeholder="Enter your password"
            value={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            rows={5}
            invalid={invalid}
            validIcon={
              hasValidIcon ? (
                <IconWrapper>
                  <MdCheck />
                </IconWrapper>
              ) : undefined
            }
            invalidIcon={
              <IconWrapper>
                <MdOutlineWarning />
              </IconWrapper>
            }
            invalidMessage={
              <HelpText variant="danger">Invalid email address</HelpText>
            }
            onInput={(e) => {
              setInvalid(e.target.value === "" || e.target.value.length < 10);
              if (e.target.value.length > 15) {
                setHasValidIcon(true);
              }
            }}
          />
        </div>
      </Grid>
    </VBox>
  );
}

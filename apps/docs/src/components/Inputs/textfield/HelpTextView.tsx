import React, { useState } from "react";
import { Grid, HelpText, TextField, VBox } from "@react-elf/ui";
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
        height: 300,
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
          <TextField
            label={"Password"}
            type="password"
            placeholder="Enter your password"
            value="xxx@elf-framework.com"
            style={{
              width: 240,
            }}
            help={
              <HelpText variant="danger" size="small">
                Password must be at least 8 characters.
              </HelpText>
            }
          />

          <TextField
            label={"Email address"}
            value="xxx@elf-framework.com"
            style={{
              width: 240,
            }}
            invalid={invalid}
            validIcon={hasValidIcon ? <MdCheck /> : undefined}
            invalidIcon={<MdOutlineWarning />}
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

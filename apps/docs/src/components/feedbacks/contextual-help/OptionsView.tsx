import React from "react";
import { Button, Grid, IconWrapper, VBox } from "@react-elf/ui";
import { MdEdit, MdInfoOutline, MdOutlineHelpOutline } from "react-icons/md";

export function OptionsView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "40px 40px",
        justifyContent: "center",
      }}
    >
      <Grid
        columns={2}
        gap={30}
        style={{
          maxWidth: 400,
          margin: [0, "auto"],
        }}
      >
        <div>
          <em style={{ marginBottom: 10 }}>Information</em>
          <div>
            <Button>
              <MdEdit /> Edit
            </Button>
            &nbsp;
            <Button iconOnly quiet size="extra-small">
              <IconWrapper>
                <MdInfoOutline />
              </IconWrapper>
            </Button>
          </div>
        </div>
        <div>
          <em style={{ marginBottom: 10 }}>Help</em>
          <div>
            <Button>
              <MdEdit /> Edit
            </Button>
            &nbsp;
            <Button iconOnly quiet size="extra-small">
              <IconWrapper>
                <MdOutlineHelpOutline />
              </IconWrapper>
            </Button>
          </div>
        </div>
      </Grid>
    </VBox>
  );
}

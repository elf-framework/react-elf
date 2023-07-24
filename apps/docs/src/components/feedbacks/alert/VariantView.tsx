import React from "react";
import { Alert, IconWrapper, VBox } from "@react-elf/ui";
import { MdInfoOutline, MdWarning } from "react-icons/md";

export function VariantView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "20px 40px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 30,
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Alert variant="dark" closable>
          Your trial has expired. Please purchase to continue.
        </Alert>
        <Alert
          icon={
            <IconWrapper>
              <MdInfoOutline />
            </IconWrapper>
          }
          variant="primary"
          closable
        >
          Your trial has expired.
        </Alert>
        <Alert
          icon={
            <IconWrapper>
              <MdWarning />
            </IconWrapper>
          }
          variant="danger"
          closable
        >
          Connect interrupted.
        </Alert>
      </div>
    </VBox>
  );
}

import React from "react";
import { Button, RoundButton } from "@react-elf/ui";

export function DownView() {
  return (
    <div
      style={{
        backgroundColor: "var(--color-gray-0)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 150,
        gap: 20,
      }}
    >
      <RoundButton variant="primary" selected>
        Action
      </RoundButton>

      <Button selected>Action</Button>
    </div>
  );
}

import React from "react";

import { ContrastTextView } from "./ContrastTextView";

export function ContrastView({ color }: { color: string }) {
  return (
    <div style={{ position: "relative", height: "100%" }}>
      <div
        style={{
          display: "flex",
          alignItems: "end",
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          gap: 30,
          justifyContent: "space-between",
          padding: 10,
          textAlign: "center",
          transform: "translateY(-50%)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ContrastTextView
            fontSize={16}
            text="A"
            color={color}
            textColor={"rgb(57, 68, 77)"}
          />
          <ContrastTextView
            fontSize={26}
            text="A"
            color={color}
            textColor={"rgb(57, 68, 77)"}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ContrastTextView
            fontSize={16}
            text="A"
            color={color}
            textColor={"white"}
          />
          <ContrastTextView
            fontSize={26}
            text="A"
            color={color}
            textColor={"white"}
          />
        </div>
      </div>
    </div>
  );
}

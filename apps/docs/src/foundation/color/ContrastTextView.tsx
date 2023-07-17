import React from "react";
import { RGB, contrastScoreText } from "@elf-framework/color";

export function ContrastTextView({
  text,
  color,
  textColor,
  fontSize,
}: {
  text: string;
  color: string;
  textColor: string;
  fontSize: number;
}) {
  const pass = contrastScoreText(color as any, textColor as any, fontSize, 20);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: 30,
        flex: "none",
        justifyContent: "flex-end",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <label style={{ fontSize, color: textColor }}>{text}</label>
      </div>
      <div style={{ height: 10, flex: "none" }}>
        <span
          style={{
            backgroundColor: pass === "FAIL" ? "transparent" : "blue",
            color: "white",
            // padding: "5px 5px",
            borderRadius: 4,
            display: "inline-block",
            width: 8,
            height: 8,
            fontSize: 13,
            boxSizing: "border-box",
            border: "2px solid transparent",
            borderColor: pass === "FAIL" ? "transparent" : "white",
            fontWeight: "bold",
            transition: "all 0.2s ease-in-out",
          }}
        ></span>
      </div>
    </div>
  );
}

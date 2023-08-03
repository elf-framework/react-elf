import React from "react";
import { CommonStyle, KeyValue } from "@react-elf-types/shared";

interface IconWrapperProps {
  children: React.ReactNode;
  style?: CommonStyle;
}

export function IconWrapper({ children, style }: IconWrapperProps) {
  return (
    <span
      className="elf--icon"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "none",
        ...(style as KeyValue),
      }}
    >
      {children}
    </span>
  );
}

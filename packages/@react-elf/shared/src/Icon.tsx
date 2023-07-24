import React from "react";
export function IconWrapper({ children }) {
  return (
    <span
      className="elf--icon"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "none",
      }}
    >
      {children}
    </span>
  );
}

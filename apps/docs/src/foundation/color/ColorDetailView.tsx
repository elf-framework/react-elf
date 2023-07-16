import React from "react";
import { RGB, format, parse } from "@elf-framework/color";

import { CopyText } from "./CopyText";

export function ColorDetailView({ color, title, message, description = "" }) {
  const rgb = parse(color);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          flex: "none",
          backgroundColor: color,
          border: "1px solid var(--color-border)",
          height: "100px",
        }}
      >
        &nbsp;
      </div>
      <div style={{ paddingTop: 10 }}>
        <div>
          <strong>{title}</strong>, {message}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 10,
            paddingTop: 10,
          }}
        >
          <div>
            <strong>RGB</strong>
            <div>
              <CopyText text={format(rgb as RGB, "rgb")} />
            </div>
          </div>
          <div>
            <strong>HEX</strong>
            <div>
              <CopyText text={format(rgb as RGB, "hex").toUpperCase()} />
            </div>
          </div>
        </div>
      </div>
      {description}
    </div>
  );
}

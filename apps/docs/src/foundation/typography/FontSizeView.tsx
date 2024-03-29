import React from "react";
import tokens from "@elf-framework/design-tokens/tokens.json";

import { CopyText } from "../color/CopyText";
import "./FontSizeView.scss";

export function FontSizeView() {
  return (
    <div className="font-size-view">
      <table
        style={{
          width: "100%",
        }}
      >
        <thead>
          <tr>
            <th>CSS</th>
            <th>SCSS</th>
            <th>Value</th>
            <th>Sample</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(tokens.font.size).map((key) => {
            return (
              <tr key={key}>
                <td>
                  <CopyText text={`--font-size-${key}`} />
                </td>
                <td>
                  <CopyText text={`$font-size-${key}`} />
                </td>
                <td>
                  <CopyText text={tokens.font.size[key]} />
                </td>
                <td>
                  <span
                    style={{
                      fontSize: `var(--font-size-${key})`,
                      lineHeight: 1.6,
                    }}
                  >
                    I can do it.
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

import React from "react";
import tokens from "@elf-framework/design-tokens/tokens.json";

import { CopyText } from "../color/CopyText";

export function GridColumnListView() {
  return (
    <div className="grid-column-list-view">
      <table
        style={{
          width: "100%",
        }}
      >
        <thead>
          <tr>
            <th>CSS</th>
            <th>CSS Class</th>
            <th>SCSS</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(tokens.column).map((key) => {
            return (
              <tr key={key}>
                <td>
                  <CopyText text={`--column-${key}`} />
                </td>
                <td>
                  <CopyText text={`.column-${key}`} />
                </td>
                <td>
                  <CopyText text={`$column-${key}`} />
                </td>
                <td>
                  <CopyText text={tokens.column[key]} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

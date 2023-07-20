import React from "react";
import tokens from "@elf-framework/design-tokens/tokens.json";

import { CopyText } from "../color/CopyText";

export function GridGapListView() {
  return (
    <div className="grid-gap-list-view">
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
          {Object.keys(tokens.gap).map((key) => {
            return (
              <tr key={key}>
                <td>
                  <CopyText text={`--gap-${key}`} />
                </td>
                <td>
                  <CopyText text={`.gap-${key}`} />
                </td>
                <td>
                  <CopyText text={`$gap-${key}`} />
                </td>
                <td>
                  <CopyText text={tokens.gap[key]} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

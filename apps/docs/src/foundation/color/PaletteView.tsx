import React from "react";
import { format, parse, RGB, RGBtoHSL } from "@elf-framework/color";

import { ucwords } from "../../utils/ucwords";

import { ContrastView } from "./ContrastView";
import "./PaletteView.scss";
import { getThemeTokens } from "../../utils/tokens";
import { CopyText } from "./CopyText";

interface ColorPatternInterface {
  index: string;
  color: string;
}

function convertToKeyValue(obj): ColorPatternInterface[] {
  return Object.entries(obj).map(([index, color]) => {
    return { index, color: color as string };
  });
}

export function PaletteView() {
  const tokens = getThemeTokens();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(1, 1fr)",
        gap: 20,
        padding: 20,
      }}
    >
      {[
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "pink",
        "gray",
        "teal",
      ].map((color) => {
        const colors = tokens.color[color];
        const list = convertToKeyValue(colors);
        return (
          <div key={color}>
            <h2>{ucwords(color)}</h2>
            <div
              style={{
                display: "flex",
                gap: 20,
                marginBottom: 20,
                justifyContent: "space-between",
              }}
            >
              {list.map((it) => {
                return (
                  <div
                    key={it.color}
                    style={{
                      width: 50,
                      height: 50,
                      backgroundColor: it.color,
                    }}
                  ></div>
                );
              })}
            </div>
            <div
              style={{
                display: "grid",
                gap: 10,
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              }}
            >
              {list.map((it) => {
                const selectedColorObject = parse(it.color);
                const hsl = RGBtoHSL(
                  (selectedColorObject as RGB).r,
                  (selectedColorObject as RGB).g,
                  (selectedColorObject as RGB).b
                );

                return (
                  <div
                    key={it.color}
                    style={{
                      overflow: "hidden",
                      border: "1px solid var(--color-border)",
                      borderRadius: 4,
                    }}
                  >
                    <div
                      className="check-contrast"
                      style={{
                        height: 120,
                        backgroundColor: it.color,
                      }}
                    >
                      <ContrastView color={it.color} />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        padding: 10,
                      }}
                    >
                      <div>
                        {ucwords(color)} {ucwords(it.index)}
                      </div>
                      <div>
                        <CopyText text={it.color} />
                      </div>
                      <div>
                        <CopyText
                          text={format(selectedColorObject as RGB, "rgb")}
                        />
                      </div>
                      <div>
                        <CopyText text={format(hsl, "hsl")} />
                      </div>
                      <div>
                        <CopyText text={`--color-${color}-${it.index}`} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

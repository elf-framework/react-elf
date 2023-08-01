import React, { useContext } from "react";
import { format, RGBtoHSL } from "@elf-framework/color";

import { HexColorEditor } from "../input-editor/HexColorEditor";
import { HSLColorEditor } from "../input-editor/HSLColorEditor";
import { RGBColorEditor } from "../input-editor/RGBColorEditor";
import { OptionMenu } from "../option-menu";
import { ColorMixerContext } from "./context";

const COLOR_TYPES = ["hex", "rgb", "hsl"];

export function ColorInput(props) {
  const context = useContext(ColorMixerContext);
  function makeTypedColorInput() {
    const { r, g, b, a, onChange, type } = context;

    const { h, s, l } = RGBtoHSL(r, g, b);

    switch (type) {
      case "hex":
        return (
          <div>
            <HexColorEditor
              autoFocus={true}
              value={format({ r, g, b, a }, "hex")}
              onChange={onChange}
            />
          </div>
        );
      case "rgb":
        return (
          <div>
            <RGBColorEditor
              autoFocus={true}
              value={format({ r, g, b, a }, "rgb")}
              onChange={onChange}
            />
          </div>
        );
      case "hsl":
        return (
          <div>
            <HSLColorEditor
              autoFocus={true}
              value={format({ h, s, l, a }, "hsl")}
              onChange={onChange}
            />
          </div>
        );
    }

    return undefined;
  }

  const input = makeTypedColorInput();

  return (
    <div className="color-input">
      <OptionMenu
        autoPosition={true}
        quiet
        menuStyle={{
          width: 80,
          itemPadding: "10px",
        }}
        items={COLOR_TYPES.map((it) => {
          return {
            title: it.toUpperCase(),
            selectable: true,
            closable: true,
            selected: context.type === it,
            onClick: () => {
              this.setState({
                type: it,
              });
            },
          };
        })}
      >
        {context.type.toUpperCase()}
      </OptionMenu>
      {input}
    </div>
  );
}

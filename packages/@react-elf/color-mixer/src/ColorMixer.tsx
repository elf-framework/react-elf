import React, { useMemo } from "react";
import classNames from "classnames";
import { propertyMap } from "@react-elf/shared";

import { ColorMixerProps } from "@react-elf-types/color-mixer";

// import { ColorInput } from "./ColorInput";
import { EyeDropper } from "./EyeDropper";
import { HueSlide } from "./HueSlide";
import { OpacitySlide } from "./OpacitySlide";
import { useColorState } from "./hooks/useColorState";
import { ColorMixerContext } from "./context";
import { ColorSelectView } from "./ColorSelectView";

const cssProperties = {
  height: "--elf--color-mixer-height",
  width: "--elf--color-mixer-width",
};

export function ColorMixer(props: ColorMixerProps) {
  const {
    width = 240,
    height = width,
    shadow,
    disabled,
    style,
    hideSlide = false,
  } = props;
  const state = useColorState(props);

  const localClass = useMemo(() => {
    return classNames("elf--color-mixer", {
      shadow,
      disabled,
    });
  }, [shadow, disabled]);

  const styleObject = {
    className: localClass,
    style: propertyMap(
      {
        ...style,
        width,
        height,
      },
      cssProperties
    ),
  };

  return (
    <div {...styleObject}>
      <ColorMixerContext.Provider value={state}>
        <ColorSelectView />
        {hideSlide === false ? (
          <div className="elf--color-slide-area">
            {(window as any).EyeDropper ? (
              <EyeDropper onChange={state.updateColor} />
            ) : undefined}
            <div className="slide">
              <HueSlide
                value={state.h / 360}
                onChange={state.updateHueColor}
                disabled={disabled}
              />
              <OpacitySlide
                r={state.r}
                g={state.g}
                b={state.b}
                value={state.a}
                disabled={disabled}
                onChange={state.updateOpacity}
              />
            </div>
          </div>
        ) : undefined}
        {/* {hideInput === false ? (
          <div className="elf--color-input-area">
            <ColorInput
              type={state.type}
              {...{
                h: state.h,
                s: state.s,
                v: state.v,
                r: state.r,
                g: state.g,
                b: state.b,
                a: state.a,
                disabled,
              }}
              onChange={state.updateColor}
            />
          </div>
        ) : undefined} */}
      </ColorMixerContext.Provider>
    </div>
  );
}

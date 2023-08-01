import {
  checkHueColor,
  RGBtoHSV,
  HSVtoRGB,
  format,
  parse,
  RGBA,
  HSVtoHSL,
} from "@elf-framework/color";
import { ColorMixerProps } from "@react-elf-types/color-mixer";
import { useCallback, useRef } from "react";

export interface ColorState {
  type: string;
  r: number;
  g: number;
  b: number;
  a: number;
  h: number;
  s: number;
  v: number;
  color: string;
  hueColor: string;
  getFormattedColor(): string;
  changeColor(): void;
  lastChangeColor(): void;
  openEyeDropper(): void;
  updateOpacity(a: number): void;
  updateHueColor(h: number): void;
  updateColor(color: string): void;
  updateSaturationValue(s, v): void;
}

export function useColorState(props: ColorMixerProps): ColorState {
  const { color = "red" } = props;

  const parsedColor = parse(color) as any;
  const { r, g, b, a } = parsedColor as RGBA;

  const { h, s, v } = RGBtoHSV(r, g, b);

  const type = parsedColor.type;
  const formattedColor = format({ r, g, b }, "rgb");
  const hueColor = checkHueColor(h);

  const colorRef = useRef({
    type,
    color: formattedColor,
    hueColor,
    r,
    g,
    b,
    a,
    h,
    s,
    v,
  });

  const formatedColor = useCallback(() => {
    const { type, r, g, b, a, h, s, v } = colorRef.current as any;
    let color = "";
    switch (type) {
      case "hex":
      case "rgb":
        color = format({ r, g, b, a }, type);
        break;
      case "hsl":
        var { h: hslH, s: hslS, l: hslL } = HSVtoHSL(h, s, v);

        color = format({ h: hslH, s: hslS, l: hslL, a }, type);
        break;
      case "hsv":
        color = format({ h, s, v, a }, type);
        break;
    }

    return color;
  }, [
    colorRef.current.type,
    colorRef.current.r,
    colorRef.current.g,
    colorRef.current.b,
    colorRef.current.h,
    colorRef.current.s,
    colorRef.current.v,
    colorRef.current.a,
  ]);

  const changeColor = useCallback(() => {
    let color = formatedColor();
    if (typeof props.onChange === "function") {
      props.onChange?.(color);
    }
  }, [props.onChange]);

  const lastChangeColor = useCallback(() => {
    let color = formatedColor();
    if (typeof props.onLastChange === "function") {
      props.onLastChange?.(color);
    }
  }, [props.onLastChange]);

  const updateColor = useCallback(
    (color: string) => {
      const parsedColor = parse(color);
      const { r, g, b, a } = parsedColor as RGBA;

      const { h, s, v } = RGBtoHSV(r, g, b);

      colorRef.current = {
        ...colorRef.current,
        color: format({ r, g, b }, "rgb"),
        r,
        g,
        b,
        a,
        hueColor: checkHueColor(h / 360),
        h,
        s,
        v,
      };

      changeColor();
    },
    [changeColor]
  );

  const updateOpacity = useCallback(
    (a) => {
      colorRef.current.a = a;

      changeColor();
    },
    [changeColor]
  );

  const updateHueColor = useCallback(
    (h) => {
      h = h * 360;
      const { s, v } = colorRef.current;
      const { r, g, b } = HSVtoRGB(h, s, v);

      colorRef.current.r = r;
      colorRef.current.g = g;
      colorRef.current.b = b;
      colorRef.current.h = h;
      colorRef.current.hueColor = checkHueColor(h / 360);
      colorRef.current.color = format({ r, g, b }, "rgb");

      changeColor();
    },
    [changeColor]
  );

  const updateSaturationValue = useCallback(
    (s: number, v: number) => {
      const { r, g, b } = HSVtoRGB(colorRef.current.h, s, v);

      colorRef.current.r = r;
      colorRef.current.g = g;
      colorRef.current.b = b;
      colorRef.current.s = s;
      colorRef.current.v = v;
      colorRef.current.color = format({ r, g, b }, "rgb");

      changeColor();
    },
    [colorRef.current.h]
  );

  const openEyeDropper = useCallback(async () => {
    const eyeDropper = new (window as any).EyeDropper();

    try {
      const result = await eyeDropper.open();

      updateColor(result.sRGBHex);
    } catch (e) {
      console.warn(e);
    }
  }, [updateColor]);

  return {
    type: colorRef.current.type,
    r: colorRef.current.r,
    g: colorRef.current.g,
    b: colorRef.current.b,
    a: colorRef.current.a,
    h: colorRef.current.h,
    s: colorRef.current.s,
    v: colorRef.current.v,
    color: colorRef.current.color,
    hueColor: colorRef.current.hueColor,
    getFormattedColor: () => {
      return formatedColor();
    },
    changeColor,
    lastChangeColor,
    openEyeDropper,
    updateOpacity,
    updateHueColor,
    updateColor,
    updateSaturationValue,
  };
}

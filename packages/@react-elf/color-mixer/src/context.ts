import { createContext } from "react";

interface ColorMixerContextType {
  updateColor?: (color: string) => void;
  onChange?: (color: string) => void;
  onLastChange?: (color: string) => void;
  hideSlide?: boolean;
  hideInput?: boolean;
  width?: number;
  height?: number;
  s?: number;
  v?: number;
  r?: number;
  g?: number;
  b?: number;
  h?: number;
  a?: number;
  type?: string;
  color?: string;
  hueColor?: string;
  lastChangeColor: () => void;
  updateSaturationValue: (s: number, v: number) => void;
}

export const ColorMixerContext = createContext<ColorMixerContextType | null>(
  null
);

import type { ReactNode } from "react";
import { CommonStyle, ThemeType } from "@react-elf-types/shared";

export type PanelModeType = "default" | "stroke";

interface PanelStyle {
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  height?: string | number;
  width?: string | number;
  boxShadow?: string;
  borderRadius?: string;
  borderColor?: string;
  padding?: string;
}

export interface PanelProps {
  title?: ReactNode;
  children?: ReactNode;
  tools?: ReactNode;
  footer?: ReactNode;
  mode?: PanelModeType;
  theme?: ThemeType;
  style?: PanelStyle & CommonStyle;
}

import { CommonStyle } from "@react-elf-types/shared";
import type { ReactNode } from "react";

interface NotificationStyle {
  backgroundColor?: string;
  hoverColor?: string;
  borderColor?: string;
  boxShadow?: string;
  toolsBorderColor?: string;
  toolsBorderRadius?: string;
  color?: string;
}

export type NotificationDirectionType =
  | "left"
  | "right"
  | "center"
  | "top"
  | "bottom"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export interface NotificationProps {
  icon?: ReactNode;
  children?: ReactNode;
  tools?: ReactNode[];
  style?: NotificationStyle & CommonStyle;
  direction?: NotificationDirectionType;
}

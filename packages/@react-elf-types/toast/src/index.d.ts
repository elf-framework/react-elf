import { CommonStyle, VariantType } from "@react-elf-types/shared";
import type { ReactNode } from "react";

interface ToastStyle {
  backgroundColor?: string;
  hoverColor?: string;
  borderColor?: string;
  boxShadow?: string;
  toolsBorderColor?: string;
  toolsBorderRadius?: string;
  color?: string;
}

export type ToastDirectionType =
  | "left"
  | "right"
  | "center"
  | "top"
  | "bottom"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export interface ToastProps {
  icon?: ReactNode;
  children?: ReactNode;
  style?: ToastStyle & CommonStyle;
  direction?: ToastDirectionType;
  closable?: boolean;
  visible?: boolean;
  delay?: number;
  animationDelay?: number;
  variant?: VariantType;
  tools?: ReactNode | ReactNode[];
  onShow?: () => void;
  onClose?: () => void;
}

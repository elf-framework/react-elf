import { CommonStyle, VariantType } from "@react-elf-types/shared";
import type { ReactNode } from "react";

interface TooltipStyle {
  backgroundColor?: string;
  hoverColor?: string;
  borderColor?: string;
  boxShadow?: string;
  toolsBorderColor?: string;
  toolsBorderRadius?: string;
  color?: string;
  hgap?: number;
  vgap?: number;
  delay?: string;
  maxWidth?: number | string;
}

type TooltipTriggerType = "hover" | "click" | "focus" | "manual";
type TooltipPositionType = "relative" | "absolute" | "fixed";
export interface TooltipProps {
  children?: ReactNode;
  message?: ReactNode;
  placement?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
  trigger?: TooltipTriggerType[] | TooltipTriggerType;
  icon?: ReactNode;
  show?: boolean;
  delay?: number;
  animated?: boolean;
  style?: TooltipStyle & CommonStyle;
  hideArrow?: boolean;
  position?: TooltipPositionType;
  variant?: VariantType;
  container?: HTMLElement;
  hideDelay?: number;
}

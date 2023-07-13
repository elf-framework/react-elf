import type { ReactNode } from "react";
import { CommonStyle, VariantType } from "@react-elf-types/shared";
import { TooltipStyle } from "@react-elf-types/tooltip";

type PopoverPlacementType =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "left-top"
  | "left-bottom"
  | "right-top"
  | "right-bottom";

export interface PopoverProps {
  type?: "popover" | "dropdown";
  children?: ReactNode;
  body?: ReactNode;
  placement?: PopoverPlacementType;
  trigger?: "hover" | "click";
  animated?: boolean;
  show?: boolean;
  style?: TooltipStyle & CommonStyle;
  showTip?: boolean;
  hideDelay?: number;
  autoClose?: boolean;
}

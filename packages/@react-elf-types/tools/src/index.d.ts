import type { ReactNode, CSSProperties } from "react";
import { MenuDirectionType } from "@react-elf-types//menu";

import { TooltipProps } from "@react-elf-types/tooltip";
import { CommonStyle } from "@react-elf-types/shared";

/** menu */
export type ToolsItemType = {
  type: "item";
  title: ReactNode | (() => ReactNode);
  icon?: ReactNode | (() => ReactNode);
  selected?: boolean | (() => boolean);
  tooltip?: string | TooltipProps;
  selectedType?: "primary" | "secondary";
  hoverable?: boolean;
  events?: string[];
  onClick?: () => void;
  style?: CSSProperties & CommonStyle;
};

export type ToolsMenuItemType = {
  type?: "menu";
  items?: ReactNode[];
  title?: ReactNode;
  icon?: ReactNode;
  selected?: boolean | (() => boolean);
  events?: string[];
  disabled?: boolean;
  opened?: boolean;
  trigger?: "click" | "hover";
  direction?: MenuDirectionType;
  variant?: "light" | "dark";
  onOpen?: (event: PointerEvent) => void;
  onClose?: (event: PointerEvent) => void;
  onClick?: (event: PointerEvent) => void;
  rootClose?: () => void;
  style?: CSSProperties & CommonStyle;
  className?: string;
  hoverable?: boolean;
  noArrow?: boolean;
  menuStyle?: CSSProperties & CommonStyle;
};

export type ToolsCustomItemType = {
  type: "custom";
  hoverable?: boolean;
  render?: () => ReactNode;
  style?: CSSProperties;
};

export type ToolsType = ToolsItemType | ToolsMenuItemType | ToolsCustomItemType;

interface ToolsStyle {
  backgroundColor?: string;
  color?: string;
  height?: string;
}

export interface ToolsProps {
  items?: ToolsType[];
  style?: ToolsStyle & CommonStyle;
  vertical?: boolean;
  emphasized?: boolean;
  moreIcon?: ReactNode;
}

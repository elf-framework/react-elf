import type { ReactNode } from "react";
import { ToolsProps, ToolsStyle } from "@react-elf-types/tools";
import { CommonStyle, VariantType } from "@react-elf-types/shared";

interface ToolbarStyle {
  backgroundColor?: string;
  color?: string;
  height?: string;
  align?: string;
  rounded?: boolean;
  class?: string;
  emphasized?: boolean;
  type?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "danger";
}

export type ToolbarAlignType =
  | "start"
  | "center"
  | "end"
  | "space-around"
  | "space-evenly";

export type ToolbarItemProps = {
  items: ToolsProps[];
  style: ToolsStyle & CommonStyle;
  emphasized: boolean;
  moreIcon: ReactNode;
};

export interface ToolbarProps {
  items: ToolsProps[];
  align?: ToolbarAlignType;
  style?: ToolbarStyle;
  /**
   * The variant of the toolbar.
   *
   * @default default
   */
  variant?: Exclude<
    VariantType,
    "light" | "success" | "danger" | "info" | "warning"
  >;
  emphasized?: boolean;
  rounded?: boolean;
  className?: string;
}

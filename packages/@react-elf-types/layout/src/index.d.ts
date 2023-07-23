import { CommonStyle } from "@react-elf-types/shared";

export type GridStyle = {
  backgroundColor?: string;
  gap?: number;
};

export type GridTemplate = number | string;
export interface GridProps {
  children?: React.ReactNode;
  className?: string;
  columns?: GridTemplate | GridTemplate[];
  rows?: GridTemplate | GridTemplate[];
  style?: GridStyle & CommonStyle;
  gap?: number;
  columnGap?: number;
  rowGap?: number;
}

export type ColumnStyle = {
  gridColumn?: string;
};

export interface ColumnProps {
  children?: React.ReactNode;
  span?: number;
  style?: CommonStyle;
}

export type FlexStyle = {
  backgroundColor?: string;
  gap?: number;
};

export interface FlexProps {
  children?: React.ReactNode;
  className?: string;
  stack?: boolean;
  wrap?: boolean;
  sameWidth?: boolean;
  style?: FlexStyle & CommonStyle;
  direction?: "row" | "column";
  gap?: number | string;
  columnGap?: number | string;
  rowGap?: number | string;
  justifyContent?:
    | "start"
    | "center"
    | "end"
    | "flex-start"
    | "flex-end"
    | "space-around"
    | "space-evenly"
    | "space-between";
}

export interface VBoxProps {
  children?: React.ReactNode;
  wrap?: boolean;
  style?: FlexStyle & CommonStyle;
  gap?: number | string;
}

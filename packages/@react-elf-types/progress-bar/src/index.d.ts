import { CommonStyle, SizeType, VariantType } from "@react-elf-types/shared";
import type { ReactNode } from "react";

type ProgressBarShapeType = "round" | "rect";

export interface ProgressBarProps {
  value?: number;
  showValue?: boolean;
  valueFunction?: (value: number) => ReactNode;
  title?: ReactNode;
  variant?: VariantType;
  size?: SizeType;
  style?: CommonStyle;
  max?: number;
  min?: number;
  indeterminate?: boolean;
  shape?: ProgressBarShapeType;
}

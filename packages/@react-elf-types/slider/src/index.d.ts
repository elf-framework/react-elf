import { CommonStyle, SizeType, VariantType } from "@react-elf-types/shared";
import type { ReactNode } from "react";

type SlideType = "single" | "range";
type ValuePlacementType = "none" | "top" | "bottom";
type ShowTriggerType = "always" | "hover" | "none";

export interface SliderProps {
  type?: SlideType;
  label?: ReactNode;
  labelPosition?: "top" | "side";
  value?: number | [number, number];
  defaultValue?: number | [number, number];
  fill?: boolean;
  fillOffset?: number;
  disabled?: boolean;
  size?: SizeType;
  variant?: VariantType;
  style?: CommonStyle;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  /**
   * show value on the slider
   */
  showValue?: boolean;
  valuePlacement?: ValuePlacementType;
  showTrigger?: ShowTriggerType;
  valueFunc?: (value: number) => ReactNode;
  readOnly?: boolean;
  fitted?: boolean;
}

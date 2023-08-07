import { CommonStyle, SizeType, VariantType } from "@react-elf-types/shared";

type ProgressCircleAnimationType = "normal" | "spin";

export interface ProgressCircleProps {
  value?: number;

  showValue?: boolean;
  variant?: VariantType;
  size?: SizeType;
  style?: CommonStyle;
  max?: number;
  min?: number;
  indeterminate?: boolean;
  animated?: boolean;
  animationType?: ProgressCircleAnimationType;
}

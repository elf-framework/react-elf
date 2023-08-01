import {
  CommonStyle,
  VariantType,
  SizeType,
  OrientationType,
} from "@react-elf-types/shared";
import type { ReactNode } from "react";

export interface RadioProps {
  checked?: boolean;
  name?: string;
  value?: string | number;
  onChange?: (checked: boolean) => void;
  style?: CommonStyle;
  indeterminate?: boolean;
  variant?: VariantType;
  size?: SizeType;
  disabled?: boolean;
  children?: ReactNode;
}

interface RadioItem {
  label: string;
  value: any;
  indeterminate?: boolean;
}

export interface RadioGroupProps {
  name?: string;
  value: any;
  direction?: OrientationType;
  children?: ReactNode;
  onChange?: (values: any) => void;
  style?: CommonStyle;
  size?: SizeType;
  variant?: VariantType;
  disabled?: boolean;
  readonly?: boolean;
}

import {
  CommonStyle,
  VariantType,
  SizeType,
  OrientationType,
} from "@react-elf-types/shared";
import { ChangeEvent } from "react";
import type { ReactNode } from "react";

export interface CheckboxProps {
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

interface CheckboxItem {
  label: string;
  value: any;
  indeterminate?: boolean;
}

export interface CheckboxGroupProps {
  name?: string;
  values: any[];
  direction?: OrientationType;
  children?: ReactNode;
  onChange?: (values: any) => void;
  style?: CommonStyle;
  size?: SizeType;
  variant?: VariantType;
  disabled?: boolean;
  readonly?: boolean;
}

import { CommonStyle, VariantType, SizeType } from "@react-elf-types/shared";
import { ChangeEvent } from "react";
import type { ReactNode } from "react";

export interface CheckboxProps {
  checked?: boolean;
  name?: string;
  value?: string | number | readonly string[] | undefined;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
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
  value: any[];
  direction?: OrientationType;
  options?: CheckboxItem[];
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  style?: CommonStyle;
  size?: SizeType;
  variant?: VariantType;
  disabled?: boolean;
}

import {
  CommonStyle,
  DomEventType,
  SizeType,
  VariantType,
} from "@react-elf-types/shared";
import type { ReactNode } from "react";

export type SwitchProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  size?: SizeType;
  variant?: VariantType;
  style?: CommonStyle;
  onChange?: (checked: boolean) => void;
  children?: ReactNode;
  withLabel?: boolean;
  labels?: ReactNode[];
  readOnly?: boolean;
} & DomEventType;

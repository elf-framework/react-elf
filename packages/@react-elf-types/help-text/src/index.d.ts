import type { ReactNode } from "react";
import { CommonStyle, VariantType, SizeType } from "@react-elf-types/shared";

interface HelpTextProps {
  children?: ReactNode;
  style?: CommonStyle;
  variant?: VariantType;
  size?: SizeType;
  icon?: ReactNode;
  disabled?: boolean;
}

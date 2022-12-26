import { ReactNode } from 'react';
import { CommonStyle, VariantType } from "@react-elf-types/shared";

export interface AlertProps {
  variant?: VariantType;
  title?: ReactNode;
  children?: ReactNode;
  style?: CommonStyle;
  closable?: boolean;
  dismissable?: boolean;
  delay?: number;
  icon?: ReactNode;
  shape?: "rect" | "round";
  actions?: ReactNode;
  onShow?: () => void;
  onHide?: () => void;
  weak?: boolean;
}
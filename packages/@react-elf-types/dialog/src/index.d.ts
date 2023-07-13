import { ButtonProps } from "@react-elf-types/button";
import type { ReactNode } from "react";

type DialogPositionType = "relative" | "absolute" | "fixed";

interface DialogStyle {
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  height?: number | string;
  width?: number | string;
  boxShadow: string;
  borderRadius: string;
  borderColor: string;
  padding: string;
  position: DialogPositionType;
}

interface DialogProps {
  visible?: boolean;
  tools?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
  center?: boolean;
  noBorder?: boolean;
  style?: DialogStyle;
  okText?: ReactNode;
  cancelText?: ReactNode;
  okProps?: ButtonProps;
  cancelProps?: ButtonProps;
  title?: ReactNode;
  closable?: boolean;
  onOk?: (event: any) => void;
  onCancel?: (event: any) => void;
  onClose?: (event: any) => void;
}

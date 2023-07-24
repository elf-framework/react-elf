import { CommonStyle, SizeType } from "@react-elf-types/shared";
import type { ReactNode } from "react";

interface BadgeProps {
  children?: ReactNode;
  style?: CommonStyle;
  onClose?: () => void;
  disabled?: boolean;
  size?: SizeType;
  filled?: boolean;
  readOnly?: boolean;
  variant?:
    | "informative"
    | "neutral"
    | "positive"
    | "notice"
    | "negative"
    | "indigo"
    | "celery"
    | "chartreuse"
    | "yellow"
    | "magenta"
    | "fuchsia"
    | "purple"
    | "seafoam";
  fixed?: boolean;
  placement?: "none" | "top" | "bottom" | "left" | "right";
}

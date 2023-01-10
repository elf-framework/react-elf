import { CommonStyle } from "@react-elf-types/shared";
import { MouseEvent, MouseEventHandler, ReactNode } from "react";

interface ButtonStyle extends CommonStyle {
  borderColor?: string;
  backgroundColor?: string;
  disabledColor?: string;
  color?: string;
  fontSize?: string;
  padding?: string | number;
  borderRadius?: string;
}

/** button */
type ButtonVariant =
  | "primary"
  | "secondary"
  | "sucess"
  | "info"
  | "danger"
  | "warning"
  | "outline";
type ButtonSize =
  | "extra-small"
  | "xsmall"
  | "small"
  | "default"
  | "large"
  | "extra-large"
  | "xlarge";

type ButtonShape = "square" | "round" | "circle";

interface ButtonProps {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  selected?: boolean;
  outline?: boolean;
  quiet?: boolean;
  disabled?: boolean;
  className?: string;
  iconOnly?: boolean;
  place?: string;
  justified?: boolean;
  play?: boolean;
  hover?: boolean;
  focused?: boolean;
  hasMinWidth?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: ButtonStyle;
  thin?: boolean;
  closable?: boolean;
  href?: string;
  target?: string;
  pending?: boolean;
  as?: string;
}


interface ActionGroupProps {
  children?: ReactNode;
  direction?: OrientationType;
  moreIcon?: ReactNode;
  quiet?: boolean;
  compact?: boolean;
  justified?: boolean;
  collapsed?: boolean;
  disabled?: boolean;
  shape?: "rect" | "normal";
  onMoreClick?: (event: PointerEvent, items: ReactNode[]) => void;
  style?: ButtonStyle & CommonStyle;
  boundary?: number;
}
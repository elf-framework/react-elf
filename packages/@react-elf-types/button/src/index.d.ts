import { CommonStyle } from "@react-elf-types/shared";
import { MouseEventHandler } from "react";
import type { ReactNode } from "react";

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
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "danger"
  | "warning"
  | "outline"
  | "light"
  | "dark"
  | "white";
type ButtonSize = "extra-small" | "small" | "medium" | "large" | "extra-large";

type ButtonShape = "rect" | "round" | "circle";

type OrientationType = "horizontal" | "vertical";

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
  value?: ButtonValue;
  thin?: boolean;
  closable?: boolean;
  href?: string;
  target?: string;
  pending?: boolean;
  as?: string;
  noContext?: boolean;
}

type ButtonValue = string | number;

interface ActionGroupProps {
  children?: ReactNode;
  direction?: OrientationType;
  moreIcon?: ReactNode;
  quiet?: boolean;
  compact?: boolean;
  justified?: boolean;
  collapsed?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  size?: ButtonSize;
  shape?: ButtonShape;
  variant?: ButtonVariant;
  outline?: boolean;
  className?: string;
  iconOnly?: boolean;
  thin?: boolean;
  value?: ButtonValue[];
  onChange?: (value: ButtonValue | ButtonValue[]) => void;
  onMoreClick?: (event: PointerEvent, items: ReactNode[]) => void;
  style?: ButtonStyle & CommonStyle;
  boundary?: number;
}

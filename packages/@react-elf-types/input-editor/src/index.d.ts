import type { ReactNode } from "react";
import {
  CommonStyle,
  SizeType,
  DomEventType,
  OrientationType,
} from "@react-elf-types/shared";

interface FieldProps {
  help?: ReactNode;
  label?: ReactNode;
  size?: SizeType;
  style?: CommonStyle;
  disabled?: boolean;
  required?: boolean;
  requiredText?: ReactNode;
  optional?: boolean;
  optionalText?: ReactNode;
  validIcon?: ReactNode;
  invalid?: boolean;
  invalidIcon?: ReactNode;
  invalidMessage?: ReactNode;
  children?: ReactNode;
  position?: OrientationType;
}

export type InputEditorStyle = {
  backgroundColor?: string;
  minWidth?: number | string;
  borderRadius?: string;
  height?: number | string;
};

export type InputEditorType =
  | "text"
  | "password"
  | "number"
  | "email"
  | "url"
  | "tel"
  | "search"
  | "date"
  | "time"
  | "datetime-local"
  | "month"
  | "week"
  | "color";

export type InputEditorProps = {
  type?: InputEditorType;
  hover?: boolean;
  focused?: boolean;
  autoFocus?: boolean;
  autoFocusDelay?: number;
  placeholder?: string;
  style?: InputEditorStyle & CommonStyle;
  disabled?: boolean;
  required?: boolean;
  value?: string;
  defaultValue?: string;
  readOnly?: boolean;
  size?: SizeType;
  icon?: ReactNode;
  tools?: ReactNode;
  step?: number;
  min?: number;
  max?: number;
  invalid?: boolean;
} & DomEventType;

export type InputPaintStyle = {
  backgroundColor?: string;
  minWidth?: number;
  borderRadius?: number;
  height?: number;
};

export type InputPaintType = "color" | "gradient" | "image";
export type InputPaintProps = {
  type?: InputPaintType;
  hover?: boolean;
  focused?: boolean;
  autoFocus?: boolean;
  autoFocusDelay?: number;
  placeholder?: string;
  style?: InputPaintStyle & CommonStyle;
  disabled?: boolean;
  hideColorView?: boolean;
  sync?: boolean;
} & DomEventType;

export type HexColorEditorProps = {
  value: string;
} & InputPaintProps &
  DomEventType;

export type RGBColorEditorProps = {
  value: string;
} & InputPaintProps &
  DomEventType;

export type HSLColorEditorProps = {
  value: string;
} & InputPaintProps &
  DomEventType;

export type TextAreaEditorProps = {
  rows?: number;
  resizable?: boolean;
  icon?: ReactNode;
  tools?: ReactNode;
} & InputEditorProps &
  DomEventType &
  FieldProps;

export type TextFieldProps = {
  inputStyle?: InputEditorStyle;
} & InputEditorProps &
  DomEventType &
  FieldProps;

export type TextAreaProps = TextFieldProps & TextAreaEditorProps & CommonStyle;

import type {
  FocusEvent,
  ChangeEvent,
  ClipboardEvent,
  FormEvent,
  KeyboardEvent,
  MouseEvent,
} from "react";
export interface KeyValue {
  [key: string]: unknown;
}

export interface StringKeyValue {
  [key: string]: string;
}

export interface CommonStyle extends KeyValue {
  alignContent?: string;
  alignItems?: string;
  alignSelf?: string;
  area?: string;
  autoColumns?: string;
  autoFlow?: string;
  autoRows?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  basis?: string;
  border?: string;
  borderRadius?: string;
  bottom?: string;
  boxShadow?: string;
  color?: string;
  column?: string;
  columnEnd?: string;
  columnGap?: number;
  columnSpan?: number;
  columnStart?: string;
  direction?: string;
  display?: string;
  flex?: string | number;
  fontFamily?: string;
  fontSize?: string | number;
  fontStyle?: string;
  fontWeight?: string;
  gap?: string | number;
  grow?: string;
  height?: string | number;
  justifyContent?: string;
  left?: string;
  letterSpacing?: string;
  lineHeight?: string | number;
  margin?: string | number | number[] | string[] | (number | string)[];
  marginBlock?: string;
  marginBlockEnd?: string;
  marginBlockStart?: string;
  marginBottom?: string | number;
  marginInline?: string | number;
  marginInlineEnd?: string | number;
  marginInlineStart?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
  marginTop?: string | number;
  maxHeight?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  minWidth?: string | number;
  objectFit?: string;
  objectPosition?: string;
  opacity?: string;
  order?: string;
  overflow?: string;
  padding?: string | number | number[] | string[];
  paddingBlock?: string | number;
  paddingBlockEnd?: string | number;
  paddingBlockStart?: string | number;
  paddingBottom?: string | number;
  paddingInline?: string | number;
  paddingInlineEnd?: string | number;
  paddingInlineStart?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  position?: string;
  resize?: string;
  right?: string;
  row?: string;
  rowEnd?: string;
  rowGap?: string | number;
  rowSpan?: string;
  rowStart?: string;
  shrink?: string;
  templateAreas?: string;
  templateColumns?: string;
  templateRows?: string;
  textAlign?: string;
  textDecoration?: string;
  textTransform?: string;
  top?: string;
  transform?: string;
  transformOrigin?: string;
  width?: string | number;
  whiteSpace?: string;
  wrap?: string;
}

export type DomEventType = {
  onFocus?: (event: FocusEvent<HTMLElement>) => void;
  onFocusEnter?: (event: FocusEvent<HTMLElement>) => void;
  onFocusLeave?: (event: FocusEvent<HTMLElement>) => void;
  onBlur?: (event: FocusEvent<HTMLElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLElement>) => void;
  onKeyUp?: (event: KeyboardEvent<HTMLElement>) => void;
  onKeyPress?: (event: KeyboardEvent<HTMLElement>) => void;
  onChange?: (event: ChangeEvent<HTMLElement>) => void;
  onInput?: (event: FormEvent<HTMLElement>) => void;
  onPaste?: (event: ClipboardEvent<HTMLElement>) => void;
  onCut?: (event: ClipboardEvent<HTMLElement>) => void;
  onCopy?: (event: ClipboardEvent<HTMLElement>) => void;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  onDoubleClick?: (event: MouseEvent<HTMLElement>) => void;
  onCompositionStart?: (event: KeyboardEvent) => void;
  onCompositionEnd?: (event: KeyboardEvent) => void;
  onCompositionUpdate?: (event: KeyboardEvent) => void;
  onSelect?: (event: KeyboardEvent) => void;
  onMouseDown?: (event: MouseEvent) => void;
  onMouseUp?: (event: MouseEvent) => void;
  onMouseMove?: (event: MouseEvent) => void;
  onMouseEnter?: (event: MouseEvent) => void;
  onMouseLeave?: (event: MouseEvent) => void;
  onMouseOver?: (event: MouseEvent) => void;
  onMouseOut?: (event: MouseEvent) => void;
  onWheel?: (event: WheelEvent) => void;
  onContextMenu?: (event: MouseEvent) => void;
  onDragStart?: (event: DragEvent) => void;
  onDrag?: (event: DragEvent) => void;
  onDragEnd?: (event: DragEvent) => void;
  onDragEnter?: (event: DragEvent) => void;
  onDragLeave?: (event: DragEvent) => void;
  onDragOver?: (event: DragEvent) => void;
  onDrop?: (event: DragEvent) => void;
  onScroll?: (event: WheelEvent) => void;
  onTouchStart?: (event: TouchEvent) => void;
  onTouchMove?: (event: TouchEvent) => void;
  onTouchEnd?: (event: TouchEvent) => void;
  onTouchCancel?: (event: TouchEvent) => void;
  onPointerDown?: (event: PointerEvent) => void;
  onPointerMove?: (event: PointerEvent) => void;
  onPointerUp?: (event: PointerEvent) => void;
  onPointerCancel?: (event: PointerEvent) => void;
  onPointerEnter?: (event: PointerEvent) => void;
  onPointerLeave?: (event: PointerEvent) => void;
};

export function makeCssVariablePrefixMap(
  prefix: string,
  obj: KeyValue
): StringKeyValue;

export function propertyMap(
  styles: KeyValue,
  mapper?: KeyValue
): KeyValue | undefined;

export type ThemeType = "dark" | "light" | string;

export type VariantType =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";

export type SizeType = "small" | "medium" | "large" | "extra-large";

export type OrientationType = "horizontal" | "vertical";

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
  columnGap?: string | number;
  columnSpan?: string;
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
  margin?: string | number | number[] | string[];
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

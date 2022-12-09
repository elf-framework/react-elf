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
  columnGap?: string;
  columnSpan?: string;
  columnStart?: string;
  direction?: string;
  display?: string;
  flex?: string;
  fontFamily?: string;
  fontSize?: string;
  fontStyle?: string;
  fontWeight?: string;
  gap?: string;
  grow?: string;
  height?: string | number;
  justifyContent?: string;
  left?: string;
  letterSpacing?: string;
  lineHeight?: string;
  margin?: string | number | number[] | string[];
  marginBlock?: string;
  marginBlockEnd?: string;
  marginBlockStart?: string;
  marginBottom?: string;
  marginInline?: string;
  marginInlineEnd?: string;
  marginInlineStart?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  maxHeight?: string;
  maxWidth?: string;
  minHeight?: string;
  minWidth?: string;
  objectFit?: string;
  objectPosition?: string;
  opacity?: string;
  order?: string;
  overflow?: string;
  padding?: string;
  paddingBlock?: string;
  paddingBlockEnd?: string;
  paddingBlockStart?: string;
  paddingBottom?: string;
  paddingInline?: string;
  paddingInlineEnd?: string;
  paddingInlineStart?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  position?: string;
  resize?: string;
  right?: string;
  row?: string;
  rowEnd?: string;
  rowGap?: string;
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
  width?: string;
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

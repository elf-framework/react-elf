var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
const NumberStyleKeys = {
  width: true,
  height: true,
  top: true,
  left: true,
  right: true,
  bottom: true,
  maxWidth: true,
  maxHeight: true,
  minWidth: true,
  minHeight: true,
  margin: true,
  marginTop: true,
  marginRight: true,
  marginBottom: true,
  marginLeft: true,
  padding: true,
  paddingTop: true,
  paddingRight: true,
  paddingBottom: true,
  paddingLeft: true,
  border: true,
  borderTop: true,
  borderRight: true,
  borderBottom: true,
  borderLeft: true,
  borderWidth: true,
  borderTopWidth: true,
  borderRightWidth: true,
  borderBottomWidth: true,
  borderLeftWidth: true,
  gap: true
};
function convertNumberStyleValue(key, value) {
  if (typeof value === "number") {
    if (NumberStyleKeys[key]) {
      value = value + "px";
    }
  }
  return value;
}
__name(convertNumberStyleValue, "convertNumberStyleValue");
function propertyMap(styles = {}, mapper = {}) {
  const styleObj = {};
  Object.keys(styles).forEach((key) => {
    if (typeof styles[key] !== "undefined") {
      styleObj[mapper[key] || key] = convertNumberStyleValue(key, styles[key]);
    }
  });
  return Object.keys(styleObj).length ? styleObj : void 0;
}
__name(propertyMap, "propertyMap");
const styleKeys = {};
const uppercasePattern = /([A-Z])/g;
function convertStyleKey(key) {
  if (styleKeys[key]) {
    return styleKeys[key];
  }
  const upperKey = key.replace(uppercasePattern, "-$1").toLowerCase();
  styleKeys[key] = upperKey;
  return upperKey;
}
__name(convertStyleKey, "convertStyleKey");
function makeCssVariablePrefixMap(prefix, obj = {}) {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    newObj[key] = prefix + "-" + convertStyleKey(key);
  });
  return newObj;
}
__name(makeCssVariablePrefixMap, "makeCssVariablePrefixMap");
const ComponentPropsToStylePropsMap = {
  alignContent: "alignContent",
  alignItems: "alignItems",
  alignSelf: "alignSelf",
  area: "gridArea",
  autoColumns: "gridAutoColumns",
  autoFlow: "gridAutoFlow",
  autoRows: "gridAutoRows",
  backgroundColor: "backgroundColor",
  backgroundImage: "backgroundImage",
  basis: "flexBasis",
  border: "border",
  borderRadius: "borderRadius",
  bottom: "bottom",
  boxShadow: "boxShadow",
  color: "color",
  column: "gridColumn",
  columnEnd: "gridColumnEnd",
  columnGap: "columnGap",
  columnSpan: "gridColumn",
  // Will set gridColumn if no `row` prop given
  columnStart: "gridColumnStart",
  direction: "flexDirection",
  display: "display",
  flex: "flex",
  fontFamily: "fontFamily",
  fontSize: "fontSize",
  fontStyle: "fontStyle",
  fontWeight: "fontWeight",
  gap: "gap",
  grow: "flexGrow",
  height: "height",
  justifyContent: "justifyContent",
  left: "left",
  letterSpacing: "letterSpacing",
  lineHeight: "lineHeight",
  margin: "margin",
  marginBlock: "marginBlock",
  marginBlockEnd: "marginBlockEnd",
  marginBlockStart: "marginBlockStart",
  marginBottom: "marginBlockEnd",
  marginInline: "marginInline",
  marginInlineEnd: "marginInlineEnd",
  marginInlineStart: "marginInlineStart",
  marginLeft: "marginInlineStart",
  marginRight: "marginInlineEnd",
  marginTop: "marginBlockStart",
  maxHeight: "maxHeight",
  maxWidth: "maxWidth",
  minHeight: "minHeight",
  minWidth: "minWidth",
  objectFit: "objectFit",
  objectPosition: "objectPosition",
  opacity: "opacity",
  order: "order",
  overflow: "overflow",
  padding: "padding",
  paddingBlock: "paddingBlock",
  paddingBlockEnd: "paddingBlockEnd",
  paddingBlockStart: "paddingBlockStart",
  paddingBottom: "paddingBlockEnd",
  paddingInline: "paddingInline",
  paddingInlineEnd: "paddingInlineEnd",
  paddingInlineStart: "paddingInlineStart",
  paddingLeft: "paddingInlineStart",
  paddingRight: "paddingInlineEnd",
  paddingTop: "paddingBlockStart",
  position: "position",
  resize: "resize",
  right: "right",
  row: "gridRow",
  rowEnd: "gridRowEnd",
  rowGap: "rowGap",
  rowSpan: "gridRow",
  // Will set gridRow if no `row` prop given
  rowStart: "gridRowStart",
  shrink: "flexShrink",
  templateAreas: "gridTemplateAreas",
  templateColumns: "gridTemplateColumns",
  templateRows: "gridTemplateRows",
  textAlign: "textAlign",
  textDecoration: "textDecoration",
  textTransform: "textTransform",
  top: "top",
  transform: "transform",
  transformOrigin: "transformOrigin",
  width: "width",
  whiteSpace: "whiteSpace",
  wrap: "flexWrap",
  zIndex: "zIndex"
};
function splitStyleKeyAndNoneStyleKey(properties) {
  const style = {};
  const noneStyle = {};
  Object.keys(properties).forEach((key) => {
    const value = properties[key];
    const styleKey = ComponentPropsToStylePropsMap[key];
    if (styleKey) {
      style[styleKey] = value;
    } else {
      noneStyle[key] = value;
    }
  });
  return { style, noneStyle };
}
__name(splitStyleKeyAndNoneStyleKey, "splitStyleKeyAndNoneStyleKey");
export {
  ComponentPropsToStylePropsMap,
  NumberStyleKeys,
  convertNumberStyleValue,
  convertStyleKey,
  makeCssVariablePrefixMap,
  propertyMap,
  splitStyleKeyAndNoneStyleKey
};

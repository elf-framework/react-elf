var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  NumberStyleKeys: () => NumberStyleKeys,
  convertNumberStyleValue: () => convertNumberStyleValue,
  convertStyleKey: () => convertStyleKey,
  makeCssVariablePrefixMap: () => makeCssVariablePrefixMap,
  propertyMap: () => propertyMap
});
module.exports = __toCommonJS(src_exports);
var NumberStyleKeys = {
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
function propertyMap(styles = {}, mapper = {}) {
  const styleObj = {};
  Object.keys(styles).forEach((key) => {
    if (typeof styles[key] !== "undefined") {
      styleObj[mapper[key] || key] = convertNumberStyleValue(key, styles[key]);
    }
  });
  return Object.keys(styleObj).length ? styleObj : void 0;
}
var styleKeys = {};
var uppercasePattern = /([A-Z])/g;
function convertStyleKey(key) {
  if (styleKeys[key]) {
    return styleKeys[key];
  }
  const upperKey = key.replace(uppercasePattern, "-$1").toLowerCase();
  styleKeys[key] = upperKey;
  return upperKey;
}
function makeCssVariablePrefixMap(prefix, obj = {}) {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    newObj[key] = prefix + "-" + convertStyleKey(key);
  });
  return newObj;
}
//# sourceMappingURL=index.cjs.js.map

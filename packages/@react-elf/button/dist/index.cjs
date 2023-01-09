var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Button: () => Button,
  IconButton: () => IconButton,
  OutlineButton: () => OutlineButton,
  RoundButton: () => RoundButton
});
module.exports = __toCommonJS(src_exports);

// src/Button.tsx
var import_shared = require("@react-elf/shared");
var import_classnames = __toESM(require("classnames"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var cssProperties = (0, import_shared.makeCssVariablePrefixMap)("--elf--button", {
  borderColor: true,
  backgroundColor: true,
  selectedBackgroundColor: true,
  disabledColor: true,
  color: true,
  textColor: true,
  fontSize: true,
  fontWeight: true,
  height: true,
  padding: true,
  borderRadius: true
});
function Button(props) {
  const {
    variant = "default",
    size = "medium",
    disabled = false,
    selected,
    focused,
    shape = "none",
    quiet = false,
    outline = false,
    thin = false,
    closable = false,
    place = "",
    style = {},
    href = "",
    target = "_blank",
    children,
    className = "",
    iconOnly = false,
    justified = false,
    pending = false,
    play = false,
    hover = false,
    as = "button",
    hasMinWidth = false,
    ...extraProps
  } = props;
  const localClass = (0, import_classnames.default)([
    "elf--button",
    {
      selected,
      outline,
      focused,
      quiet,
      closable,
      justified,
      [variant]: true,
      [size]: true,
      [shape]: true,
      [place]: true,
      thin,
      hover,
      "icon-only": iconOnly,
      "has-min-width": hasMinWidth
    },
    className
  ]);
  const buttonContent = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: children || "" });
  if (as === "link") {
    const styleObject = {
      className: localClass,
      disabled,
      style: (0, import_shared.propertyMap)(style, cssProperties),
      ...extraProps,
      onClick: void 0
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { ...styleObject, href, target, children: buttonContent });
  } else {
    const styleObject = {
      className: localClass,
      disabled,
      style: (0, import_shared.propertyMap)(style, cssProperties),
      ...extraProps
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { ...styleObject, children: buttonContent });
  }
}

// src/RoundButton.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function RoundButton(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, { ...props, shape: "round" });
}

// src/IconButton.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function IconButton(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(RoundButton, { ...props, iconOnly: true });
}

// src/OutlineButton.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function OutlineButton(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button, { ...props, outline: true });
}

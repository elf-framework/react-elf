// src/Button.tsx
import { makeCssVariablePrefixMap, propertyMap } from "@react-elf/shared";
import classnames from "classnames";
import React from "react";
var cssProperties = makeCssVariablePrefixMap("--elf--button", {
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
  const localClass = classnames([
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
  const buttonContent = /* @__PURE__ */ React.createElement("span", null, children || "");
  if (as === "link") {
    const styleObject = {
      className: localClass,
      disabled,
      style: propertyMap(style, cssProperties),
      ...extraProps,
      onClick: void 0
    };
    return /* @__PURE__ */ React.createElement("a", { ...styleObject, href, target }, buttonContent);
  } else {
    const styleObject = {
      className: localClass,
      disabled,
      style: propertyMap(style, cssProperties),
      ...extraProps
    };
    return /* @__PURE__ */ React.createElement("button", { ...styleObject }, buttonContent);
  }
}
export {
  Button
};
//# sourceMappingURL=index.mjs.js.map

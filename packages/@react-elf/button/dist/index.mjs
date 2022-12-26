// src/Button.tsx
import { makeCssVariablePrefixMap, propertyMap } from "@react-elf/shared";
import classnames from "classnames";
import { jsx } from "react/jsx-runtime";
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
  const buttonContent = /* @__PURE__ */ jsx("span", { children: children || "" });
  if (as === "link") {
    const styleObject = {
      className: localClass,
      disabled,
      style: propertyMap(style, cssProperties),
      ...extraProps,
      onClick: void 0
    };
    return /* @__PURE__ */ jsx("a", { ...styleObject, href, target, children: buttonContent });
  } else {
    const styleObject = {
      className: localClass,
      disabled,
      style: propertyMap(style, cssProperties),
      ...extraProps
    };
    return /* @__PURE__ */ jsx("button", { ...styleObject, children: buttonContent });
  }
}

// src/RoundButton.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function RoundButton(props) {
  return /* @__PURE__ */ jsx2(Button, { ...props, shape: "round" });
}

// src/IconButton.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
function IconButton(props) {
  return /* @__PURE__ */ jsx3(RoundButton, { ...props, iconOnly: true });
}

// src/OutlineButton.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
function OutlineButton(props) {
  return /* @__PURE__ */ jsx4(Button, { ...props, outline: true });
}
export {
  Button,
  IconButton,
  OutlineButton,
  RoundButton
};

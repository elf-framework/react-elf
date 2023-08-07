import React, { createRef, useContext, useMemo } from "react";
import {
  ButtonProps,
  ButtonShape,
  ButtonSize,
  ButtonVariant,
} from "@react-elf-types/button";
import { makeCssVariablePrefixMap, propertyMap } from "@react-elf/shared";
import classnames from "classnames";
import { ActionGroupContext } from "./context";

const cssProperties = makeCssVariablePrefixMap("--elf--button", {
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
  borderRadius: true,
});

interface ButtonItemProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  selected?: boolean;
  shape?: ButtonShape;
  quiet?: boolean;
  outline?: boolean;
  thin?: boolean;
  iconOnly?: boolean;
}

export function Button(props: ButtonProps) {
  const {
    variant,
    size,
    disabled,
    selected,
    shape,
    quiet,
    outline,
    thin,
    iconOnly,

    focused,
    closable = false,
    place = "",
    style = {},
    href = "",
    target = "_blank",
    children,
    className = "",
    justified = false,
    pending = false,
    play = false,
    hover = false,
    as = "button",
    hasMinWidth = false,
    noContext = false,

    ...extraProps
  } = props;

  // Only Button
  const buttonRef = createRef<HTMLButtonElement>();

  // for CheckboxGroup
  let groupState = useContext(ActionGroupContext);

  const localProps: ButtonItemProps = {};

  if (!groupState || noContext) {
    localProps.variant = props.variant;
    localProps.size = props.size;
    localProps.disabled = props.disabled;
    localProps.selected = props.selected;
    localProps.shape = props.shape;
    localProps.quiet = props.quiet;
    localProps.outline = props.outline;
    localProps.thin = props.thin;
    localProps.iconOnly = props.iconOnly;
  } else {
    localProps.variant = groupState.variant;
    localProps.size = groupState.size;
    localProps.disabled = groupState.isDisabled;
    localProps.selected = groupState.isSelected(props.value);
    localProps.shape = groupState.shape;
    localProps.quiet = groupState.quiet;
    localProps.outline = groupState.outline;
    localProps.thin = groupState.thin;
    localProps.iconOnly = groupState.iconOnly;
  }

  const localClass = useMemo(
    () =>
      classnames([
        "elf--button",
        {
          selected: localProps.selected || false,
          outline: localProps.outline || false,
          focused,
          quiet: localProps.quiet || false,
          closable,
          justified,
          [localProps.variant || "default"]: true,
          [localProps.size || "medium"]: true,
          [localProps.shape || "rect"]: true,
          [place]: true,
          thin: localProps.thin || false,
          hover,
          "icon-only": localProps.iconOnly,
          "has-min-width": hasMinWidth,
        },
        className,
      ]),
    [
      /* context state */
      localProps.selected,
      localProps.outline,
      localProps.variant,
      localProps.size,
      localProps.shape,
      localProps.thin,
      localProps.quiet,
      localProps.iconOnly,

      /* props */
      focused,
      closable,
      justified,
      place,
      hover,
      hasMinWidth,
      className,
    ]
  );

  const buttonContent = (
    <span>
      {/* {pending ? (
        <Animation.spin play={play}>
          <ProgressCircle value={80} size={size} variant={variant} />
        </Animation.spin>
      ) : ( */}
      {children}
      {/* )} */}
    </span>
  );

  if (as === "link") {
    const styleObject = {
      className: localClass,
      disabled: localProps.disabled || false,
      style: propertyMap(style, cssProperties),
      ...extraProps,
      onClick: undefined,
    };
    return (
      <a {...styleObject} href={href} target={target}>
        {buttonContent}
      </a>
    );
  } else {
    const styleObject = {
      className: localClass,
      disabled: localProps.disabled || false,
      style: propertyMap(style, cssProperties),
      ...extraProps,
    };
    return (
      <button {...styleObject} ref={buttonRef}>
        {buttonContent}
      </button>
    );
  }
}

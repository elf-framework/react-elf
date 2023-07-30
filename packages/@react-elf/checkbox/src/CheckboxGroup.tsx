import React from "react";
import { Checkbox } from "./Checkbox";
import { CheckboxGroupProps } from "@react-elf-types/checkbox";
import { makeCssVariablePrefixMap, propertyMap } from "@react-elf/shared";
import classNames from "classnames";

const cssProperties = makeCssVariablePrefixMap("--elf--checkbox", {
  borderColor: true,
  backgroundColor: true,
  disabledColor: true,
  color: true,
  fontSize: true,
  fontWeight: true,
  height: true,
  padding: true,
  borderRadius: true,
});

export function CheckboxGroup(props: CheckboxGroupProps) {
  const {
    disabled,
    style = {},
    value = [],
    options = [],
    onChange,
    direction = "horizontal",
    size = "medium",
    variant = "default",
  } = props;

  const styleObject = {
    className: classNames([
      "elf--checkbox-group",
      {
        [direction]: true,
      },
    ]),
    disabled: disabled ? "disabled" : undefined,

    style: propertyMap(style, cssProperties),
  };

  return (
    <div {...styleObject}>
      {options.map((it, index) => {
        return (
          <Checkbox
            value={it.value}
            onChange={(e) => {
              onChange(e);
            }}
            checked={value?.includes(it.value)}
            disabled={disabled}
            indeterminate={it.indeterminate}
            size={size}
            variant={variant}
          >
            {it.label}
          </Checkbox>
        );
      })}
    </div>
  );
}

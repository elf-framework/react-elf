import React from "react";
import { CheckboxGroupProps } from "@react-elf-types/checkbox";
import { makeCssVariablePrefixMap, propertyMap } from "@react-elf/shared";
import classNames from "classnames";
import { CheckboxGroupContext } from "./context";
import { useCheckboxGroupState } from "./hooks/useCheckboxGroupState";

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
  const { disabled, style = {}, children, direction = "horizontal" } = props;

  const state = useCheckboxGroupState(props);

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
      <CheckboxGroupContext.Provider value={state}>
        {children}
      </CheckboxGroupContext.Provider>
    </div>
  );
}

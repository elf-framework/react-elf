import React, { useMemo } from "react";
import classNames from "classnames";
import { makeCssVariablePrefixMap, propertyMap } from "@react-elf/shared";
import { RadioGroupProps } from "@react-elf-types/radio";

import { RadioGroupContext } from "./context";
import { useRadioGroupState } from "./hooks/useRadioGroupState";

const cssProperties = makeCssVariablePrefixMap("--elf--radio", {
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

export function RadioGroup(props: RadioGroupProps) {
  const { disabled, style = {}, children, direction = "horizontal" } = props;

  const state = useRadioGroupState(props);

  const localClass = useMemo(() => {
    return classNames("elf--radio-group", {
      [direction]: true,
    });
  }, [direction]);

  const styleObject = {
    className: localClass,
    disabled: disabled ? "disabled" : undefined,
    style: propertyMap(style, cssProperties),
  };

  return (
    <div {...styleObject}>
      <RadioGroupContext.Provider value={state}>
        {children}
      </RadioGroupContext.Provider>
    </div>
  );
}

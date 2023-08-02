import React, { useMemo } from "react";
import classNames from "classnames";
import { FieldProps } from "@react-elf-types/input-editor";
import { makeCssVariablePrefixMap, propertyMap } from "@react-elf/shared";

const cssProperties = makeCssVariablePrefixMap("--elf--field", {
  width: true,
});

export function Field({
  label,
  children,
  help,
  position,
  required = false,
  requiredText = "*",
  optional = false,
  optionalText = "(optional)",
  size,
  disabled,
  validIcon,
  invalid,
  invalidIcon,
  invalidMessage,
  style = {},
}: FieldProps) {
  const localClass = useMemo(() => {
    return classNames("elf--field", {
      [position]: true,
      [size]: true,
      disabled,
    });
  }, [position, size, disabled]);

  const styleObject = {
    className: localClass,
    style: propertyMap(style, cssProperties),
  };

  return (
    <div {...styleObject}>
      {label ? (
        <label className="label">
          {label}
          {required ? <span className="required">{requiredText}</span> : null}
          {optional ? <span className="optional">{optionalText}</span> : null}
        </label>
      ) : undefined}
      {children ? (
        <div className="field-area">
          <div className="field-area-content">
            {children}
            {!invalid && validIcon ? (
              <div className="valid-icon">{validIcon}</div>
            ) : null}
            {invalid && invalidIcon ? (
              <div className="invalid-icon">{invalidIcon}</div>
            ) : null}
          </div>
          {help ? <div className="help">{help}</div> : undefined}
          {invalid ? (
            <div className="invalid">{invalidMessage}</div>
          ) : undefined}
        </div>
      ) : undefined}
    </div>
  );
}

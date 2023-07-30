import React, { useEffect } from "react";
import { CheckboxProps } from "@react-elf-types/checkbox";
import classNames from "classnames";
import { makeCssVariablePrefixMap, propertyMap } from "@react-elf/shared";

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

export function Checkbox(props: CheckboxProps) {
  const {
    disabled,
    style = {},
    value,
    children,
    name,
    checked = false,
    onChange,
    indeterminate = false,
    variant = "default",
    size = "medium",
  } = props;

  const checkboxRef = React.createRef<HTMLInputElement>();

  const styleObject = {
    className: classNames([
      "elf--checkbox",
      {
        disabled,
        [variant]: true,
        [size]: true,
      },
    ]),
    style: propertyMap(style, cssProperties),
  };

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <div {...styleObject}>
      <label>
        <input
          ref={checkboxRef}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          name={name}
          value={value}
          onChange={(e) => onChange?.(e)}
        />
        {children?.length ? (
          <span className="text">{children}</span>
        ) : undefined}
      </label>
    </div>
  );
}

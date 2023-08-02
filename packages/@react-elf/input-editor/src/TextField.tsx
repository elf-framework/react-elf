import React from "react";

import { TextFieldProps } from "@react-elf-types/input-editor";

import { Field } from "./Field";
import { InputEditor } from "./InputEditor";

export function TextField({
  help,
  label,
  size,
  style,
  disabled,
  required,
  requiredText,
  position,
  optional,
  optionalText,
  validIcon,
  invalid,
  invalidIcon,
  invalidMessage,
  inputStyle,
  ...extraProps
}: TextFieldProps) {
  const FieldProps = {
    label,
    help,
    size,
    style,
    disabled,
    required,
    requiredText,
    position,
    optional,
    optionalText,
    invalid,
    validIcon,
    invalidIcon,
    invalidMessage,
  };

  const hasIcon = (!invalid && validIcon) || (invalid && invalidIcon);

  return (
    <Field {...FieldProps}>
      <InputEditor
        {...extraProps}
        disabled={disabled}
        required={required}
        size={size}
        invalid={invalid}
        style={{
          ...inputStyle,
          paddingRight: hasIcon ? "2.6em" : undefined,
        }}
      />
    </Field>
  );
}

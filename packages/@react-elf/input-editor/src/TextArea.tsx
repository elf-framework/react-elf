import React from "react";

import { TextAreaProps } from "@react-elf-types/input-editor";
import { Field } from "./Field";
import { TextAreaEditor } from "./TextAreaEditor";

export function TextArea({
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
  resizable,
  ...extraProps
}: TextAreaProps) {
  const fieldProps = {
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
    <Field {...fieldProps}>
      <TextAreaEditor
        {...extraProps}
        disabled={disabled}
        required={required}
        size={size}
        invalid={invalid}
        resizable={resizable}
        style={{
          ...inputStyle,
          paddingRight: hasIcon ? "2.6em" : undefined,
        }}
      />
    </Field>
  );
}

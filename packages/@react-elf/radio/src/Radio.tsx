import React, { createRef, forwardRef, useContext, useMemo } from "react";
import { makeCssVariablePrefixMap, propertyMap } from "@react-elf/shared";
import { RadioProps } from "@react-elf-types/radio";
import classNames from "classnames";
import { RadioGroupContext } from "./context";

interface RadioItemProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  value?: string | number;
  variant?: string;
  size?: string;
}

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

export function RadioComp(props: RadioProps, ref: React.Ref<HTMLLabelElement>) {
  const {
    disabled,
    style = {},
    value,
    children,
    name,
    checked = false,
    onChange,
    size = "medium",
    variant = "default",
  } = props;

  // Only Radio
  const inputRef = createRef<HTMLInputElement>();

  // for RadioGroup
  let groupState = useContext(RadioGroupContext);

  const localProps: RadioItemProps = {};

  // check if it is a single radio
  if (!groupState) {
    localProps.checked = checked;
    localProps.onChange = onChange;
    localProps.disabled = disabled;
    localProps.value = value;
    localProps.variant = variant;
    localProps.size = size;
  } else {
    // check if it is a radio group
    localProps.checked = groupState.isSelected(value);
    localProps.onChange = (checked) => {
      groupState.setValue(value);
    };
    localProps.disabled = groupState.isDisabled;
    localProps.value = value;
    localProps.variant = groupState.variant;
    localProps.size = groupState.size;
  }

  const localClass = useMemo(() => {
    return classNames([
      "elf--radio",
      {
        disabled: localProps.disabled,
        [localProps.size]: true,
        [localProps.variant]: true,
      },
    ]);
  }, [localProps.disabled, localProps.size, localProps.variant]);

  const styleObject = {
    className: localClass,
    style: propertyMap(style, cssProperties),
  };

  return (
    <div {...styleObject}>
      <label ref={ref}>
        <input
          type="radio"
          ref={inputRef}
          checked={localProps.checked}
          disabled={localProps.disabled}
          name={name}
          value={value}
          onChange={(e) => localProps.onChange?.(e.target.checked)}
        />
        {children?.length ? (
          <span className="text">{children}</span>
        ) : undefined}
      </label>
    </div>
  );
}

export const Radio = forwardRef(RadioComp);

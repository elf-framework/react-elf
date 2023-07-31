import React, {
  Ref,
  createRef,
  forwardRef,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { CheckboxProps } from "@react-elf-types/checkbox";
import classNames from "classnames";
import { makeCssVariablePrefixMap, propertyMap } from "@react-elf/shared";
import { CheckboxGroupContext } from "./context";

interface CheckboxItemProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  value?: string | number;
  variant?: string;
  size?: string;
}

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

export function CheckboxComp(props: CheckboxProps, ref: Ref<HTMLLabelElement>) {
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

  // Only Checkbox
  const inputRef = createRef<HTMLInputElement>();

  // for CheckboxGroup
  let groupState = useContext(CheckboxGroupContext);

  const localProps: CheckboxItemProps = {};

  // check if it is a single checkbox
  if (!groupState) {
    localProps.checked = checked;
    localProps.onChange = onChange;
    localProps.disabled = disabled;
    localProps.value = value;
    localProps.variant = variant;
    localProps.size = size;
  } else {
    localProps.checked = groupState.isSelected(value);
    localProps.onChange = () => {
      groupState.toggleValue(value);
    };
    localProps.disabled = groupState.isDisabled;
    localProps.value = value;
    localProps.variant = groupState.variant;
    localProps.size = groupState.size;
  }

  const localClassName = useMemo(() => {
    return classNames([
      "elf--checkbox",
      {
        disabled: localProps.disabled,
        [localProps.variant]: true,
        [localProps.size]: true,
      },
    ]);
  }, [localProps.disabled, localProps.variant, localProps.size]);

  const styleObject = {
    className: localClassName,
    style: propertyMap(style, cssProperties),
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <div {...styleObject}>
      <label ref={ref}>
        <input
          ref={inputRef}
          type="checkbox"
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

export const Checkbox = forwardRef(CheckboxComp);

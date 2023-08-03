import { SwitchProps } from "@react-elf-types/switch";
import {
  makeCssVariablePrefixMap,
  propertyMap,
  useControlled,
} from "@react-elf/shared";
import classNames from "classnames";
import React, {
  ForwardRefRenderFunction,
  forwardRef,
  useId,
  useImperativeHandle,
  useMemo,
} from "react";
const cssProperties = makeCssVariablePrefixMap("--elf--switch", {
  backgroundColor: true,
  borderRadius: true,
  fontSize: true,
  duration: true,
  activeColor: true,
  width: true,
  height: true,
  handlBackgroundColor: true,
  gap: true,
});

interface SwitchHandle {
  checked: () => void;
  unchecked: () => void;
  isChecked: () => boolean;
}

export const SwitchComp: ForwardRefRenderFunction<SwitchHandle, SwitchProps> = (
  props,
  ref
) => {
  const {
    checked,
    defaultChecked,
    disabled = false,
    variant = "default",
    size = "medium",
    style = {},
    children,
    withLabel = false,
    labels = undefined,
    onClick,
    readOnly = false,
  } = props;

  const id = useId();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isControlled, onChange, currentValue] = useControlled(
    checked,
    defaultChecked,
    props.onChange
  );

  const localClass = useMemo(() => {
    return classNames("elf--switch", {
      [variant]: true,
      [size]: true,
      disabled,
      readonly: readOnly,
      "with-label": withLabel,
    });
  }, [variant, size, disabled, readOnly, withLabel]);

  const styleObject = {
    className: localClass,
    style: propertyMap(style, cssProperties),
  };

  const localId = "switch-checkbox-" + id;

  useImperativeHandle(
    ref,
    () => ({
      checked: () => {
        if (inputRef.current) {
          inputRef.current.checked = true;
        }
      },
      unchecked: () => {
        if (inputRef.current) {
          inputRef.current.checked = false;
        }
      },
      isChecked: () => {
        if (inputRef.current) {
          return inputRef.current.checked;
        }
        return false;
      },
    }),
    [inputRef]
  );

  const properties = {
    disabled,
    readOnly: readOnly ? true : undefined,
    checked: isControlled ? checked : undefined,
    defaultChecked,
  };

  if (isControlled) {
    delete properties.defaultChecked;
  } else {
    delete properties.readOnly;
    delete properties.checked;
  }

  return (
    <div {...styleObject}>
      <input
        id={localId}
        type="checkbox"
        {...properties}
        onClick={onClick}
        onChange={onChange}
      />
      <span className="tools">
        <span className="track"></span>
        {withLabel ? (
          <div className="label-area">
            <div className="unchecked">{labels?.[0]}</div>
            <div className="checked">{labels?.[1]}</div>
          </div>
        ) : undefined}
        <span className="handle"></span>
      </span>
      {children ? <label htmlFor={localId}>{children}</label> : undefined}
    </div>
  );
};

export const Switch = forwardRef<SwitchHandle, SwitchProps>(SwitchComp);

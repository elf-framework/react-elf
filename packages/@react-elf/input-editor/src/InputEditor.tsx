import React, {
  ForwardRefRenderFunction,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import classNames from "classnames";
import { InputEditorProps } from "@react-elf-types/input-editor";
import { makeCssVariablePrefixMap, propertyMap } from "@react-elf/shared";
import { useControlled } from "./hooks/useControlled";
import { useFocusEvent } from "./hooks/useFocusEvent";

const cssProperties = makeCssVariablePrefixMap("--elf--input-editor", {
  width: true,
  borderColor: true,
  backgroundColor: true,
  disabledColor: true,
  color: true,
  fontSize: true,
  fontWeight: true,
  height: true,
  padding: true,
  borderRadius: true,
  placeholderColor: true,
  emptyColor: true,
  paddingRight: true,
});

interface InputEditorHandle {
  focus: () => void;
  select: () => void;
  blur: () => void;
}

export const InputEditorComp: ForwardRefRenderFunction<
  InputEditorHandle,
  InputEditorProps
> = (props, ref) => {
  const { autoFocus = false, focused = false, hover = false } = props;
  const {
    icon,
    tools,
    size = "medium",
    readOnly = false,
    invalid,
    style,
    value,
    defaultValue,
    min,
    max,
    step,
    placeholder,
    disabled,
    type = "text",
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const [isControlled, onChange, currentValue] = useControlled(
    value,
    defaultValue,
    props.onChange
  );

  const [isFocused, onFocus, onBlur] = useFocusEvent(props);

  const localClass = useMemo(() => {
    return classNames([
      "elf--input-editor",
      {
        focused: isFocused,
        hover,
        disabled,
        icon,
        invalid,
        [size]: true,
        readnly: readOnly,
      },
    ]);
  }, [isFocused, hover, disabled, icon, invalid, size, readOnly]);

  const styleObject = {
    className: localClass,
    style: propertyMap(style, cssProperties),
  };

  const inputEvents = {
    onChange,
    onFocus,
    onBlur,
    onInput: props.onInput,
    onKeyDown: props.onKeyDown,
    onKeyUp: props.onKeyUp,
    onKeyPress: props.onKeyPress,
    onSelect: props.onSelect,
    onPaste: props.onPaste,
    onCut: props.onCut,
    onCopy: props.onCopy,
    onClick: props.onClick,
    onDoubleClick: props.onDoubleClick,
    onMouseDown: props.onMouseDown,
    onMouseUp: props.onMouseUp,
    onMouseEnter: props.onMouseEnter,
    onMouseLeave: props.onMouseLeave,
    onMouseOver: props.onMouseOver,
    onMouseOut: props.onMouseOut,
    onMouseMove: props.onMouseMove,
    onContextMenu: props.onContextMenu,
  };

  const properties = {
    type,
    disabled,
    readOnly: readOnly ? true : undefined,
    placeholder: placeholder || "",
    value: isControlled ? value : undefined,
    defaultValue,
    min,
    max,
    step,
  };

  if (isControlled) {
    delete properties.defaultValue;
  } else {
    delete inputEvents.onChange;
    delete properties.readOnly;
    delete properties.value;
  }

  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        inputRef.current?.focus();
      },
      select: () => {
        inputRef.current?.select();
      },
      blur: () => {
        inputRef.current?.blur();
      },
    }),
    [inputRef]
  );

  useEffect(() => {
    if (autoFocus && !isFocused) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [inputRef.current, autoFocus, isFocused]);

  return (
    <div {...styleObject}>
      {icon ? <div className="elf--input-editor-icon">{icon}</div> : undefined}
      <div className="elf--input-area">
        <div className="elf--input-item">
          <input ref={inputRef} {...properties} {...inputEvents} />
        </div>
      </div>
      {tools ? tools : undefined}
    </div>
  );
};

export const InputEditor = forwardRef<HTMLInputElement, InputEditorProps>(
  InputEditorComp
);

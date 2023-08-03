import React, {
  FocusEventHandler,
  ForwardRefRenderFunction,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { makeCssVariablePrefixMap, propertyMap } from "@react-elf/shared";
import { TextAreaEditorProps } from "@react-elf-types/input-editor";
import classNames from "classnames";
import { useControlled } from "./hooks/useControlled";
import { useFocusEvent } from "./hooks/useFocusEvent";

const cssProperties = makeCssVariablePrefixMap("--elf--input-editor", {
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

interface TextAreaEditorHandle {
  focus: () => void;
  select: () => void;
  blur: () => void;
}

export const TextAreaEditorComp: ForwardRefRenderFunction<
  TextAreaEditorHandle,
  TextAreaEditorProps
> = (props, ref) => {
  const {
    icon,
    tools,
    size = "medium",
    readOnly = false,
    invalid,
    disabled,
    value,
    defaultValue,
    rows,
    style,
    resizable,
    placeholder,
    autoFocus,
    hover,
  } = props;

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [isControlled, onChange, currentValue] = useControlled(
    value,
    defaultValue,
    props.onChange
  );

  const [isFocused, onFocus, onBlur] = useFocusEvent(props);

  const localClass = useMemo(() => {
    return classNames([
      "elf--input-editor textarea",
      {
        focused: isFocused,
        hover,
        disabled,
        icon,
        invalid,
        resizable,
        [size]: true,
        readonly: readOnly,
      },
    ]);
  }, [isFocused, hover, disabled, icon, invalid, size, readOnly, resizable]);

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
  };

  const properties = {
    disabled,
    rows,
    readOnly: readOnly ? true : undefined,
    placeholder: placeholder || "",
    value: isControlled ? value : undefined,
    defaultValue,
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
          <textarea ref={inputRef} {...properties} {...inputEvents}>
            {value}
          </textarea>
        </div>
      </div>
      {tools ? tools : undefined}
    </div>
  );
};

export const TextAreaEditor = forwardRef<
  HTMLTextAreaElement,
  TextAreaEditorProps
>(TextAreaEditorComp);

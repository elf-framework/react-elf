import { DomEventType } from "@react-elf-types/shared";
import { FocusEventHandler, useCallback, useState } from "react";

export function useFocusEvent(
  props: DomEventType & { focused?: boolean }
): [boolean, FocusEventHandler<HTMLElement>, FocusEventHandler<HTMLElement>] {
  const [focused, setFocused] = useState(props.focused);

  const onFocus = useCallback<FocusEventHandler<HTMLElement>>(
    (e) => {
      setFocused(true);
      if (e.currentTarget === e.target) {
        props.onFocus?.(e);
      }
      if (!e.currentTarget.contains(e.relatedTarget)) {
        props.onFocusEnter?.(e);
      }
    },
    [props.onFocus, props.onFocusEnter]
  );

  const onBlur = useCallback<FocusEventHandler<HTMLElement>>(
    (e) => {
      setFocused(false);
      if (e.currentTarget === e.target) {
        props.onBlur?.(e);
      }
      if (!e.currentTarget.contains(e.relatedTarget)) {
        props.onFocusLeave?.(e);
      }
    },
    [props.onBlur, props.onFocusLeave]
  );

  return [focused, onFocus, onBlur];
}

import { useCallback, useState } from "react";

export function useControlled(value, defaultValue, onChange) {
  const [state, setState] = useState(defaultValue);
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : state;
  const setValue = useCallback(
    (value) => {
      if (!isControlled) {
        setState(value);
      }
      onChange?.(value);
    },
    [isControlled, onChange]
  );
  return [isControlled, setValue, currentValue];
}

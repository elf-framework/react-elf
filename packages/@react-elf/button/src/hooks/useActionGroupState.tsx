import { useCallback, useState } from "react";
import {
  ActionGroupProps,
  ButtonShape,
  ButtonSize,
  ButtonValue,
  ButtonVariant,
} from "@react-elf-types/button";

export interface ActionGroupState {
  readonly value: readonly ButtonValue[];
  readonly variant: ButtonVariant;
  readonly size: ButtonSize;
  readonly isDisabled: boolean;
  readonly isReadOnly: boolean;
  readonly quiet: boolean;
  readonly shape: ButtonShape;
  readonly thin: boolean;
  readonly outline: boolean;
  readonly iconOnly: boolean;

  isSelected(val: any): boolean;
  setValue(val: any): void;
  toggleValue(val: any): void;
  removeValue(val: any): void;
}

export function useActionGroupState(props: ActionGroupProps): ActionGroupState {
  const [selectedValues, setValue] = useState<ButtonValue[]>(props.value || []);

  const setStateValue = useCallback(
    (value: ButtonValue[], index?: number) => {
      setValue(value);
      props.onChange?.(value);
    },
    [setValue, props.onChange]
  );

  const state = {
    value: selectedValues,
    variant: props.variant,
    size: props.size,
    quiet: props.quiet,
    shape: props.shape,
    thin: props.thin,
    outline: props.outline,
    isDisabled: props.disabled,
    isReadOnly: props.readonly,
    iconOnly: props.iconOnly,
    setValue: (value) => {
      if (props.readonly || props.disabled) {
        return;
      }

      setStateValue(value);
    },
    isSelected: (val: any) => {
      return selectedValues?.includes(val);
    },
    toggleValue: (val: any) => {
      if (props.readonly || props.disabled) {
        return;
      }

      if (selectedValues.includes(val)) {
        setStateValue(selectedValues.filter((v) => v !== val));
      } else {
        setStateValue([...selectedValues, val]);
      }
    },
    removeValue: (val: any) => {
      if (props.readonly || props.disabled) {
        return;
      }

      setStateValue(selectedValues.filter((v) => v !== val));
    },
    addValue: (val: any) => {
      if (props.readonly || props.disabled) {
        return;
      }

      setStateValue([...selectedValues, val]);
    },
  };

  return state;
}

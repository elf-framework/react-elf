import { CheckboxGroupProps } from "@react-elf-types/checkbox";
import { SizeType, VariantType } from "@react-elf-types/shared";
import { useCallback, useState } from "react";

export interface CheckboxGroupState {
  readonly value: readonly string[];
  readonly variant: VariantType;
  readonly size: SizeType;
  readonly isDisabled: boolean;
  readonly isReadOnly: boolean;

  isSelected(val: any): boolean;
  setValue(val: any): void;
  toggleValue(val: any): void;
  removeValue(val: any): void;
}

export function useCheckboxGroupState(
  props: CheckboxGroupProps
): CheckboxGroupState {
  const [selectedValues, setValue] = useState<readonly string[]>(
    props.values || []
  );

  const setStateValue = useCallback(
    (values: readonly string[]) => {
      setValue(values);
      props.onChange?.(values);
    },
    [setValue, props.onChange]
  );

  const state = {
    value: selectedValues,
    variant: props.variant,
    size: props.size,
    setValue: (values) => {
      if (props.readonly || props.disabled) {
        return;
      }

      setStateValue(values);
    },
    isDisabled: props.disabled,
    isReadOnly: props.readonly,
    isSelected: (val: any) => {
      return selectedValues.includes(val);
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

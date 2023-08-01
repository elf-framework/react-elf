import { RadioGroupProps } from "@react-elf-types/radio";
import { SizeType, VariantType } from "@react-elf-types/shared";
import { useCallback, useState } from "react";

export interface RadioGroupState {
  readonly value: string;
  readonly variant: VariantType;
  readonly size: SizeType;
  readonly isDisabled: boolean;
  readonly isReadOnly: boolean;

  isSelected(val: any): boolean;
  setValue(val: any): void;
  toggleValue(val: any): void;
}

export function useRadioGroupState(props: RadioGroupProps): RadioGroupState {
  const [selectedValue, setValue] = useState<string>(props.value || []);

  const setStateValue = useCallback(
    (value: string) => {
      setValue(value);
      props.onChange?.(value);
    },
    [setValue, props.onChange]
  );

  const state = {
    value: selectedValue,
    variant: props.variant,
    size: props.size,
    setValue: (value) => {
      if (props.readonly || props.disabled) {
        return;
      }

      setStateValue(value);
    },
    isDisabled: props.disabled,
    isReadOnly: props.readonly,
    isSelected: (val: any) => {
      return selectedValue === val;
    },
    toggleValue: (val: any) => {
      if (props.readonly || props.disabled) {
        return;
      }

      setStateValue(val);
    },
  };

  return state;
}

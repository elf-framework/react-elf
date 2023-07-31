import { createContext } from "react";
import { CheckboxGroupState } from "./hooks/useCheckboxGroupState";

export const CheckboxGroupContext = createContext<CheckboxGroupState | null>(
  null
);

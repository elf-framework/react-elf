import { createContext } from "react";
import { RadioGroupState } from "./hooks/useRadioGroupState";

export const RadioGroupContext = createContext<RadioGroupState | null>(null);

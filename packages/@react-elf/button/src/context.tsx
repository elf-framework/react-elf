import { createContext } from "react";
import { ActionGroupState } from "./hooks/useActionGroupState";

export const ActionGroupContext = createContext<ActionGroupState | null>(null);

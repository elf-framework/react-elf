import { ReactNode } from "react";

interface ButtonProps {
  /** Whether the button is disabled. */
  isDisabled?: boolean;
  /** The content to display in the button. */
  children?: ReactNode;
  /** The variant of the button. */
  variant?: "primary" | "secondary" | "tertiary";
}

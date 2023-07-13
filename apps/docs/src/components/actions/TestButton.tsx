import React from "react";
import { Button as ElfButton } from "@react-elf/ui";
import "@elf-framework/design-system/style.css";
import { useGlobals } from "@storybook/client-api";

interface ButtonProps {
  style?: {
    /**
     * What background color to use
     */
    backgroundColor?: string;

    /**
     * What font color to use
     */
    textColor?: string;
  };

  /**
   * How large should the button be?
   */
  size?:
    | "extra-small"
    | "xsmall"
    | "small"
    | "default"
    | "large"
    | "extra-large"
    | "xlarge";
  /**
   * Button contents
   */
  children: React.ReactNode;
  /**
   * Button variant
   */
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "danger"
    | "warning"
    | "outline"
    | "light"
    | "dark";
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction hangle
 */
export const Button = ({
  size = "default",
  style = {},
  children,
  variant = "default",
  ...props
}: ButtonProps) => {
  return (
    <ElfButton variant={variant} size={size} style={style} {...props}>
      {children}
    </ElfButton>
  );
};

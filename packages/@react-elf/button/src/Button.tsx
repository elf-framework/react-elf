import { ButtonProps } from "@react-elf-types/button";
import React from "react";

export function Button({ children, variant, ...rest }: ButtonProps) {
  return (
    <button {...rest}>
      {children} Hello, World {variant}
    </button>
  );
}

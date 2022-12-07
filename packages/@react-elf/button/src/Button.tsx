import { ButtonProps } from "@react-elf-types/button";
import React from "react";

export function Button({ children, variant }: ButtonProps) {
  return (
    <button data-variant={variant}>
      {children} Hello, World {variant}
    </button>
  );
}

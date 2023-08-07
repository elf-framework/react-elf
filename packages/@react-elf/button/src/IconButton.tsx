import React from "react";
import { ButtonProps } from "@react-elf-types/button";
import { RoundButton } from "./RoundButton";
import { IconWrapper } from "@react-elf/shared";

export function IconButton({ children, ...props }: ButtonProps) {
  return (
    <RoundButton {...props} iconOnly={true}>
      <IconWrapper>{children}</IconWrapper>
    </RoundButton>
  );
}

import React from "react";
import { VBoxProps } from "@react-elf-types/layout";
import { Flex } from "./Flex";

export function VBox(props: VBoxProps) {
  const { style = {}, children, gap = undefined } = props;

  return (
    <Flex stack style={style} gap={gap}>
      {children}
    </Flex>
  );
}

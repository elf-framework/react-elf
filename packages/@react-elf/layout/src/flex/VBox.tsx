import React from "react";
import { VBoxProps } from "@react-elf-types/layout";
import { Flex } from "./Flex";

export function VBox(props: VBoxProps) {
  const { style = {}, children } = props;

  return (
    <Flex stack={true} style={style}>
      {children}
    </Flex>
  );
}

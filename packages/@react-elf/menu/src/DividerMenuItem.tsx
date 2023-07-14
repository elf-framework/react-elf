import React from "react";
import { DividerMenuItemProps } from "@react-elf-types/menu";

export function DividerMenuItem({ dashed = false }: DividerMenuItemProps) {
  return <li className="elf--divider" data-dashed={dashed} />;
}

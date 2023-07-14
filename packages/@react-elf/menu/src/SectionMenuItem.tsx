import React from "react";
import { SectionMenuItemProps } from "@react-elf-types/menu";

export function SectionMenuItem({ title = "" }: SectionMenuItemProps) {
  return <li className="section-title">{title}</li>;
}

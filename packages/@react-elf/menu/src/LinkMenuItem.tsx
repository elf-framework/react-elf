import React from "react";
import { LinkMenuItemProps } from "@react-elf-types/menu";

export function LinkMenuItem({ rootClose, title, link }: LinkMenuItemProps) {
  return (
    <li className="link">
      <a href={link} onClick={rootClose}>
        {title}
      </a>
    </li>
  );
}

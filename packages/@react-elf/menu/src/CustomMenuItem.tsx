import { CustomMenuItemProps } from "@react-elf-types/menu";
export function CustomMenuItem({ render, rootClose }: CustomMenuItemProps) {
  return <li className="custom">{render?.({ rootClose })}</li>;
}

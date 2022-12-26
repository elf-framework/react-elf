import { ButtonProps } from "@react-elf-types/button";
import { Button } from "./Button";

export function OutlineButton(props: ButtonProps) {
  return (<Button {...props} outline />);
}

import { ButtonProps } from "@react-elf-types/button";
import { Button } from "./Button";

export function RoundButton(props: ButtonProps) {
  return (<Button {...props} shape="round" />);
}

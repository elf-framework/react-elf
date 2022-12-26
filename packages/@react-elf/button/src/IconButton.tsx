import { ButtonProps } from "@react-elf-types/button";
import { RoundButton } from "./RoundButton";

export function IconButton(props: ButtonProps) {
    return (<RoundButton {...props} iconOnly={true} />);
  }
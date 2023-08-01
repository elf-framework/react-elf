import { CommonStyle, VariantType } from "@react-elf-types/shared";

export interface ColorMixerProps {
  color: string;
  onChange?: (color: string) => void;
  onLastChange?: (color: string) => void;
  style: CommonStyle;
  hideSlide?: boolean;
  hideInput?: boolean;
  shadow?: boolean;
  disabled?: boolean;
  width?: number;
  height?: number;
}

import type { ReactNode } from "react";
import { CommonStyle } from "@react-elf-types/shared";

export interface GhostProps {
  animated?: boolean;
  style?: CommonStyle;
  children?: ReactNode;
}

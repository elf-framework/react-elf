import type { ReactNode } from "react";
import { AnimationEvent } from "react";
import { CommonStyle, SizeType, VariantType } from "@react-elf-types/shared";

export type AnimationType =
  | "spin"
  | "ping"
  | "fade"
  | "scaledown"
  | "bounce"
  | "flash"
  | "pulse"
  | "rubberBand"
  | "shake"
  | "headShake"
  | "swing"
  | "tada"
  | "wobble"
  | "jello"
  | "heartBeat";

export interface AnimationProps {
  name?: AnimationType;
  duration?: number | `${number}s` | `${number}ms`;
  delay?: number;
  iterationCount?: string;
  timingFunction?: string;
  children?: ReactNode;
  play?: boolean;
  style?: CommonStyle;

  onEnd?: (e: AnimationEvent<HTMLDivElement>) => void;
  onIteration?: (e: AnimationEvent<HTMLDivElement>) => void;
  onStart?: (e: AnimationEvent<HTMLDivElement>) => void;
}

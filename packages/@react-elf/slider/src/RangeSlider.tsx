import React, { ForwardRefRenderFunction, forwardRef } from "react";
import { SliderProps } from "@react-elf-types/slider";
import { SliderHandle } from "./utils";

const RangeSliderComp: ForwardRefRenderFunction<SliderHandle, SliderProps> = (
  props,
  ref
) => {
  return <div></div>;
};

export const RangeSlider = forwardRef<SliderHandle, SliderProps>(
  RangeSliderComp
);

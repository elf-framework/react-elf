import React, { ForwardRefRenderFunction, forwardRef } from "react";
import { SliderProps } from "@react-elf-types/slider";
import { SliderHandle } from "./utils";
import { SingleSlider } from "./SingleSlider";
import { RangeSlider } from "./RangeSlider";

const SliderComp: ForwardRefRenderFunction<SliderHandle, SliderProps> = (
  props,
  ref
) => {
  const { type = "single", ...extraProps } = props;

  return type === "single" ? (
    <SingleSlider ref={ref} type="single" {...extraProps} />
  ) : (
    <RangeSlider ref={ref} type="range" {...extraProps} />
  );
};

export const Slider = forwardRef<SliderHandle, SliderProps>(SliderComp);

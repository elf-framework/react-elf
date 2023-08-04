import React, {
  ForwardRefRenderFunction,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { SliderProps } from "@react-elf-types/slider";
import {
  makeCssVariablePrefixMap,
  propertyMap,
  useControlled,
} from "@react-elf/shared";
import {
  SliderHandle,
  calculateValue,
  cssProperties,
  initValue,
} from "./utils";
import classNames from "classnames";

const SingleSliderComp: ForwardRefRenderFunction<SliderHandle, SliderProps> = (
  props,
  ref
) => {
  const {
    label,
    labelPosition = "top",
    min = 0,
    max = 100,
    step = 1,
    value,
    defaultValue,
    valuePlacement = "none",
    showTrigger = "always",
    showValue = false,
    size = "medium",
    variant = "default",
    fill = false,
    fillOffset = 0,
    disabled = false,
    readOnly = false,
    style = {},
    valueFunc = initValue,
    fitted = false,
  } = props;

  const trackInfo = useRef({
    left: 0,
    width: 0,
  });
  const trackRef = useRef<HTMLDivElement>(null);
  const [isControlled, onChange, currentValue] = useControlled(
    value,
    defaultValue,
    props.onChange
  );

  useImperativeHandle(ref, () => ({
    getValue: () => currentValue,
    setValue: (value) => {},
  }));

  const onInputCallback = useCallback(
    (clientX: number) => {
      if (trackInfo.current.width === 0) {
        return;
      }

      const currentPosValue = calculateValue({
        min,
        max,
        step,
        left: trackInfo.current.left,
        width: trackInfo.current.width,
        currentX: clientX,
      });

      onChange && onChange(currentPosValue);
    },
    [onChange, min, max, step, currentValue]
  );

  const onPointerStart = useCallback(
    (e) => {
      const onPointerMove = ({ clientX }) => {
        const { left, width } = trackRef.current.getBoundingClientRect();

        trackInfo.current.left = left;
        trackInfo.current.width = width;

        onInputCallback(clientX);
      };

      const onPointerEnd = () => {
        document.removeEventListener("pointermove", onPointerMove);
        document.removeEventListener("pointerup", onPointerEnd);
      };

      document.addEventListener("pointermove", onPointerMove);
      document.addEventListener("pointerup", onPointerEnd);

      onInputCallback(e.clientX);
    },
    [trackRef.current, trackInfo.current, onInputCallback]
  );

  const localClass = useMemo(() => {
    return classNames("elf--slider", {
      [variant]: true,
      [size]: true,
      disabled,
      readonly: readOnly,
      ["placement-" + valuePlacement]: true,
      [showTrigger]: true,
      ["show-value"]: showValue,
      ["label-position-" + labelPosition]: true,
      fitted,
    });
  }, [
    variant,
    size,
    disabled,
    readOnly,
    valuePlacement,
    showTrigger,
    showValue,
    labelPosition,
    fitted,
  ]);

  const styleObject = {
    className: localClass,
    style: propertyMap(style, cssProperties),
  };

  const currentSliderValue = Math.max(
    min,

    // if value is controlled, use props.value
    // else use currentValue
    Math.min(max, isControlled ? props.value : currentValue)
  );

  const currenValueOffset = ((currentSliderValue - min) / (max - min)) * 100;
  const progressStartOffset = ((fillOffset - min) / (max - min)) * 100;

  const isPrevValue = currentSliderValue < fillOffset;
  const startOffset = Math.min(currenValueOffset, progressStartOffset);
  const width = Math.abs(currenValueOffset - progressStartOffset);

  const lastValue =
    typeof valueFunc === "function"
      ? valueFunc(currentSliderValue)
      : currentSliderValue;

  return (
    <div {...styleObject}>
      {label ? (
        <div className="label-area">
          <label className="label">{label}</label>
          {labelPosition === "top" ? (
            <span className="value">{lastValue}</span>
          ) : undefined}
        </div>
      ) : undefined}
      <div className="range-area">
        <div
          className="range-track"
          ref={trackRef}
          onPointerDown={onPointerStart}
        >
          {fill ? (
            <div
              className="range-progress"
              style={{ left: `${startOffset}%`, width: `${width}%` }}
            ></div>
          ) : undefined}
          <div
            className="thumb"
            style={{
              left: isPrevValue ? `${startOffset}%` : `${startOffset + width}%`,
            }}
          >
            {showValue && !label ? (
              <div className="thumb-value">{lastValue}</div>
            ) : undefined}
          </div>
        </div>
      </div>
      {label && labelPosition === "side" ? (
        <div className="value-area">
          <span className="value">{lastValue}</span>
        </div>
      ) : undefined}
    </div>
  );
};

export const SingleSlider = forwardRef<SliderHandle, SliderProps>(
  SingleSliderComp
);

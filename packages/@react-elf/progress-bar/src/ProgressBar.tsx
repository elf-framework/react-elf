import React, {
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle,
  useMemo,
} from "react";
import classNames from "classnames";

import { ProgressBarProps } from "@react-elf-types/progress-bar";
import { makeCssVariablePrefixMap, propertyMap } from "@react-elf/shared";

const cssProperties = makeCssVariablePrefixMap("--elf--progressbar", {
  backgroundColor: true,
  color: true,
  borderRadius: true,
  fontSize: true,
  duration: true,
});

const PERCENT_NUMBER = 100;

function converValueToPercent(value) {
  return value + "%";
}

interface ProgressBarHandle {
  setValue: (value: number) => void;
}

const ProgressBarComp: ForwardRefRenderFunction<
  ProgressBarHandle,
  ProgressBarProps
> = (props, ref) => {
  const {
    min = 0,
    max = PERCENT_NUMBER,
    value = min,
    showValue = true,
    valueFunction = converValueToPercent,
    title,
    variant = "default",
    size = "medium",
    style = {},
    shape = "round",

    indeterminate = false,
  } = props;

  const localClass = useMemo(() => {
    return classNames("elf--progressbar", {
      [variant]: true,
      [size]: true,
      [shape]: true,
      indeterminate,
    });
  }, [variant, size, indeterminate, shape]);

  useImperativeHandle(ref, () => ({
    setValue: (value) => {
      console.log("setValue", value);
    },
  }));

  const styleObject = {
    className: localClass,
    style: propertyMap(style, cssProperties),
  };

  const localValue = (value - min) / (max - min);
  const percentValue = Math.round(localValue * PERCENT_NUMBER);

  return (
    <div {...styleObject}>
      {title ? (
        <div className="title-area">
          <label>{title}</label>
          {showValue && !indeterminate ? (
            <span> {valueFunction(percentValue)} </span>
          ) : undefined}
        </div>
      ) : undefined}
      <div className="progress-area">
        <div className="progress" style={{ width: `${percentValue}%` }}></div>
      </div>
    </div>
  );
};

export const ProgressBar = forwardRef<ProgressBarHandle, ProgressBarProps>(
  ProgressBarComp
);

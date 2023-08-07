import React, { ForwardRefRenderFunction, forwardRef, useMemo } from "react";
import classNames from "classnames";

import { makeCssVariablePrefixMap, propertyMap } from "@react-elf/shared";
import { ProgressCircleProps } from "@react-elf-types/progress-circle";

const cssProperties = makeCssVariablePrefixMap("--elf--progress-circle", {
  backgroundColor: true,
  color: true,
  duration: true,
  offset: true,
  width: true,
});

interface ProgressCircleHandle {}

const ProgressCircleComp: ForwardRefRenderFunction<
  ProgressCircleHandle,
  ProgressCircleProps
> = (props, ref) => {
  const {
    min = 0,
    max = 100,

    variant = "default",
    size = "medium",
    style = {},
    value,
    indeterminate = false,
    animated = false,
    animationType = "normal",
  } = props;

  const localClass = useMemo(() => {
    return classNames("elf--progress-circle", {
      [variant]: true,
      [size]: true,
      animated,
      indeterminate,
      [animationType]: true,
    });
  }, [variant, size, indeterminate, animated, animationType]);

  const currentValue = typeof value === "number" ? value : min;
  const percentValue = (currentValue - min) / (max - min);

  const styleObject = {
    className: localClass,
    style: propertyMap(
      {
        ...style,
        offset: percentValue,
      },
      cssProperties
    ),
  };

  return (
    <div {...styleObject}>
      <div className="progress-area">
        <svg>
          <circle className="progress-circle track" r="50%" cx="50%" cy="50%" />
          <circle className="progress-circle fill" r="50%" cx="50%" cy="50%" />
        </svg>
      </div>
    </div>
  );
};

export const ProgressCircle = forwardRef<
  ProgressCircleHandle,
  ProgressCircleProps
>(ProgressCircleComp);

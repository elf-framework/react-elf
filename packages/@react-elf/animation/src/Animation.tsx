import React, {
  ForwardRefRenderFunction,
  Ref,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from "react";

import { makeCssVariablePrefixMap, propertyMap } from "@react-elf/shared";
import { AnimationProps } from "@react-elf-types/animation";

const cssProperties = makeCssVariablePrefixMap("--elf--animation", {
  name: true,
  iterationCount: true,
  timingFunction: true,
  duration: true,
  delay: true,
  playState: true,
});

interface AnimationHandle {
  play: () => void;
  pause: () => void;
  cancel: () => void;
}

export const AnimationComp: ForwardRefRenderFunction<
  AnimationHandle,
  AnimationProps
> = (props, ref) => {
  const {
    name = "spin",
    delay = "0s",
    iterationCount,
    timingFunction,
    duration = "1s",
    style = {},
    children,
    play = false,
    onEnd,
    onIteration,
    onStart,
  } = props;

  const localRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    play: () => {
      localRef.current?.style.setProperty(
        "--elf--animation-play-state",
        "running"
      );
    },
    pause: () => {
      localRef.current?.style.setProperty(
        "--elf--animation-play-state",
        "paused"
      );
    },
    cancel: () => {},
  }));

  const onAnimationStart = useCallback((e) => onStart?.(e), [onStart]);
  const onAnimationEnd = useCallback((e) => onEnd?.(e), [onEnd]);
  const onAnimationIteration = useCallback(
    (e) => onIteration?.(e),
    [onIteration]
  );

  const styleObject = {
    className: "elf--animation",
    style: propertyMap(
      {
        ...style,
        duration,
        name,
        iterationCount,
        timingFunction,
        delay,
        playState: play ? "running" : "paused",
      },
      cssProperties
    ),
  };

  return (
    <div
      {...styleObject}
      ref={localRef}
      onAnimationStart={onAnimationStart}
      onAnimationEnd={onAnimationEnd}
      onAnimationIteration={onAnimationIteration}
    >
      {children}
    </div>
  );
};

export const Animation = forwardRef<AnimationHandle, AnimationProps>(
  AnimationComp
);

export const SpinAnimation = forwardRef<AnimationHandle, AnimationProps>(
  (props, ref) => {
    return <Animation {...props} ref={ref} name="spin" />;
  }
);

// Animation.ping = function (props) {
//   return <Animation {...props} name="ping" />;
// };

// Animation.fade = function (props) {
//   return <Animation {...props} name="fade" />;
// };

// Animation.scaledown = function (props) {
//   return <Animation {...props} name="scaledown" />;
// };

// Animation.bounce = function (props) {
//   return <Animation {...props} name="bounce" />;
// };

// Animation.flash = function (props) {
//   return <Animation {...props} name="flash" />;
// };

// Animation.pulse = function (props) {
//   return <Animation {...props} name="pulse" />;
// };

// Animation.rubberBand = function (props) {
//   return <Animation {...props} name="rubberBand" />;
// };

// Animation.shake = function (props) {
//   return <Animation {...props} name="shake" />;
// };

// Animation.headShake = function (props) {
//   return <Animation {...props} name="headShake" />;
// };

// Animation.swing = function (props) {
//   return <Animation {...props} name="swing" />;
// };

// Animation.tada = function (props) {
//   return <Animation {...props} name="tada" />;
// };

// Animation.wobble = function (props) {
//   return <Animation {...props} name="wobble" />;
// };

// Animation.jello = function (props) {
//   return <Animation {...props} name="jello" />;
// };

// Animation.heartBeat = function (props) {
//   return <Animation {...props} name="heartBeat" />;
// };

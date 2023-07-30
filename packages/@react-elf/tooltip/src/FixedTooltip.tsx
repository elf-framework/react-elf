import React, { useCallback, useRef } from "react";
import { tooltip } from "./index";
import { TooltipProps } from "@react-elf-types/tooltip";

export function FixedTooltip({
  children,
  message,
  ...tooltipProps
}: TooltipProps) {
  const tooltipRef = useRef(null);

  const onMouseEnter = useCallback(
    (e) => {
      const target = e.target;
      const labelRect = target.getBoundingClientRect();
      const { left, top, width, height, right, bottom } = labelRect;

      tooltipRef.current = tooltip({
        placement: "top",
        message,
        ...tooltipProps,
        style: {
          left,
          top,
          width,
          height,
          right,
          bottom,
        },
      });
    },
    [message]
  );

  const onMouseLeave = useCallback(() => {
    tooltipRef.current.close();
    tooltipRef.current.remove();
    tooltipRef.current = null;
  }, [message]);

  return (
    <div
      className="elf--fixed-tooltip"
      style={{
        display: "inline-block",
        width: "fit-content",
        height: "fit-content",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}

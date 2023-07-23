import { propertyMap } from "@react-elf/shared";
import classNames from "classnames";
import React, { useMemo } from "react";

import { FlexProps } from "@react-elf-types/layout";

export function Flex(props: FlexProps) {
  const {
    style = {},
    className = "",
    children,
    stack,
    wrap = false,
    sameWidth = false,
    direction = "row",
    gap = undefined,
    columnGap = undefined,
    rowGap = undefined,
    justifyContent = undefined,
  } = props;

  const localClass = useMemo(() => {
    return classNames("elf--flex", className, {
      stack,
      wrap,
      "same-width": sameWidth,
    });
  }, [className, stack, wrap, sameWidth]);

  const styleObject = {
    className: localClass,

    style: {
      ...propertyMap(
        {
          gap,
          flexDirection: direction,
          justifyContent,
          columnGap,
          rowGap,
          ...style,
        },
        {}
      ),
    },
  };

  return <div {...styleObject}>{children}</div>;
}

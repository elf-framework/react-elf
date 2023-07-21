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
      ...propertyMap(style, {}),
    },
  };

  return <div {...styleObject}>{children}</div>;
}

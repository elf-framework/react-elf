import React, { useMemo } from "react";
import { DividerProps } from "@react-elf-types/divider";
import { makeCssVariablePrefixMap, propertyMap } from "@react-elf/shared";
import classNames from "classnames";

const cssProperties = makeCssVariablePrefixMap("--elf--divider", {
  color: true,
  margin: true,
  height: true,
  borderStyle: true,
});

export function Divider(props: DividerProps) {
  const {
    style = {},
    variant = "default",
    size = "small",
    margin = "10px",
    orientation = "horizontal",
  } = props;

  const localClass = useMemo(() => {
    return classNames("elf--divider", {
      [size]: true,
      [variant]: true,
      [orientation]: true,
    });
  }, [size, variant, orientation]);

  const styleObject = {
    className: localClass,
    style: {
      ...propertyMap(
        {
          ...style,
          margin,
        },
        cssProperties
      ),
    },
  };

  return (
    <div {...styleObject}>
      <div className="elf--divider-inner"></div>
    </div>
  );
}

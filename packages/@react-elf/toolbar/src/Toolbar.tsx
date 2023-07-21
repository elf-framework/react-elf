import React, { useMemo } from "react";
import classNames from "classnames";

import { KeyValue } from "@react-elf-types/shared";
import { makeCssVariablePrefixMap, propertyMap } from "@react-elf/shared";
import { ToolbarProps } from "@react-elf-types/toolbar";

import { ToolbarItem } from "./items/ToolbarItem";

function makeToolbarItem(items = [], options = {}) {
  return items.map((it, index) => {
    const ref = `${it.type || "item"}${index}`;

    return <ToolbarItem key={ref} {...it} {...options} />;
  });
}

const cssProperties = makeCssVariablePrefixMap("--elf--toolbar", {
  backgroundColor: true,
  color: true,
  height: true,
  align: true,
});

export function Toolbar(props: ToolbarProps) {
  const {
    style = {},
    align = "space-between",
    variant = "default",
    rounded = false,
    emphasized = false,
    items = [],
    className,
  } = props;

  const localClass = useMemo(() => {
    return classNames(
      "elf--toolbar",
      {
        [align]: true,
        rounded,
        emphasized,
        [variant]: true,
      },
      className
    );
  }, [align, variant, rounded, emphasized, className]);

  const styleObject = {
    className: localClass,
    style: propertyMap(style as KeyValue, cssProperties),
  };

  return (
    <div {...styleObject} onContextMenu={(e) => e.preventDefault()}>
      {makeToolbarItem(items, {
        emphasized,
      })}
    </div>
  );
}

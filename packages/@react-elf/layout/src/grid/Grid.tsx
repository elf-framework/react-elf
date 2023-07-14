import { GridProps } from "@react-elf-types/layout";
import { propertyMap, splitStyleKeyAndNoneStyleKey } from "@react-elf/shared";
import classNames from "classnames";
import React, { useMemo } from "react";

function makeTemplates(arr) {
  if (typeof arr === "number") {
    arr = Array.from({ length: arr }, () => 1);
  } else if (Array.isArray(arr) === false) {
    arr = [arr];
  }

  if (arr.length === 0) {
    return undefined;
  }

  return arr
    .map((it: any) => (typeof it === "number" ? `${it}fr` : it))
    .join(" ");
}

export function Grid(props: GridProps) {
  const {
    className = "",
    style = {},
    columns = [],
    rows = [],
    gap,
    columnGap,
    rowGap,
    children,
    ...extraStyle
  } = props;

  const { style: styleProperties, noneStyle } =
    splitStyleKeyAndNoneStyleKey(extraStyle);

  const localClass = useMemo(() => {
    return classNames("elf--grid", className);
  }, [className]);

  const styleObject = {
    className: localClass,

    style: {
      gridTemplateColumns: makeTemplates(columns),
      gridTemplateRows: makeTemplates(rows),
      gap,
      columnGap,
      rowGap,
      ...propertyMap({ ...style, ...styleProperties }, {}),
    },
    ...noneStyle,
  };

  // 필요없는 스타일 삭제
  Object.keys(styleObject.style).forEach((key) => {
    if (styleObject.style[key] === undefined) {
      delete styleObject.style[key];
    }
  });

  return <div {...styleObject}>{children}</div>;
}

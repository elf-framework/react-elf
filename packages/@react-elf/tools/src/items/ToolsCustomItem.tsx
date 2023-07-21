import React, { useMemo } from "react";
import classNames from "classnames";
import { ToolsCustomItemType } from "@react-elf-types/tools";

export function ToolsCustomItem({
  render,
  hoverable = true,
  style = {},
}: ToolsCustomItemType) {
  const localClass = useMemo(() => {
    return classNames("elf--tools-item custom", {
      hoverable,
    });
  }, [hoverable]);

  return (
    <div className={localClass} style={style}>
      {render?.()}
    </div>
  );
}

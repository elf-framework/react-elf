import React from "react";
import { ColumnProps } from "@react-elf-types/layout";

export function Column({
  children,
  span = 1,
  style,
  ...extraProps
}: ColumnProps) {
  return (
    <div
      className="elf--column"
      {...extraProps}
      style={
        {
          ...style,
          gridColumn: `span ${span}`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}

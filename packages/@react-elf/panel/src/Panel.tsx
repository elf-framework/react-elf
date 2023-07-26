import React, { useMemo } from "react";
import { makeCssVariablePrefixMap, propertyMap } from "@react-elf/shared";
import { PanelProps } from "@react-elf-types/panel";
import classNames from "classnames";

const cssProperties = makeCssVariablePrefixMap("--elf--panel", {
  backgroundColor: true,
  color: true,
  height: true,
  hoverColor: true,
  borderColor: true,
  boxShadow: true,
  padding: true,
  borderRadius: true,
});

export function Panel(props: PanelProps) {
  const {
    style = {},
    children,
    theme,
    title = "",
    tools = [],
    mode = "default",
    footer,
  } = props;

  const localClass = useMemo(() => {
    return classNames("elf--panel", { [mode]: true });
  }, [mode]);

  const styleObject = {
    className: localClass,
    "data-theme": theme,
    style: propertyMap(style, cssProperties),
  };

  return (
    <div {...styleObject}>
      {title ? (
        <div className="elf--panel-title">
          <div className="elf--panel-title-text">{title}</div>
          {tools ? (
            <div className="elf--panel-title-tools">{tools}</div>
          ) : undefined}
        </div>
      ) : undefined}
      <div className="elf--panel-content">{children}</div>
      {footer ? <div className="elf--panel-footer">{footer}</div> : undefined}
    </div>
  );
}

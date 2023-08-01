import React, { useMemo } from "react";
import { HelpTextProps } from "@react-elf-types/help-text";
import { makeCssVariablePrefixMap, propertyMap } from "@react-elf/shared";
import classNames from "classnames";

const cssProperties = makeCssVariablePrefixMap("--elf--help-text", {
  color: true,
});

export function HelpText(props: HelpTextProps) {
  const {
    variant = "default",
    size = "medium",
    children,
    icon,
    style = {},
    disabled = false,
    ...extrProps
  } = props;

  const localClass = useMemo(() => {
    return classNames("elf--help-text", {
      [variant]: true,
      [size]: true,
      disabled,
    });
  }, [variant, size, disabled]);

  const styleObject = {
    className: localClass,
    style: propertyMap(style, cssProperties),
    ...extrProps,
  };

  return (
    <div {...styleObject}>
      {icon && <span className="icon">{icon}</span>}
      {children ? <div className="content">{children}</div> : null}
    </div>
  );
}

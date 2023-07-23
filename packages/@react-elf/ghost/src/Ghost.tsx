import { makeCssVariablePrefixMap, propertyMap } from "@react-elf/shared";
import { GhostProps } from "@react-elf-types/ghost";
import classNames from "classnames";
import React, { useMemo } from "react";

const cssProperties = makeCssVariablePrefixMap("--elf--ghost", {
  width: true,
  height: true,
  animationName: true,
  animationDuration: true,
});

export function Ghost(props: GhostProps) {
  const { style = {}, animated = false, children } = props;

  const localClass = useMemo(() => {
    return classNames("elf--ghost", {
      animated,
    });
  }, [animated]);

  const localStyle = useMemo(() => {
    return propertyMap(style, cssProperties);
  }, [style]);

  return (
    <div className={localClass} style={localStyle}>
      {children ? children : <>&nbsp;</>}
    </div>
  );
}

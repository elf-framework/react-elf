import { BadgeProps } from "@react-elf-types/badge";
import { makeCssVariablePrefixMap, propertyMap } from "@react-elf/shared";
import classNames from "classnames";
import { useMemo } from "react";

const cssProperties = makeCssVariablePrefixMap("--elf--badge", {
  backgroundColor: true,
  color: true,
  borderColor: true,
  borderRadius: true,
  fontSize: true,
  offset: true,
});

export function Badge(props: BadgeProps) {
  const {
    style = {},
    children,
    variant = "default",
    filled = false,
    disabled = false,
    readOnly = false,
    size = "small",
    fixed = false,
    placement = "none",
  } = props;

  const localClass = useMemo(() => {
    const placementClass = fixed ? `placement-${placement}` : "";

    return classNames(
      "elf--badge",
      {
        [variant]: true,
        filled,
        disabled,
        readonly: readOnly,
        [size]: true,
        fixed,
      },
      placementClass
    );
  }, [variant, filled, disabled, readOnly, size, fixed, placement]);

  const styleObject = {
    className: localClass,
    style: propertyMap(style, cssProperties),
  };

  return (
    <div {...styleObject}>
      <label>{children}</label>
    </div>
  );
}

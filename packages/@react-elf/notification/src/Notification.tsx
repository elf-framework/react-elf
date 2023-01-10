import { NotificationProps } from "@react-elf-types/notification";
import { makeCssVariablePrefixMap, propertyMap } from "@react-elf/shared";
import classNames from "classnames";
import { useMemo } from "react";

const cssProperties = makeCssVariablePrefixMap("--elf--notification", {
  backgroundColor: true,
  color: true,
  width: true,
  height: true,
  hoverColor: true,
  borderColor: true,
  boxShadow: true,
  toolsBorderColor: true,
  toolsBorderRadius: true,
});

export function Notification(props: NotificationProps) {
  const {
    style = {},
    icon,
    children,
    tools = [],
    direction = "top-left",
  } = props;

  const localClass = useMemo(() => {
    return classNames("elf--notification", {
      [direction]: true,
      "has-icon": icon,
    });
  }, [direction, icon]);

  const styleObject = {
    className: localClass,
    style: propertyMap(style, cssProperties),
  };

  return (
    <div {...styleObject} onContextMenu={(e) => e.preventDefault()}>
      {icon ? <div className="icon">{icon}</div> : undefined}
      <div className="content">
        <div className="text">{children}</div>
      </div>
      {tools?.length ? <div className="tools">{tools}</div> : undefined}
    </div>
  );
}


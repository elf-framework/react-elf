import React from "react";
import { makeCssVariablePrefixMap, propertyMap } from "@react-elf/shared";
import { AlertProps } from "@react-elf-types/alert";
import { useCallback, useMemo, useState } from "react";
import classNames from "classnames";

const cssProperties = makeCssVariablePrefixMap("--elf--alert", {
  borderColor: true,
  backgroundColor: true,
  selectedBackgroundColor: true,
  disabledColor: true,
  color: true,
  fontSize: true,
  fontWeight: true,
  height: true,
  padding: true,
  borderRadius: true,
});

export function Alert(props: AlertProps) {
  const {
    variant = "default",
    title,
    children,
    shape = "rect",
    style = {},
    closable = false,
    dismissable = false,
    delay = 0,
    actions,
    weak = false,
    icon,
    ...extrProps
  } = props;
  const [localDelay, setLocalDelay] = useState(delay);
  const [hide, setHide] = useState(false);

  const hideCallback = useCallback(
    (hideDelay = 0) => {
      setLocalDelay(hideDelay);
    },
    [setLocalDelay]
  );

  const localClass = useMemo(() => {
    return classNames("elf--alert", {
      [variant]: true,
      weak,
      hide,
      closable,
      [shape]: true,
      dismissable,
    });
  }, [variant, weak, hide, closable, shape, dismissable]);

  const styleObject = {
    className: localClass,
    style: {
      ...propertyMap(style, cssProperties),
      ...{
        transition: `opacity ${localDelay}ms ease-in-out`,
        opacity: hide ? 0 : 1,
      },
    },
    ...extrProps,
  };

  const titleIcon: any = title && icon ? icon : undefined;
  const contentIcon = children && icon && !title ? icon : undefined;

  const titleActions = title && actions ? actions : undefined;
  const contentActions = children && actions && !title ? actions : undefined;

  return (
    <div
      {...styleObject}
      onContextMenu={(e) => e.preventDefault()}
      onTransitionEnd={() => {
        this.props.onHide && this.props.onHide();
        this.destroy(true);
      }}
    >
      {title ? (
        <div className="elf--alert-title">
          {titleIcon} <span>{title}</span>{" "}
          {titleActions ? (
            <div className="elf--alert-actions">{titleActions}</div>
          ) : undefined}
        </div>
      ) : null}
      {children ? (
        <div className="elf--alert-content">
          {contentIcon} <span>{children}</span>{" "}
          {contentActions ? (
            <div className="elf--alert-actions">{contentActions}</div>
          ) : undefined}
        </div>
      ) : null}
      {closable ? (
        <div
          className="elf--alert-close"
          onClick={() => {
            setHide(true);
            if (localDelay === 0) {
              this.props.onHide && this.props.onHide();
              this.destroy(true);
            }
          }}
        >
          &times;
        </div>
      ) : null}
    </div>
  );
}

import React, { useEffect, useMemo, useState } from "react";
import classNames from "classnames";

import { ToastProps } from "@react-elf-types/toast";
import { Button } from "@react-elf/button";
import { makeCssVariablePrefixMap, propertyMap } from "@react-elf/shared";

const cssProperties = makeCssVariablePrefixMap("--elf--toast", {
  backgroundColor: true,
  color: true,
  height: true,
  hoverColor: true,
  borderColor: true,
  boxShadow: true,
  toolsBorderColor: true,
  toolsBorderRadius: true,
  hgap: true,
  vgap: true,
});

export function Toast(props: ToastProps) {
  const {
    style = {},
    children,
    delay = 0,
    animationDelay = 300,
    icon,
    direction = "bottom",
    closable,
    tools,
    visible = false,
    variant = undefined,
    onClose,
    onShow,
  } = props;
  const [localDelay, setLocalDelay] = useState(delay);
  const [hide, setHide] = useState(false);

  const localClass = useMemo(() => {
    return classNames("elf--toast", {
      hide,
      [direction]: true,
      [variant]: true,
    });
  }, [hide, visible, direction, variant]);

  const styleObject = {
    className: localClass,
    style: {
      ...propertyMap(style, cssProperties),
      // FIXME: Toast animation delay
      transition: `opacity ${animationDelay}ms ease-in-out, transform  ${animationDelay}ms ease-in-out`,
      opacity: hide ? 0 : 1,
      transform: hide ? "translateY(10px)" : "translateY(0px)",
      transformOrigin: "center",
    },
  };

  useEffect(() => {
    if (localDelay > 0) {
      // show 상태일 때
      if (!hide) {
        typeof onShow === "function" && onShow();
      }

      setTimeout(() => {
        if (!hide) {
          setHide(true);
        }
      }, localDelay);
    }
  }, [localDelay, hide, setHide, onShow]);

  return (
    <div
      {...styleObject}
      onContextMenu={(e) => e.preventDefault()}
      onTransitionEnd={() => {
        if (typeof onClose === "function") onClose();
        else setHide(true);
      }}
    >
      {icon ? <div className="icon">{icon}</div> : undefined}
      <div className="content">
        <div className="elf--toast-text">{children}</div>
      </div>
      <div className="tools">{tools}</div>
      {closable ? (
        <div className="close-area">
          <Button
            size="small"
            variant={variant}
            iconOnly
            quiet
            closable
            onClick={() => this.hide(1)}
          >
            &times;
          </Button>
        </div>
      ) : undefined}
    </div>
  );
}

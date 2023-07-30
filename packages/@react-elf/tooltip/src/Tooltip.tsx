import React, { useCallback, useMemo, useState } from "react";
import * as ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import classNames from "classnames";
import { makeCssVariablePrefixMap, propertyMap } from "@react-elf/shared";
import { TooltipProps } from "@react-elf-types/tooltip";

const cssProperties = makeCssVariablePrefixMap("--elf--tooltip", {
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
  delay: true,
  contentPadding: true,
  maxWidth: true,
  position: true,
});

export const TooltipPlacement = {
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
};

export function Tooltip({
  style = {},
  message = "",
  children,
  placement = "bottom",
  animated = false,
  hideArrow = false,
  variant = "default",
  position = "relative",
  icon,
  show = false,
  hideDelay = 0,
  trigger = "hover",
}: TooltipProps) {
  const [isShow, setIsShow] = useState<boolean>(show);

  const runOpen = useCallback(() => {
    setIsShow(true);
  }, [setIsShow]);

  const runShow = useCallback(() => {
    runOpen();
  }, [runOpen]);

  const runClose = useCallback(() => {
    setTimeout(() => {
      setIsShow(false);
    }, hideDelay);
  }, [setIsShow, hideDelay]);

  const runHide = useCallback(() => {
    runClose();
  }, [runClose]);

  const runToggle = useCallback(() => {
    if (isShow) {
      runHide();
    } else {
      runShow();
    }
  }, [isShow, runHide, runShow]);

  const localClass = useMemo(() => {
    return classNames("elf--tooltip", {
      [placement]: true,
      animated,
      [variant]: true,
      [position]: true,
    });
  }, [placement, animated, variant, position]);

  const styleObject = {
    className: localClass,
    style: propertyMap(style, cssProperties),
  };

  const focusCallback = useCallback(() => {
    if (trigger.includes("focus")) {
      runOpen();
    }
  }, [runOpen]);

  const clickCallback = useCallback(() => {
    if (trigger.includes("click")) {
      runToggle();
    }
  }, [runToggle]);

  const pointerEnterCallback = useCallback(() => {
    if (trigger.includes("hover")) {
      runOpen();
    }
  }, [runOpen]);

  const pointerLeaveCallback = useCallback(() => {
    if (trigger.includes("hover")) {
      runClose();
    }
  }, [runClose]);

  return (
    <div
      {...styleObject}
      onFocus={focusCallback}
      onClick={clickCallback}
      onPointerEnter={pointerEnterCallback}
      onPointerLeave={pointerLeaveCallback}
    >
      <div className="content">{children}</div>
      {isShow || show ? (
        <div className="message">
          {hideArrow ? undefined : <div className="arrow"></div>}
          {icon ? <div className="icon">{icon}</div> : undefined}
          <div className="message-content">
            <div>{message}</div>
          </div>
        </div>
      ) : undefined}
    </div>
  );
}

export function tooltip({
  children,
  message = "",
  delay = 0,
  position = "fixed",
  placement = "top",
  container = document.body,
  style,
  variant = "default",
}: TooltipProps) {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(
    <Tooltip
      variant={variant}
      delay={delay}
      position={position}
      placement={placement}
      message={message}
      style={style}
      show={true}
    >
      {children || <span>&nbsp;</span>}
    </Tooltip>
  );

  container.appendChild(div);

  return {
    close: () => {
      root.unmount();
    },

    remove: () => {
      div.remove();
    },
  };
}

import { makeCssVariablePrefixMap, propertyMap } from "@react-elf/shared";
import classNames from "classnames";
import { useCallback, useEffect, useMemo, useState } from "react";
import { PopoverProps } from "@react-elf-types/popover";

const cssProperties = makeCssVariablePrefixMap("--elf--popover", {
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
});

export function Popover(props: PopoverProps) {

  const {
    style = {},
    body = "",
    children,
    placement = "bottom",
    showTip = false,
    animated = false,
    show = false,
    hideDelay = 0,
    trigger = "hover",

    /**
     * When the trigger is in the form of a click, clicking the area outside the popover automatically closes it.
     */
    autoClose = false,
  } = props;

  const [isShow, setIsShow] = useState<boolean>(show);


  const runOpen = useCallback(() => {
    setIsShow(true);
  }, [setIsShow]);

  const runClose = useCallback(() => {
    setTimeout(() => {
      setIsShow(false);
    }, hideDelay);
  }, [setIsShow, hideDelay]);

  const runToggle = useCallback(() => {
    if (isShow) {
      runClose();
    } else {
      runOpen();
    }
  }, [isShow, runClose, runOpen]);

  const localClass = useMemo(() => {
    return classNames("elf--popover", { [placement]: true, animated })
  }, [placement, animated])

  const styleObject = {
    className: localClass,
    style: {
      ...propertyMap(style, cssProperties),
    },
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

  useEffect(() => {
    let eventCallback: any = null;
    if (trigger === "click") {
      document.addEventListener("click", eventCallback = (e: any) => {
        const target = e.target;
        const isClickOutside = !target.closest(".elf--popover");
        if (isClickOutside) {
          runClose();
        }
      });
    }

    return () => {
      document.removeEventListener("click", eventCallback);
    }
  }, [trigger, runClose])


  const isPopoverShow = isShow || props.show;
  const isShowTip = isPopoverShow && showTip;

  return (
    <div {...styleObject} onFocus={focusCallback} onClick={clickCallback} onPointerEnter={pointerEnterCallback} onPointerLeave={pointerLeaveCallback}>
      <div className="elf--popover-content">
        {children}
        {isShowTip ? <div className="tip"></div> : undefined}
      </div>
      {isPopoverShow ? (
        <div className="elf--popover-message">
          <div className="elf--popover-message-content">{body}</div>
          {/* 이벤트 발생시 이벤트 발생 위치를 표시하기 위한 용도 */}
          <div className="event-panel"></div>
        </div>
      ) : undefined}
    </div>
  );

}
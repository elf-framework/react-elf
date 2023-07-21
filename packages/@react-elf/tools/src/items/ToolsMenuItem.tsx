import React, { useCallback, useEffect, useRef, useState } from "react";
import { ToolsMenuItemType } from "@react-elf-types/tools";
import { useMemo } from "react";
import classNames from "classnames";
import { Flex } from "@react-elf/layout";
import { Menu } from "@react-elf/menu";
import { ArrowIcon } from "./icon/ArrowIcon";

export function ToolsMenuItem(props: ToolsMenuItemType) {
  const {
    direction = "left",
    menuStyle,
    noArrow = false,
    title = "",
    icon,
    disabled,
    style = {},
    items,
    className,
    hoverable = true,
    variant = "light",
    selected,
    opened = false,
    trigger = "click",
    rootClose,
    onClick,
    onOpen,
    onClose,
  } = props;

  const hasItems = items.length > 0;
  const isSelected = selected
    ? typeof selected === "function"
      ? selected()
      : selected
    : undefined;

  const [localOpened, setLocalOpened] = useState(opened);
  const menuItemRef = useRef<HTMLDivElement>(null);
  const localClass = useMemo(() => {
    return classNames(
      "elf--tools-item",
      {
        selected: isSelected,
        "has-items": hasItems,
        hoverable: hoverable || localOpened,
      },
      className
    );
  }, [isSelected, localOpened, hasItems, className, hoverable]);

  const checkClickable = useCallback((e) => {
    const $menu = e.target.closest(".menu-area");

    // 메뉴가 클릭 될 때는 버튼 클릭으로 인식하지 않음.
    if ($menu) return false;

    return true;
  }, []);

  const checkTriggerClick = useCallback(() => {
    return (
      trigger === "click" ||
      (trigger === "hover" && typeof onClick === "function")
    );
  }, [trigger, onClick]);

  const checkNotInMenu = useCallback((e) => {
    const $menu = e.target.closest(".elf--tools-item");

    if (!$menu) return true;

    return menuItemRef.current.isSameNode($menu) === false;
  }, []);

  const openCallback = useCallback(() => {
    if (!localOpened) {
      setLocalOpened(true);
    }
  }, [localOpened, setLocalOpened]);

  const closeCallback = useCallback(() => {
    if (localOpened) {
      setLocalOpened(false);
    }
  }, [localOpened, setLocalOpened]);

  const toggleCallback = useCallback(() => {
    if (localOpened) {
      closeCallback();
    } else {
      openCallback();
    }
  }, [localOpened, closeCallback, openCallback]);

  const onClickCallback = useCallback(
    (e) => {
      e.preventDefault();
      if (disabled) return;

      if (checkClickable(e) || checkTriggerClick()) {
        toggleCallback();

        if (localOpened) {
          onClose?.(e);
        } else {
          onOpen?.(e);
        }
        onClick?.(e);
      } else {
        closeCallback();

        onClick?.(e);
      }
    },
    [disabled, localOpened, onClick, onOpen, onClose]
  );

  const onPointerOverCallback = useCallback(() => {
    if (trigger === "hover") {
      openCallback();
    }
  }, []);

  const onPointerLeaveCallback = useCallback(() => {
    if (trigger === "hover") {
      closeCallback();
    }
  }, []);

  useEffect(() => {
    if (!menuItemRef.current) return;

    function onDocumentClick(e) {
      if (checkClickable(e) || checkTriggerClick()) return;
      closeCallback();
    }

    document.addEventListener("click", onDocumentClick);

    return () => {
      document.removeEventListener("click", onDocumentClick);
    };
  }, [menuItemRef.current, localOpened, checkClickable, checkNotInMenu]);

  return (
    <div
      className={localClass}
      style={style}
      ref={menuItemRef}
      onPointerOver={onPointerOverCallback}
      onPointerLeave={onPointerLeaveCallback}
      onClick={onClickCallback}
    >
      <button type="button" className="tools-button" disabled={disabled}>
        <Flex style={{ columnGap: 4 }}>
          {[
            icon ? (
              <span className="icon" key={"icon"}>
                {typeof icon === "function" ? icon() : icon}
              </span>
            ) : undefined,
            title ? (
              <span className="menu-title" key={"menu-title"}>
                {typeof title === "function" ? title() : title}
              </span>
            ) : undefined,
          ].filter(Boolean)}
        </Flex>

        {hasItems && !noArrow ? (
          <span className={classNames("arrow", { opened: localOpened })}>
            <ArrowIcon />
          </span>
        ) : undefined}
      </button>
      {localOpened && !disabled ? (
        <div className="menu-area">
          <div className="background" data-direction={direction}></div>
          <Menu
            items={items}
            direction={direction}
            rootClose={rootClose}
            variant={variant}
            style={{
              ...(menuStyle || {}),
              top: "100%",
            }}
          />
        </div>
      ) : undefined}
    </div>
  );
}

import React, { useMemo } from "react";
import classNames from "classnames";
import { MenuItemProps } from "@react-elf-types/menu";
import { Menu } from "./Menu";
export function MenuItem(props: MenuItemProps) {
  const {
    title = "",
    shortcut,
    icon,
    expandIcon = "▶",
    items = [],
    hover,
    selected,
    selectable,
    selectedIcon,
    disabled,
    rootClose,
    description,
    variant,
    show = false,
    onClick,
  } = props;

  const hasItems = items.length > 0;

  const selectedValue = typeof selected === "function" ? selected() : selected;

  const localClass = useMemo(() => {
    return classNames({
      hover,
    });
  }, [hover]);

  return (
    <li
      className={localClass}
      data-disabled={disabled ? true : undefined}
      onClick={onClick}
    >
      <div className="menu-item-content">
        {selectable ? (
          <span className="selected-icon">
            {selectedValue ? selectedIcon : undefined}
          </span>
        ) : null}

        {icon ? <div className="icon">{icon}</div> : undefined}
        {title ? <div className="menu-title">{title}</div> : undefined}
        {shortcut || hasItems ? (
          <div className="value-area">
            {shortcut ? <div className="shortcut">{shortcut}</div> : undefined}
            {hasItems ? <div className="icon">{expandIcon}</div> : undefined}
          </div>
        ) : undefined}
      </div>
      {description ? (
        <div className="menu-item-description">{description}</div>
      ) : undefined}

      {items.length > 0 || show ? (
        <Menu items={items} variant={variant} rootClose={rootClose} />
      ) : undefined}
    </li>
  );
}

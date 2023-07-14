import React, { useMemo } from "react";
import classNames from "classnames";

import { MenuProps } from "@react-elf-types/menu";
import { makeCssVariablePrefixMap, propertyMap } from "@react-elf/shared";
import { DividerMenuItem } from "./DividerMenuItem";
import { CustomMenuItem } from "./CustomMenuItem";
import { LinkMenuItem } from "./LinkMenuItem";
import { SectionMenuItem } from "./SectionMenuItem";
import { MenuItem } from "./MenuItem";

const MenuItemType = {
  DIVIDER: "divider",
  SECTION: "section",
  MENU: "menu",
  ITEM: "item",
  CUSTOM: "custom",
  LINK: "link",
};

function makeMenuItem(items = [], variant, rootClose) {
  return items.map((it, index) => {
    const key = it.key || index;

    if (typeof it === "string" && it === "-") {
      return <DividerMenuItem key={key} variant={variant} />;
    } else if (typeof it === "function") {
      return (
        <CustomMenuItem
          key={key}
          variant={variant}
          render={it}
          rootClose={rootClose}
        />
      );
    } else if (it.type === MenuItemType.CUSTOM) {
      return (
        <CustomMenuItem
          key={key}
          variant={variant}
          {...it}
          rootClose={rootClose}
        />
      );
    } else if (it.type === MenuItemType.LINK) {
      return (
        <LinkMenuItem
          key={key}
          variant={variant}
          {...it}
          rootClose={rootClose}
        />
      );
    } else if (it.type === MenuItemType.SECTION) {
      return (
        <SectionMenuItem
          key={key}
          variant={variant}
          {...it}
          rootClose={rootClose}
        />
      );
    } else if (it.type === MenuItemType.DIVIDER) {
      return <DividerMenuItem key={key} variant={variant} {...it} />;
    }

    return (
      <MenuItem key={key} variant={variant} {...it} rootClose={rootClose} />
    );
  });
}

const cssProperties = makeCssVariablePrefixMap("--elf--menu", {
  left: true,
  top: true,
  backgroundColor: true,
  color: true,
  fontSize: true,
  fontWeight: true,
  height: true,
  padding: true,
  borderRadius: true,
  borderColor: true,
  boxShadow: true,
  width: true,
  maxWidth: true,
  sectionTitleColor: true,
  sectionTitleBackgroundColor: true,
  dividerColor: true,
  directionLeft: true,
  itemPadding: true,
});

export function Menu(props: MenuProps) {
  let {
    style = {},
    type = "menu",
    x = 0,
    y = 0,
    direction = "left",
    items = [],
    rootClose,
    autoPosition = false,
    variant = "light",
    compact = false,
  } = props;

  let itemStyle = { ...style };

  const localClass = useMemo(() => {
    return classNames("elf--menu", {
      [type]: true,
      [variant]: true,
      compact,
    });
  }, [type, variant, compact]);

  const styleObject = {
    "data-direction": direction,
    className: localClass,
    style: propertyMap(itemStyle, cssProperties),
  };

  return (
    <menu {...styleObject} onContextMenu={(e) => e.preventDefault()}>
      {makeMenuItem(items, variant, rootClose)}
    </menu>
  );
}

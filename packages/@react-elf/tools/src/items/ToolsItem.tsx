import React, { useMemo } from "react";
import classNames from "classnames";
import { ToolsItemType } from "@react-elf-types/tools";
import { Flex } from "@react-elf/layout";
import { Tooltip } from "@react-elf/tooltip";

export function ToolsItem(props: ToolsItemType) {
  const {
    selected,
    selectedType,
    title,
    icon,
    style,
    tooltip,
    hoverable = true,
    onClick,
  } = props;

  const isIconOnly = !title;
  const localClass = useMemo(() => {
    return classNames("elf--tools-item", {
      selected: typeof selected === "function" ? selected() : selected,
      "icon-only": isIconOnly,
      hoverable,
    });
  }, [selected, isIconOnly, hoverable]);

  const buttonComponent = (
    <button type="button" className="tools-button">
      <Flex style={{ gap: 10 }}>
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
    </button>
  );

  let localTooltip = tooltip;
  if (localTooltip) {
    if (typeof localTooltip === "string") {
      localTooltip = { message: localTooltip };
    } else if (typeof localTooltip === "object") {
      // noop
    }
  }

  return (
    <div
      className={localClass}
      data-selected-type={selectedType}
      onClick={onClick}
      style={style}
    >
      {localTooltip ? (
        <Tooltip {...(localTooltip as object)} style={{ height: "100%" }}>
          {buttonComponent}
        </Tooltip>
      ) : (
        buttonComponent
      )}
    </div>
  );
}

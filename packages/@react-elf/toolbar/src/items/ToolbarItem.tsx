import React from "react";
import { ToolbarItemProps } from "@react-elf-types/toolbar";
import { Tools } from "@react-elf/tools";

export function ToolbarItem(props: ToolbarItemProps) {
  const { items, style, emphasized, moreIcon } = props;

  return (
    <div className="elf--toolbar-item">
      <Tools
        items={items}
        style={style}
        emphasized={emphasized}
        moreIcon={moreIcon}
      />
    </div>
  );
}

import React from "react";
import { ToolsProps } from "@react-elf-types/tools";
import { makeCssVariablePrefixMap, propertyMap } from "@react-elf/shared";
import classNames from "classnames";
import { useEffect, useMemo, useState } from "react";
import { ToolsMenuItem } from "./items/ToolsMenuItem";
import { ToolsCustomItem } from "./items/ToolsCustomItem";
import { ToolsItem } from "./items/ToolsItem";

const ToolsItemType = {
  MENU: "menu",
  ITEM: "item",
  CUSTOM: "custom",
};

interface MakeToolsItemInterface {
  visibleTargetList: any[];
  rootRect: any;
  visibility: boolean;
  emphasized: boolean;
}

function makeToolsItem(items = [], options: MakeToolsItemInterface) {
  return items.map((it, index) => {
    let visibility = options.emphasized
      ? options.visibleTargetList[index]
        ? "visible"
        : "hidden"
      : "visible";

    if (options.visibility) {
      visibility = "visible";
    }

    if (it.type === ToolsItemType.CUSTOM) {
      return (
        <ToolsCustomItem
          {...it}
          key={`items-${index}`}
          style={{ visibility, ...(it.style || {}) }}
        />
      );
    }

    if (it.type === ToolsItemType.MENU) {
      return (
        <ToolsMenuItem
          {...it}
          key={`items-${index}`}
          style={{ visibility, ...(it.style || {}) }}
        />
      );
    }

    return (
      <ToolsItem
        {...it}
        key={`items-${index}`}
        style={{ visibility, ...(it.style || {}) }}
      />
    );
  });
}

function makeHiddenToolsItem(items = [], options: any = {}) {
  return items.filter((it, index) => {
    let visibility = options.emphasized
      ? options.visibleTargetList[index]
        ? "visible"
        : "hidden"
      : "visible";

    if (options.visibility) {
      visibility = "visible";
    }

    return visibility === "hidden";
  });
}

const cssProperties = makeCssVariablePrefixMap("--elf--tools", {
  backgroundColor: true,
  color: true,
  height: true,
});

export function Tools(props: ToolsProps) {
  const {
    style = {},
    vertical = false,
    items,
    emphasized = false,
    moreIcon,
  } = props;

  const toolRef = React.useRef<HTMLDivElement>(null);
  const [visibleTargetList, setVisibilityTargetList] = useState([]);
  const [lastLeft, setLastLeft] = useState(0);
  const [visibility, setVisibility] = useState(true);
  const [rootRect, setRootRect] = useState(null);

  useEffect(() => {
    if (!toolRef.current) return;

    let observer: IntersectionObserver, resizeObserver: ResizeObserver;

    if (emphasized) {
      const options = {
        root: toolRef.current.parentElement.parentElement,
        threshold: 1,
      };

      // intersection observer 사용하여 사용자가 접근하는 영역을 감지한다.
      // eslint-disable-next-line no-undef
      observer = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.intersectionRatio < 1) {
            setVisibility(false);
          } else {
            setVisibility(true);
          }
          setRootRect(e.intersectionRect);
        });
      }, options);

      observer.observe(toolRef.current);

      // resize container
      // eslint-disable-next-line no-undef
      resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          setRootRect(entry.target.getBoundingClientRect());
        });
      });

      resizeObserver.observe(toolRef.current.parentElement.parentElement);
    }

    return () => {
      observer?.disconnect();
      resizeObserver?.disconnect();
    };
  }, [emphasized, toolRef.current]);

  useEffect(() => {
    if (emphasized && !visibility) {
      const list = [];

      let totalWidth = 0;
      const localRect = this.$el?.rect();

      if (!localRect) return;

      this.$el.children().forEach((child, index) => {
        if (child.hasClass("hidden-tools")) return;

        const rect = child.rect();

        let isVisible = rect.right + 50 < rootRect.right;

        if (isVisible) {
          totalWidth += rect.width;

          if (totalWidth + 50 > rootRect.width) {
            totalWidth = rootRect.width - 50;
            isVisible = false;
          }
        }

        list[index] = isVisible;
      });

      setVisibilityTargetList(list);
      setLastLeft(localRect.width - (localRect.right - rootRect.right) - 50);
    }
  }, [emphasized, visibility, rootRect]);

  const localClass = useMemo(() => {
    return classNames("elf--tools", {
      vertical,
      emphasized,
    });
  }, [vertical, emphasized]);

  const styleObject = {
    className: localClass,
    style: propertyMap(style, cssProperties),
  };

  const localItems = makeToolsItem(items, {
    visibleTargetList,
    rootRect,
    visibility,
    emphasized,
  });

  const hiddenItems = makeHiddenToolsItem(items, {
    visibleTargetList,
    rootRect,
    visibility,
    emphasized,
  });

  return (
    <div
      {...styleObject}
      ref={toolRef}
      onContextMenu={(e) => e.preventDefault()}
    >
      {localItems}
      {hiddenItems.length ? (
        <ToolsMenuItem
          className="hidden-tools"
          items={hiddenItems}
          icon={moreIcon}
          direction="right"
          noArrow={true}
          style={{
            position: "absolute",
            height: "100%",
            left: lastLeft,
          }}
        />
      ) : undefined}
    </div>
  );
}

import React, { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import classNames from "classnames";
import { ActionGroupProps } from "@react-elf-types/button";
import {
  makeCssVariablePrefixMap,
  propertyMap,
  splitStyleKeyAndNoneStyleKey,
} from "@react-elf/shared";
import { Tooltip } from "@react-elf/tooltip";

import { Button } from "./Button";
import { ActionGroupContext } from "./context";
import { useActionGroupState } from "./hooks/useActionGroupState";

const cssProperties = makeCssVariablePrefixMap("--elf--action-group", {
  alignItems: true,
  gap: true,
});

export function ActionGroup(props: ActionGroupProps) {
  const {
    direction = "horizontal",
    quiet = false,
    compact = false,
    justified = false,
    collapsed = false,
    moreIcon = null,
    boundary = 50,
    style = {},
    children,
    shape = "normal",
    ...extraStyle
  } = props;

  const state = useActionGroupState(props);

  const elRef = useRef<HTMLDivElement>(null);
  const [visibleTargetList, setVisibilityTargetList] = useState([]);
  const [rootRect, setRootRect] = useState(null);

  const { style: styleProperties } = splitStyleKeyAndNoneStyleKey(extraStyle);

  useEffect(() => {
    if (!collapsed || !elRef.current) return;
    const list = [];
    let totalWidth = 0;
    const localRect = elRef.current?.getBoundingClientRect();

    if (!localRect) return;

    [...elRef.current.children].forEach((child, index) => {
      if (child.classList.contains("hidden-tools")) return;

      const rect = child.getBoundingClientRect();

      let isVisible = rect.right + boundary < localRect.right;

      if (isVisible) {
        totalWidth += rect.width;

        if (totalWidth + boundary > localRect.width) {
          totalWidth = localRect.width - boundary;
          isVisible = false;
        }
      }

      list[index] = isVisible;
    });

    setVisibilityTargetList(list);
  }, [collapsed, elRef.current, rootRect]);

  useEffect(() => {
    let resizeObserver: ResizeObserver;

    if (collapsed) {
      // resize container
      // eslint-disable-next-line no-undef
      resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          setRootRect(entry.target.getBoundingClientRect());
        });
      });

      if (!elRef.current) return;

      resizeObserver.observe(elRef.current);
    }

    return () => {
      resizeObserver?.disconnect();
    };
  }, [collapsed]);

  const localClass = useMemo(() => {
    return classNames("elf--action-group", {
      [direction]: true,
      quiet,
      compact,
      collapsed,
      justified,
      [shape]: true,
    });
  }, [direction, quiet, compact, collapsed, justified, shape]);

  const styleObject = {
    className: localClass,
    style: propertyMap(
      {
        ...style,
        ...styleProperties,
      },
      cssProperties
    ),
  };

  const newChildren = React.Children.map(children, (child) => child);

  const items = collapsed
    ? newChildren.filter((item, index) => {
        return visibleTargetList[index];
      })
    : children;

  const hiddenItems = collapsed
    ? newChildren.filter((item, index) => {
        return !visibleTargetList[index];
      })
    : [];

  return (
    <div {...styleObject} ref={elRef}>
      <ActionGroupContext.Provider value={state}>
        {items}
        {hiddenItems.length ? (
          <Tooltip
            message={hiddenItems}
            trigger="click"
            hideArrow={true}
            placement={"bottom-left"}
            style={{ contentPadding: "0px" }}
          >
            <Button iconOnly>{moreIcon}</Button>
          </Tooltip>
        ) : undefined}
      </ActionGroupContext.Provider>
    </div>
  );
}

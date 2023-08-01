import React, { useCallback, useEffect, useRef } from "react";
import { useContext } from "react";
import { ColorMixerContext } from "./context";

interface RectInfo {
  clicked: boolean;
  rect?: DOMRect;
  clientX?: number;
  clientY?: number;
}

export function ColorSelectView() {
  const context = useContext(ColorMixerContext);
  const selectedRef = useRef<RectInfo>({
    clicked: false,
  });
  const rectRef = useRef({
    x: 0,
    y: 0,
    width: context.width,
    height: context.height,
  });

  const updateSaturationValueByEvent = useCallback(
    (e) => {
      const { x, y, width, height } = rectRef.current;
      const minX = x;
      const maxX = minX + width;

      const minY = y;
      const maxY = minY + height;

      const targetX = Math.min(Math.max(minX, e.clientX), maxX);
      const targetY = Math.min(Math.max(minY, e.clientY), maxY);

      const s = (targetX - minX) / width;
      const v = 1 - (targetY - minY) / height;

      context.updateSaturationValue(s, v);
    },
    [rectRef.current, context.updateSaturationValue]
  );

  const onPointerDown = useCallback(
    (e) => {
      selectedRef.current.clicked = true;
      selectedRef.current.clientX = e.clientX;
      selectedRef.current.clientY = e.clientY;

      rectRef.current = e.currentTarget.getBoundingClientRect();

      updateSaturationValueByEvent(e);
    },
    [updateSaturationValueByEvent]
  );

  useEffect(() => {
    function DocumentMove(e) {
      if (selectedRef.current.clicked) {
        updateSaturationValueByEvent(e);
      }
    }

    function DocumentMoveEnd(e) {
      selectedRef.current.clicked = false;

      // 움직이지 않으면 이벤트 발생을 하지 않음.
      if (
        selectedRef.current.clientX === e.clientX &&
        selectedRef.current.clientY === e.clientY
      ) {
        return;
      }

      context.lastChangeColor();
    }

    document.addEventListener("pointermove", DocumentMove);
    document.addEventListener("pointerup", DocumentMoveEnd);

    return () => {
      document.removeEventListener("pointermove", DocumentMove);
      document.removeEventListener("pointerup", DocumentMoveEnd);
    };
  }, [updateSaturationValueByEvent]);

  const x = rectRef.current.width * context.s;
  const y = rectRef.current.height * (1 - context.v);

  return (
    <div
      className="elf--color-area"
      style={{
        backgroundColor: context.hueColor,
      }}
      onPointerDown={onPointerDown}
    >
      <div className="saturation">
        <div className="value">
          <div
            className="drag-pointer"
            style={{
              backgroundColor: context.color,
              left: x,
              top: y,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

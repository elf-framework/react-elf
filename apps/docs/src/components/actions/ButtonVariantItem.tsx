import React from "react";
import { StoryObj } from "@storybook/react";
import { Canvas } from "@storybook/blocks";

import style from "./ButtonVariantItem.module.scss";

interface ButtonVariantItemProps {
  name: string;
  button1?: StoryObj;
  button2?: StoryObj;
  width?: number;
  layout?: string;
}

export function ButtonVariantItem({
  name,
  button1,
  button2,
  layout = "horizontal",
  width = 100,
}: ButtonVariantItemProps) {
  return (
    <div
      className={[
        style.button,
        layout === "vertical" ? style.vertical : "",
      ].join(" ")}
    >
      <p
        style={{
          width,
        }}
      >
        {name}
      </p>
      {button1 ? (
        <div>
          <Canvas of={button1} layout="fullscreen" sourceState="none" />
        </div>
      ) : undefined}
      {button2 ? (
        <div>
          <Canvas of={button2} layout="fullscreen" sourceState="none" />
        </div>
      ) : undefined}
    </div>
  );
}

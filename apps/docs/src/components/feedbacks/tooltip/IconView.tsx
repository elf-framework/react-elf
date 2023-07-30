import React from "react";
import { IconWrapper, Tooltip, VBox } from "@react-elf/ui";
import {
  MdErrorOutline,
  MdHelpOutline,
  MdInfoOutline,
  MdOutlineTaskAlt,
  MdOutlineWarning,
} from "react-icons/md";

function Item({ variant, icon }) {
  return (
    <Tooltip
      variant={variant}
      icon={icon}
      message={<div>text message</div>}
      placement="top"
      show
    >
      {variant}
    </Tooltip>
  );
}

export function IconView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [0, 20],
        justifyContent: "center",
        height: 400,
      }}
    >
      <div
        style={{
          display: "grid",
          columnGap: 100,
          gridTemplateColumns: "repeat(3, 1fr)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Item
          variant="default"
          icon={
            <IconWrapper>
              <MdInfoOutline />
            </IconWrapper>
          }
        />
        <Item
          variant="dark"
          icon={
            <IconWrapper>
              <MdHelpOutline />
            </IconWrapper>
          }
        />
        <Item
          variant="primary"
          icon={
            <IconWrapper>
              <MdInfoOutline />
            </IconWrapper>
          }
        />
        <Item
          variant="secondary"
          icon={
            <IconWrapper>
              <MdOutlineTaskAlt />
            </IconWrapper>
          }
        />
        <Item
          variant="success"
          icon={
            <IconWrapper>
              <MdOutlineTaskAlt />
            </IconWrapper>
          }
        />
        <Item
          variant="warning"
          icon={
            <IconWrapper>
              <MdOutlineWarning />
            </IconWrapper>
          }
        />
        <Item
          variant="danger"
          icon={
            <IconWrapper>
              <MdErrorOutline />
            </IconWrapper>
          }
        />
      </div>
    </VBox>
  );
}

import { MouseEvent } from "react";
import type { ReactNode } from "react";
import { CommonStyle } from "@react-elf-types/shared";

export type MenuVariant = "light" | "dark";

/** menu */
export type MenuItemType = {
  type: "item";
  title: ReactNode;
  shortcut?: ReactNode;
  hover?: boolean;
  icon?: ReactNode;
  description?: ReactNode;
  selectable?: boolean;
  selected?: boolean;
  selectedIcon?: ReactNode;
  onClick?: (event: PointerEvent) => void;
  onSelect?: (event: PointerEvent, context: any) => void;
  items?: ItemType[];
  closable?: boolean;
  rootClose?: () => void;
  disabled?: boolean;
  show?: boolean;
};

export type SectionMenuItemType = {
  type: "section";
  rootClose?: () => void;
  title: string;
};

export type DividerMenuItemType = {
  type: "divider";
  rootClose?: () => void;
  dashed?: boolean;
};

export type CustomMenuRenderFunctionType = ReactNode;

export type CustomMenuItemType =
  | {
      type: "custom";
      rootClose?: () => void;
      render?: (context: any) => ReactNode;
    }
  | CustomMenuRenderFunctionType;

export type LinkMenuItemType = {
  type: "link";
  title: string;
  link: string;
  rootClose?: () => void;
};

export type ItemType =
  | MenuItemType
  | SectionMenuItemType
  | DividerMenuItemType
  | CustomMenuItemType
  | LinkMenuItemType
  | "-"
  | string;

interface MenuStyle {
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  height?: string;
  padding?: string;
  borderRadius?: string;
  borderColor?: string;
  boxShadow?: string;
  width?: string;
  maxWidth?: string;
  sectionTitleColor?: string;
  sectionTitleBackgroundColor?: string;
  dividerColor?: string;
  left?: string;
}

export type MenuDirectionType = "left" | "right" | "center";

export interface MenuProps {
  items: ItemType[];
  type?: "menu" | "dropdown" | "contextmenu";
  x?: number;
  y?: number;
  direction?: MenuDirectionType;
  autoPosition?: boolean;
  style?: MenuStyle & CommonStyle;
  root?: any;
  compact?: boolean;
  variant?: MenuVariant;
  rootClose?: () => void;
  onOpen?: () => void;
}

export interface CustomMenuItemProps {
  render?: (context: any) => ReactNode;
  rootClose?: () => void;
  variant?: MenuVariant;
}

export interface DividerMenuItemProps {
  variant?: MenuVariant;
  dashed?: boolean;
}

export interface LinkMenuItemProps {
  rootClose?: () => void;
  title: ReactNode;
  link?: string;
}

export interface SectionMenuItemProps {
  title: ReactNode;
}

export interface MenuItemProps {
  title: ReactNode;
  shortcut?: ReactNode;
  hover?: boolean;
  icon?: ReactNode;
  description?: ReactNode;
  selectable?: boolean;
  selected?: boolean | (() => boolean);
  selectedIcon?: ReactNode;
  onClick?: (event?: MouseEvent) => void;
  onSelect?: (event?: PointerEvent, context?: any) => void;
  items?: ItemType[];
  closable?: boolean;
  rootClose?: () => void;
  disabled?: boolean;
  expandIcon?: ReactNode;
  variant: MenuVariant;
  show?: false;
}

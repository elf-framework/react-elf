import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "@react-elf/ui";

const meta = {
  title: "Components/Inputs/TextArea",
  component: TextArea,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
    docs: {
      controls: {
        exclude: [
          "onClick",
          "onDoubleClick",
          "onMouseDown",
          "onMouseUp",
          "onMouseEnter",
          "onMouseLeave",
          "onMouseOver",
          "onMouseOut",
          "onMouseMove",
          "onContextMenu",
          "onCut",
          "onCopy",
          "onPaste",
          "onSelect",
          "onKeyDown",
          "onKeyPress",
          "onKeyUp",
          "onInput",
          "onFocus",
          "onBlur",
          "onSubmit",
          "onPointerDown",
          "onPointerMove",
          "onPointerUp",
          "onPointerCancel",
          "onDragStart",
          "onPointerEnter",
          "onPointerLeave",
          "onPointerOver",
          "onWheel",
          "onFocusEnter",
          "onFocusLeave",
          "onCompositionStart",
          "onCompositionEnd",
          "onCompositionUpdate",
          "onScroll",
          "onChange",
          "onDrag",
          "onDragEnd",
          "onDragEnter",
          "onDragOver",
          "onDragLeave",
          "onDrop",
          "onTouchStart",
          "onTouchMove",
          "onTouchEnd",
          "onTouchCancel",
          "onAnimationStart",
          "onAnimationEnd",
          "onAnimationIteration",
          "onTransitionEnd",
        ],
      },
    },
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Preview TextArea Story
 */
export const Default: Story = {
  args: {
    label: "Email address",
    value: "sample text",
  },
};

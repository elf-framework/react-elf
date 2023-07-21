import React from "react";
import { Toolbar, VBox } from "@react-elf/ui";
import {
  MdAddCard,
  MdContentCopy,
  MdDelete,
  MdEdit,
  MdOutlineMoreHoriz,
} from "react-icons/md";

export function OptionsView() {
  return (
    <VBox
      style={{ gap: 30, backgroundColor: "var(--color-gray-0)", padding: 20 }}
    >
      <div>
        <Toolbar
          class="shadow-1"
          emphasized={true}
          rounded={true}
          items={[
            {
              items: [
                {
                  type: "button",
                  icon: <MdAddCard />,
                  title: "Add Card",
                },
              ],
            },
            {
              moreIcon: <MdOutlineMoreHoriz />,
              items: [
                {
                  type: "button",
                  icon: <MdEdit />,
                  title: "Edit",
                },
                {
                  type: "button",
                  icon: <MdContentCopy />,
                  title: "Copy",
                },
                {
                  type: "button",
                  icon: <MdDelete />,
                  title: "Delete",
                },
              ],
            },
          ]}
        />
      </div>

      <div>
        <Toolbar
          variant="primary"
          rounded={true}
          emphasized={true}
          items={[
            {
              items: [
                {
                  type: "button",
                  icon: <MdAddCard />,
                  title: "Add Card",
                },
              ],
            },
            {
              moreIcon: <MdOutlineMoreHoriz />,
              items: [
                {
                  type: "button",
                  icon: <MdEdit />,
                  title: "Edit",
                },
                {
                  type: "button",
                  icon: <MdContentCopy />,
                  title: "Copy",
                },
                {
                  type: "button",
                  icon: <MdDelete />,
                  title: "Delete",
                },
              ],
            },
          ]}
        />
      </div>
    </VBox>
  );
}

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
          className="shadow-1"
          emphasized={true}
          rounded={true}
          items={[
            {
              items: [
                {
                  type: "item",
                  icon: <MdAddCard />,
                  title: "Add Card",
                },
              ],
            },
            {
              moreIcon: <MdOutlineMoreHoriz />,
              items: [
                {
                  type: "item",
                  icon: <MdEdit />,
                  title: "Edit",
                },
                {
                  type: "item",
                  icon: <MdContentCopy />,
                  title: "Copy",
                },
                {
                  type: "item",
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
                  type: "item",
                  icon: <MdAddCard />,
                  title: "Add Card",
                },
              ],
            },
            {
              moreIcon: <MdOutlineMoreHoriz />,
              items: [
                {
                  type: "item",
                  icon: <MdEdit />,
                  title: "Edit",
                },
                {
                  type: "item",
                  icon: <MdContentCopy />,
                  title: "Copy",
                },
                {
                  type: "item",
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

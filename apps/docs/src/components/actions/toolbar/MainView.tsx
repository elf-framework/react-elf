import React from "react";
import { Toolbar, VBox } from "@react-elf/ui";
import { MdAddCard, MdContentCopy, MdDelete, MdEdit } from "react-icons/md";

export function MainView() {
  return (
    <VBox
      style={{ gap: 50, backgroundColor: "var(--color-gray-0)", padding: 60 }}
    >
      <div>
        <Toolbar
          className="shadow-1"
          rounded={true}
          items={[
            {
              items: [
                {
                  type: "item",
                  icon: <MdAddCard />,
                  title: "Add Card",
                },
                {
                  type: "menu",
                  title: "Edit",
                  // opened: true,
                  trigger: "click",
                  items: [
                    {
                      type: "item",
                      title: "Save a file",
                      description: "create a new shape",
                    },
                    {
                      type: "item",
                      title: "Save a file",
                    },
                    "-",
                    {
                      type: "item",
                      title: "Save a file",
                      description: "create a new shape",
                    },
                    "-",
                  ],
                },
              ],
            },
            {
              items: [
                {
                  type: "item",
                  icon: <MdEdit />,
                  tooltip: {
                    message: "Edit",
                    show: true,
                  },
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
          variant="secondary"
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
          variant="dark"
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

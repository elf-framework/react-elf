import React from "react";
import { ActionGroup, Button, Tooltip, VBox } from "@react-elf/ui";
import {
  MdContentCopy,
  MdDelete,
  MdEdit,
  MdOutlineMoreHoriz,
} from "react-icons/md";

export function MainView() {
  return (
    <VBox
      style={{ gap: 30, backgroundColor: "var(--color-gray-0)", padding: 120 }}
    >
      <div>
        <div style={{ gap: 10, display: "flex", justifyContent: "center" }}>
          <ActionGroup>
            <Tooltip message={"edit"}>
              <Button>
                <MdEdit />
                Edit
              </Button>
            </Tooltip>
            <Button>
              <MdContentCopy />
              Copy
            </Button>
            <Button>
              <MdDelete />
              Delete
            </Button>
            <Button iconOnly>
              <MdOutlineMoreHoriz />
            </Button>
          </ActionGroup>
          <ActionGroup>
            <Tooltip message={"edit"}>
              <Button>
                <MdEdit />
                Edit
              </Button>
            </Tooltip>
          </ActionGroup>
        </div>
      </div>
    </VBox>
  );
}

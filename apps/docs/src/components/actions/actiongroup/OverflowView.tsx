import React from "react";
import { ActionGroup, Button, VBox } from "@react-elf/ui";
import {
  MdContentCopy,
  MdDescription,
  MdOutlineMoreHoriz,
  MdSettings,
} from "react-icons/md";

export function OverflowView() {
  return (
    <VBox
      style={{ gap: 30, backgroundColor: "var(--color-gray-0)", padding: 40 }}
    >
      <div>
        <div>
          <em>Wrap</em>
        </div>
        <ActionGroup style={{ gap: 10, margin: 10 }}>
          <Button>
            <MdDescription />
            Document Setup
          </Button>
          <Button>
            <MdSettings /> Settings
          </Button>
          <Button>
            <MdContentCopy /> Copy
          </Button>
          <Button>
            <MdDescription />
            Document Setup
          </Button>
          <Button>
            <MdSettings /> Settings
          </Button>
          <Button>
            <MdContentCopy /> Copy
          </Button>
        </ActionGroup>
      </div>
      <div>
        <div>
          <em>Collapse</em>
        </div>
        <ActionGroup
          collapsed={true}
          moreIcon={<MdOutlineMoreHoriz />}
          onMoreClick={(e, items) => {
            console.log(items);
          }}
          style={{ gap: 10, margin: 10 }}
        >
          <Button>
            <MdDescription />
            Document Setup
          </Button>
          <Button>
            <MdSettings /> Settings
          </Button>
          <Button onClick={() => console.log("copy")}>
            <MdContentCopy /> Copy
          </Button>
        </ActionGroup>
      </div>
    </VBox>
  );
}

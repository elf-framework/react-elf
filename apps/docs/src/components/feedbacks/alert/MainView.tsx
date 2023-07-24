import React from "react";
import { Alert, Flex, IconWrapper, VBox } from "@react-elf/ui";
import { MdEdit } from "react-icons/md";

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-1)",
        justifyContent: "center",
        position: "relative",
        padding: 30,
      }}
    >
      <Flex direction="column" gap={10} style={{ width: "100%" }}>
        <Alert
          icon={
            <IconWrapper>
              <MdEdit />
            </IconWrapper>
          }
          title={"title"}
        >
          Your trial has expired. Please purchase to continue.
        </Alert>
        <Alert variant="primary" closable={true} title={"title"}>
          Your trial has expired. Please purchase to continue.
        </Alert>
        <Alert variant="secondary" closable={true}>
          Your trial has expired. Please purchase to continue.
        </Alert>
        <Alert variant="success" closable={true}>
          Your trial has expired. Please purchase to continue.
        </Alert>
        <Alert variant="danger" closable={true}>
          Your trial has expired. Please purchase to continue.
        </Alert>
        <Alert variant="dark" closable={true}>
          Your trial has expired. Please purchase to continue.
        </Alert>
      </Flex>
    </VBox>
  );
}

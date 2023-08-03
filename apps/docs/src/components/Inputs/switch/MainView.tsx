import React from "react";
import { Switch, VBox } from "@react-elf/ui";

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [60, 200],
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        height: 300,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 30,
          fontSize: 20,
        }}
      >
        <Switch
          checked
          onClick={(e) => {
            console.log(e.target.checked ? "checked" : "unchecked");
          }}
        >
          Available offline
        </Switch>
        <Switch>Require password </Switch>
        <Switch>Allow commenting</Switch>
      </div>
    </VBox>
  );
}

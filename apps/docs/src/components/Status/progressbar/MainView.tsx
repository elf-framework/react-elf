import React, { useEffect, useState } from "react";
import { ProgressBar, VBox } from "@react-elf/ui";

export function MainView() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let id;
    setTimeout(() => {
      id = setInterval(() => {
        setValue((value) => {
          const newValue = Math.max(0, Math.min(value + 1, 100));

          if (newValue === 100) {
            clearInterval(id);
          }
          return newValue;
        });
      }, 10);
    }, 1000);

    return () => {
      if (id) clearInterval(id);
    };
  }, []);

  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        position: "relative",
        fontSize: 13,
        justifyContent: "center",
        alignItems: "center",
        height: 200,
      }}
    >
      <div
        style={{
          display: "flex",
          width: 240,
          gap: 30,
        }}
      >
        <div>
          <ProgressBar title="Loading data..." value={value} />
        </div>
      </div>
    </VBox>
  );
}

import React from "react";
import {
  SpinAnimation,
  ProgressCircle,
  VBox,
  Button,
  ActionGroup,
} from "@react-elf/ui";

export function SpinView() {
  const ref = React.useRef(null);

  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "30px 20px",
        fontSize: 13,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: "30px 100px",
          display: "flex",
          flexDirection: "column",
          gap: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SpinAnimation duration="2s" play ref={ref}>
          <ProgressCircle size="large" variant="primary" value={90} />
        </SpinAnimation>

        <div>
          <ActionGroup>
            <Button onClick={() => ref.current?.play()}>Play</Button>
            <Button onClick={() => ref.current?.pause()}>Pause</Button>
            <Button onClick={() => ref.current?.cancel()}>Cancel</Button>
          </ActionGroup>
        </div>
      </div>
    </VBox>
  );
}

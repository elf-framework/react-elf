import React from "react";
import { getThemeTokens } from "../../utils/tokens";
import { ColorDetailView } from "./ColorDetailView";

export function BaseView() {
  const tokens = getThemeTokens();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 30,
        padding: 20,
      }}
    >
      <ColorDetailView
        color={tokens.color.background.default}
        title={"Application Background"}
        message={"Color White"}
      />

      <ColorDetailView
        color={tokens.color.border}
        title={"Border Color"}
        message={"Color Gray 2"}
      />

      <ColorDetailView
        color={tokens.color.text.default}
        title={"Body Text"}
        message={"Color Gray 9"}
      />
      <ColorDetailView
        color={tokens.color.text.title}
        title={"Title Text"}
        message={"Color Gray 9"}
      />
      <ColorDetailView
        color={tokens.color.text.subtitle}
        title={"Subtitle Text"}
        message={"Color Gray 6"}
      />
      <ColorDetailView
        color={tokens.color.text.link}
        title={"Link Text"}
        message={"Color Blue 7"}
      />
    </div>
  );
}

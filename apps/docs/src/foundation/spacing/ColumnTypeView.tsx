import React from "react";

import "./ColumnView.scss";

export function ColumnTypeView() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridGap: 20,
      }}
      className="column-view"
    >
      <div>
        <div
          className="fluid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridGap: 10,
            height: 240,
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
        </div>
      </div>
      <div>
        <div className="description">
          <strong>Fluid</strong>
          <p>
            The fluid grid is designed for complex screens and web applications
            as it uses 100% of the screen’s width. The large and high-definition
            fluid grids allow for maximum use of screen real estate, and is best
            used for application workflows and UI.
          </p>
        </div>
      </div>

      <div>
        <div
          style={{
            backgroundColor: "var(--color-green-1)",
          }}
        >
          <div
            className="fixed"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gridGap: 10,
              maxWidth: 260,
              height: 240,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
          </div>
        </div>
      </div>

      <div>
        <div className="description">
          <strong>Fixed</strong>
          <p>
            The fixed grid has a maximum width and is designed for simple
            screens and content-specific pages. The width allows for maximum
            readability of page content in large and high-definition screens.
          </p>
        </div>
      </div>
    </div>
  );
}

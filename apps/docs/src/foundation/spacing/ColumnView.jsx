import React from "react";
import "./ColumnView.scss";

export function ColumnView() {
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
          columns={12}
          gap={10}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",

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
        <div className="description">
          <strong>Columns</strong>
          <p>
            By default, 12 columns are used. It can be specified in the form of
            column-xxx depending on the required state.
          </p>
        </div>
      </div>
      <div>
        <div
          className="gutter"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: 8,
            height: 240,
            paddingLeft: 8,
            paddingRight: 8,
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
        <div className="description">
          <strong>Gaps</strong>

          <p>
            Gaps are the gaps between the columns. Gutter widths are fixed
            values (16 px, 24 px, etc.) based on breakpoints.
          </p>
        </div>
      </div>

      <div>
        <div
          className="margin"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: 10,
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
        <div className="description">
          <strong>Margin</strong>
          <p>
            Grid margins are the outer margins of the grid. They can be the same
            width as the gutters or greater.
          </p>
        </div>
      </div>

      <div>
        <div style={{ position: "relative" }}>
          <div
            className="grid-area-margin"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: 10,
              height: 240,
              paddingLeft: 10,
              paddingRight: 10,
              boxSizing: "border-box",
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
          <div
            className="grid-area"
            columns={12}
            rows={5}
            gap={10}
            padding={10}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <div
              className="grid-item"
              style={{
                gridColumn: "1 / span 7",
                gridRow: "1 / span 2",
              }}
            ></div>
            <div
              className="grid-item"
              style={{
                gridColumnStart: 7,
                gridColumn: "span 5",
                gridRowStart: 1,
                gridRow: "span 1",
              }}
            ></div>
            <div
              className="grid-item"
              style={{
                gridColumnStart: 7,
                gridColumn: "span 5",
                gridRowStart: 1,
                gridRow: "span 1",
              }}
            ></div>

            <div
              className="grid-item"
              style={{
                gridColumnStart: 1,
                gridColumn: "span 4",
                gridRowStart: 3,
                gridRow: "span 3",
              }}
            ></div>
            <div
              className="grid-item"
              style={{
                gridColumnStart: 1,
                gridColumn: "span 4",
                gridRowStart: 3,
                gridRow: "span 3",
              }}
            ></div>
            <div
              className="grid-item"
              style={{
                gridColumnStart: 1,
                gridColumn: "span 4",
                gridRowStart: 3,
                gridRow: "span 3",
              }}
            ></div>
          </div>
        </div>
        <div className="description">
          <strong>Layout</strong>
          <br />
          <p>Grid areas are used to layout elements in a grid.</p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Button, Grid, IconButton } from "@react-elf/ui";

import "./SideBarView.scss";
export function SideBarView() {
  return (
    <div>
      <div
        className="header-bar-view"
        style={{ height: 300, marginBottom: 50 }}
      >
        <div className="frame">
          <div className="header-bar"></div>
          <div className="side-bar"></div>
        </div>
      </div>

      <Grid columns={[1, 1]} gap={20} className="column-view">
        <div>
          <div className="header-bar-view" style={{ height: 300 }}>
            <div
              className="frame"
              style={{ transform: "translateX(100px) translateY(50px);" }}
            >
              <div className="header-bar"></div>
              <div
                className="side-bar"
                style={{
                  padding: "10px 0px",
                }}
              >
                <div
                  className="side-bar-item"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  <Button iconOnly selected variant="primary">
                    B
                  </Button>
                  <Button iconOnly variant="secondary">
                    B2
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="description">
            <strong>Tools</strong>
            <p>
              Similar to modes, tools can affect the entire application. Because
              of that, they are always located at the top of the left sidebar,
              next to application modes (when present). The default tool should
              be at the top.
            </p>
          </div>
        </div>

        <div>
          <div>
            <div className="header-bar-view" style={{ height: 300 }}>
              <div className="frame" style={{ transform: "translateX(100px)" }}>
                <div
                  className="header-bar"
                  style={{ justifyContent: "end" }}
                ></div>
                <div className="side-bar">
                  <div className="side-bar-item"></div>
                  <div
                    className="side-bar-item"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    <Button iconOnly selected variant="primary">
                      B
                    </Button>
                    <Button iconOnly variant="secondary">
                      B2
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="description">
            <strong>Actions</strong>
            <p>
              Actions buttons can be located anywhere on the sidebar(s). They
              are versatile and can be used in multiple ways depending on the
              needs of the application: they might open panels, popovers, and
              trays; or display on canvas controls.
            </p>
          </div>
        </div>
      </Grid>
    </div>
  );
}

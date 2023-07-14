import React from "react";
import classNames from "classnames";
import "./preview.scss";

export function PreviewItem({ children, title, style, link, align }) {
  return (
    <div className="preview" style={style}>
      <div className={classNames("preview-content", align)}>{children}</div>
      <div className="preview-title">
        {link ? <a href={link}>{title}</a> : title}
      </div>
    </div>
  );
}

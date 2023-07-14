import React, { useMemo } from "react";
import classNames from "classnames";
import { makeCssVariablePrefixMap, propertyMap } from "@react-elf/shared";
import { DialogProps } from "@react-elf-types/dialog";
import { Button } from "@react-elf/button";

const cssProperties = makeCssVariablePrefixMap("--elf--dialog", {
  position: true,
  backgroundColor: true,
  color: true,
  fontSize: true,
  fontWeight: true,
  height: true,
  padding: true,
  borderRadius: true,
  borderColor: true,
  boxShadow: true,
  width: true,
});

export function Dialog(props: DialogProps) {
  const {
    noBorder,
    title,
    closable = true,
    footer,
    style = {},
    visible,
    center,
    cancelText = "Cancel",
    okText = "OK",
    okProps = {},
    cancelProps = {},
    children,
    tools,
    onClose,
    onOk,
    onCancel,
  } = props;

  const localClass = useMemo(() => {
    return classNames("elf--dialog", {
      visible,
      center,
      "no-border": noBorder,
    });
  }, [visible, center, noBorder]);

  const styleObject = {
    className: localClass,
    style: {
      ...propertyMap(style, cssProperties),
    },
  };

  return (
    <div {...styleObject}>
      <div className="elf--dialog-title">
        <div className="elf--dialog-title-text">{title}</div>
        {tools ? (
          <div className="elf--dialog-title-tools">{tools}</div>
        ) : undefined}
        {closable ? (
          <div
            className="elf--dialog-title-close"
            onClick={(e) => onClose?.(e)}
          >
            &times;
          </div>
        ) : undefined}
      </div>
      {noBorder ? undefined : <div className="elf--dialog-divider" />}
      <div className="elf--dialog-content">
        <div className="elf--dialog-text">{children}</div>
        <div className="elf--dialog-content-tools">
          {footer ? (
            footer
          ) : (
            <>
              <Button
                shape="round"
                {...cancelProps}
                onClick={(e) => onCancel?.(e)}
              >
                {cancelText}
              </Button>
              <Button
                shape="round"
                variant="primary"
                {...okProps}
                onClick={(e) => onOk?.(e)}
              >
                {okText}
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

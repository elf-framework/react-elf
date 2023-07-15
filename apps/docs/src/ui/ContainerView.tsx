import React from "react";

import style from "./ContainerView.module.scss";

interface ContainerViewProps {
  children: React.ReactNode;
}

export function ContainerView({ children }: ContainerViewProps) {
  return (
    <div className={style.container}>
      <div>{children}</div>
    </div>
  );
}

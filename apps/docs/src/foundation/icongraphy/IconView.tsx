import React from "react";
import { FaAccessibleIcon } from "react-icons/fa";

export function IconView() {
  return (
    <div
      style={{
        backgroundColor: "var(--color-gray-0)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 200,
        fontSize: 30,
        gap: 4,
      }}
    >
      <FaAccessibleIcon size={30} />
      <FaAccessibleIcon size={30} />
      Welcome
    </div>
  );
}

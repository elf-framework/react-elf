import React from "react";
import { FaAccessibleIcon } from "react-icons/fa";
export function ColorView() {
  return (
    <div
      style={{
        backgroundColor: "var(--color-gray-0)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px 10px",
        textAlign: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            width: 200,
            padding: "0px 20px",
          }}
        >
          <span>Default</span>
          <span>Hover</span>
          <span>Disabled</span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            width: 200,
            padding: "10px 20px",
            backgroundColor: "var(--color-white)",
            color: "var(--color-black)",
            borderRadius: 4,
          }}
        >
          <span style={{ color: "var(--color-gray-6)" }}>
            <FaAccessibleIcon size={40} />
          </span>
          <span style={{ color: "var(--color-gray-9)" }}>
            <FaAccessibleIcon size={40} />
          </span>
          <span style={{ color: "var(--color-text-disabled)" }}>
            <FaAccessibleIcon size={40} />
          </span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            width: 200,
            padding: "10px 20px",
            backgroundColor: "var(--color-black)",
            color: "var(--color-gray-9)",
            borderRadius: 4,
          }}
        >
          <span style={{ color: "var(--color-gray-3)" }}>
            <FaAccessibleIcon size={40} />
          </span>
          <span style={{ color: "var(--color-white)" }}>
            <FaAccessibleIcon size={40} />
          </span>
          <span style={{ color: "var(--color-text-disabled)" }}>
            <FaAccessibleIcon size={40} />
          </span>
        </div>
      </div>
    </div>
  );
}

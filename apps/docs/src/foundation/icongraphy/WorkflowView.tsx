import { Button } from "@react-elf/ui";
import React from "react";
import { FaAccessibleIcon } from "react-icons/fa";

function MenuItem({ icon, label, selected = false }) {
  const selectedOptions = selected
    ? {
        backgroundColor: "var(--color-gray-2)",
      }
    : {};

  return (
    <div
      className="item"
      style={{
        display: "flex",
        width: 240,
        alignItems: "center",
        gap: 10,
        ...selectedOptions,
        padding: "4px 10px",
        borderRadius: 4,
      }}
    >
      <span
        style={{
          display: "flex",
          flex: "none",
          alignItems: "center",
          justifyContent: "center",
          width: 20,
          height: 20,
          backgroundColor: "var(--color-pink-3)",
        }}
      >
        {icon}
      </span>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        {label}
      </div>
    </div>
  );
}

export function WorkflowView() {
  return (
    <div
      style={{
        backgroundColor: "var(--color-gray-0)",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        padding: "30px 10px",
        textAlign: "center",
        gap: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        <Button>
          <span
            style={{
              display: "inline-block",
              verticalAlign: "middle",
              // alignItems: "center",
              // justifyContent: "center",
              width: 20,
              height: 20,
              marginRight: 10,
              backgroundColor: "var(--color-pink-3)",
            }}
          >
            <FaAccessibleIcon size={20} />
          </span>
          Document Setup
        </Button>
        <Button>
          <span
            style={{
              display: "inline-block",
              verticalAlign: "middle",
              // alignItems: "center",
              // justifyContent: "center",
              width: 20,
              height: 20,
              marginRight: 10,
              backgroundColor: "var(--color-pink-3)",
            }}
          >
            <FaAccessibleIcon size={20} />
          </span>
          Settings
        </Button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          margin: "0 auto",
        }}
      >
        <MenuItem
          icon={<FaAccessibleIcon size={20} />}
          label={"Settings"}
          selected={true}
        />
        <MenuItem icon={<FaAccessibleIcon size={20} />} label={"Projects"} />
        <MenuItem icon={<FaAccessibleIcon size={20} />} label={"Apps"} />
        <MenuItem icon={<FaAccessibleIcon size={20} />} label={"Support"} />
      </div>
    </div>
  );
}

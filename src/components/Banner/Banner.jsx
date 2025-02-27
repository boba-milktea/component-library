import React from "react";

export default function Banner({ children, className, type }) {
  let typeClass =
    type === "success"
      ? "green"
      : type === "attention"
      ? "yellow"
      : type === "error"
      ? "red"
      : type === "information"
      ? "blue"
      : null;

  return <div className={`${className} ${typeClass}`}>{children}</div>;
}

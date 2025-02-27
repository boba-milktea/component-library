import React from "react";

export default function Badge({ color, className, children }) {
  let styleColor = color;

  return <span className={`${className} ${styleColor}`}>{children}</span>;
}

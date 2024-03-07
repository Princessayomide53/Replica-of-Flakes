import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function ClassName({ classes, children }) {
  // Generate combined class names
  const combinedClasses = twMerge(clsx(...classes));

  return <div className={combinedClasses}>{children}</div>;
}

export default ClassName;

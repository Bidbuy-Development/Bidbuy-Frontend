"use client";

import { Label as LabelPrimitive } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const Label = ({ children, className, ...props }) => {
  return (
    <LabelPrimitive className={twMerge("sr-only", className)} {...props}>
      {children}
    </LabelPrimitive>
  );
};

export default Label;

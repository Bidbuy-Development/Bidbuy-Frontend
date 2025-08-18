"use client";

import { TextField as TextFieldPrimitive } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const TextField = ({ className, ...props }) => {
  return (
    <TextFieldPrimitive className={twMerge("relative", className)} {...props} />
  );
};

export default TextField;

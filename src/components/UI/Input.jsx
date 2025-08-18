"use client";

import React from "react";
import { Input as InputPrimitive } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const Input = ({ className, ...props }) => {
  return (
    <InputPrimitive
      className={twMerge(
        "w-full px-8 py-4 pr-12 rounded-xl bg-input-background focus:outline-none placeholder-shown:text-gray-600 text-primary-purple",
        className
      )}
      {...props}
    />
  );
};

export default Input;

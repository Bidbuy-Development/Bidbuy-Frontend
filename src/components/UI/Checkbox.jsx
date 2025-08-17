"use client";

import { Checkbox as CheckboxPrimitive } from "react-aria-components";
import { FaCheck } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

const Checkbox = ({ className, children, ...props }) => {
  return (
    <CheckboxPrimitive
      className={twMerge("gap-2 flex items-center cursor-pointer", className)}
      {...props}
    >
      <div className="flex items-center rounded-full p-0.5 justify-center size-4 border border-primary-purple">
        <FaCheck className="text-primary-purple in-data-[selected=true]:block hidden" />
      </div>
      {children}
    </CheckboxPrimitive>
  );
};

export default Checkbox;

"use client";

import { Group as GroupPrimitive } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const Group = ({ className, ...props }) => {
  return (
    <GroupPrimitive
      className={twMerge("gap-2 flex items-center relative", className)}
      {...props}
    />
  );
};
export default Group;

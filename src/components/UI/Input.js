import React from "react";

const Input = ({ label, inputStyle = "", labelStyle = "", ...props }) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className={`${labelStyle}`}>{label}</label>}
      <input
        className={`border rounded-sm outline-primary-purple py-[8px] px-[25px] w-fit ${inputStyle}`}
        {...props}
      />
    </div>
  );
};

export default Input;

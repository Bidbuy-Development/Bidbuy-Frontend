import React from "react";

const AvatarGroup = ({ avatars }) => {
  return (
    <div className="flex rounded-full border-4 border-black p-1 bg-black overflow-hidden">
      {avatars.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`avatar-${index}`}
          className={`w-[45px] h-[45px] rounded-full border-2 border-black object-cover -ml-4 first:ml-0`}
        />
      ))}
    </div>
  );
};

export default AvatarGroup;

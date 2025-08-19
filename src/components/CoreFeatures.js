import React from "react";

/* reusable card component for both users and shoppers core features to display core features on background image*/
const CoreFeatures = ({ logo, title, description }) => {
  return (
    <div className="rounded-xl text-background-color bg-white/20 backdrop-blur-[1px] w-[20%] flex flex-col gap-4 px-4 py-7">
      <div>
        <img src={logo} alt="logo" />
      </div>

      <div className="space-y-2">
        <h2 className="font-bold text-2xl">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default CoreFeatures;

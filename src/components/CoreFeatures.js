import React from "react";

/* reusable card component for both users and shoppers core features to display core features on background image*/
const CoreFeatures = ({ logo, title, description }) => {
  return (
    <div className="text-background-color bg-white/20 backdrop-blur-[1px] w-full rounded-xl p-4 flex flex-col items-center gap-3">
      <div>
        <img src={logo} alt="logo" className="w-5 h-5 lg:w-10 lg:h-10" />
      </div>

      <div className="space-y-2 text-center">
        <h2 className="font-bold text-sm lg:text-2xl">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};
export default CoreFeatures;

import React from "react";

/* reusable card component for both users and shoppers core features to display core features on background image*/
const CoreFeatures = ({ logo, title, description }) => {
  return (
    <div className="text-background-color bg-white/20 backdrop-blur-[1px] w-full rounded-xl p-8 flex flex-col items-center lg:items-start gap-7 lg:gap-5">
      <div>
        <img
          src={logo}
          alt="logo"
          className="w-8 h-8 md:w-15 md:h-15 lg:w-10 lg:h-10"
        />
      </div>

      <div className="space-y-2 text-center lg:text-start">
        <h2 className="font-bold text-xl lg:text-2xl">{title}</h2>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};
export default CoreFeatures;

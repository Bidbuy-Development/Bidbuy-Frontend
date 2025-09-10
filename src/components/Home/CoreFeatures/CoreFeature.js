import React from "react";

/* reusable card component for both users and shoppers core features to display core features on background image*/
const CoreFeatures = ({ logo, title, description }) => {
  return (
    <div className="text-background-color bg-white/20 backdrop-blur-[2px] w-full rounded-xl p-4 lg:p-6 flex flex-col items-center lg:items-start  gap-3 lg:gap-4 min-h-[140px] md:min-h-[160px] lg:min-h-[180px] transition-all duration-300 hover:bg-white/30 hover:shadow-lg">
      <div className="flex-shrink-0">
        <img
          src={logo}
          alt="logo"
          className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
        />
      </div>

      <div className="space-y-2 text-center lg:text-start flex-1">
        <h2 className="font-bold text-sm md:text-[17px] lg:text-lg">{title}</h2>
        <p className="text-xs md:text-sm lg:text-base leading-snug">
          {description}
        </p>
      </div>
    </div>
  );
};
export default CoreFeatures;

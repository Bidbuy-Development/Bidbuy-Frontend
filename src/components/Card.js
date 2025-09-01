import React from "react";

/* reusable card component for both users and shoppers main content */
const Card = ({ imageSrc, title, description, alt }) => {
  return (
    <div className="flex gap-3 rounded-xl lg:px-6 py-4">
      <img src={imageSrc} alt={alt} className="w-30 h-30 lg:w-32 lg:h-32" />

      <div className="">
        <h2 className="text-xl font-semibold lg:font-bold lg:mt-5">{title}</h2>
        <p className="pt-2 text-lg lg:text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;

import React from "react";

/* reusable card component for both users and shoppers main content */
const Card = ({ imageSrc, title, description, alt }) => {
  return (
    <div className="flex gap-5 lg:bg-background-card rounded-xl lg:px-6 py-4">
      <img src={imageSrc} alt={alt} className="w-27 h-27 lg:w-32 lg:h-32" />

      <div className="">
        <h2 className="text-lg font-bold mt-3">{title}</h2>
        <p className="text-text-paragraph pt-4">{description}</p>
      </div>
    </div>
  );
};

export default Card;

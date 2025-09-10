
import React from "react";

/* reusable card component for both users and shoppers main content */
const Card = ({ imageSrc, title, description, alt }) => {
  return (
    <div className="flex gap-3 items-center">
      <div className="flex-shrink-0 w-32 h-32 sm:w-44 sm:h-44 lg:w-44 lg:h-44">
        <img 
          src={imageSrc} 
          alt={alt} 
          className="w-full h-full object-contain" 
        />
      </div>

      <div className="flex-1">
        <h2 className="text-lg font-semibold lg:font-bold lg:mt-1">{title}</h2>
        <p className="pt-2 lg:pt-5 text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default Card;
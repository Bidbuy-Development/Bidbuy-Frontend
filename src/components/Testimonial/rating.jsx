import React from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({ rating = 4.8, totalStars = 5 }) => {
  // Stars get rounded
  const roundedStars = Math.round(rating);

  return (
    <div className="flex  gap-2">
      {/* Keep the original decimal rating */}
      <span className="text-[24px] text-shade-text font-[600] ">{rating.toFixed(1)}</span>

      {/* Stars (rounded) */}
      <div className="flex">
        {Array.from({ length: totalStars }).map((_, i) => {
          if (i < roundedStars) {
            return <FaStar key={i} className="w-6 h-6 text-primary-gold" />;
          } else {
            return <FaStar key={i} className="w-6 h-6 text-gray-300" />;
          }
        })}
      </div>
    </div>
  );
};

export default Rating;

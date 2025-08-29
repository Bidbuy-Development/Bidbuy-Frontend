"use client";
import { useState } from "react";
import {
  FaTshirt,
  FaCar,
  FaAppleAlt,
  FaTv,
  FaShoppingBasket,
  FaHeadphones,
  FaPhone,
  FaPlane,
} from "react-icons/fa";
import { GiRunningShoe } from "react-icons/gi";
import Button from "../../UI/Link";

const categories = [
  { id: "dress", name: "Dress", icon: FaTshirt, color: "text-pink-500" },
  { id: "shoe", name: "Shoe", icon: GiRunningShoe, color: "text-pink-500" },
  {
    id: "television",
    name: "Television",
    icon: FaTv,
    color: "text-blue-500",
  },
  { id: "phones", name: "Phones", icon: FaPhone, color: "text-green-500" },
  {
    id: "basket",
    name: "Basket",
    icon: FaShoppingBasket,
    color: "text-orange-500",
  },
  { id: "car", name: "Car", icon: FaCar, color: "text-red-500" },
  { id: "aeroplane", name: "Aeroplane", icon: FaPlane, color: "text-blue-500" },
  { id: "fruits", name: "Fruits", icon: FaAppleAlt, color: "text-red-500" },
  {
    id: "headphones",
    name: "Headphones",
    icon: FaHeadphones,
    color: "text-purple-500",
  },
];

export default function CategorySelection({ onNext, onPrev }) {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (categoryId) => {
    setSelectedCategories((prev) => {
      const newSelection = prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId];

      return newSelection;
    });
  };

  const handleSubmit = () => {
    if (selectedCategories.length === 0) {
      alert("Please select at least one category");
      return;
    }

    if (onNext) {
      onNext(selectedCategories);
    }
  };
  return (
    <div className="w-full space-y-4 sm:space-y-6">
      <div className="text-center">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-purple mb-2">
          Personalize Your Shopping Experience
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
        {categories.map((category) => {
          const IconComponent = category.icon;
          const isSelected = selectedCategories.includes(category.id);

          return (
            <button
              key={category.id}
              onClick={() => toggleCategory(category.id)}
              className={`

                p-3 sm:p-4 lg:p-6 rounded-lg border-2 transition-all duration-200 
                flex flex-col items-center gap-2 sm:gap-3 min-h-[90px] sm:min-h-[110px] lg:min-h-[120px]
                ${
                  isSelected
                    ? "border-primary-purple shadow-md"
                    : "border-gray-200 bg-[#9267A01C] hover:border-gray-300 hover:shadow-sm cursor-pointer"
                }
              `}
            >
              <IconComponent
                className={`text-xl sm:text-2xl lg:text-3xl ${
                  isSelected ? "text-primary-purple" : category.color
                }`}
              />
              <span
                className={`text-xs sm:text-sm font-medium text-center ${
                  isSelected ? "text-primary-purple" : "text-gray-700"
                }`}
              >
                {category.name}
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        {onPrev && (
          <Button
            variant="secondary"
            radius="lg"
            onClick={onPrev}
            className="px-6 sm:px-8 py-3 sm:py-4 w-full text-sm sm:text-base cursor-pointer"
          >
            Back
          </Button>
        )}
        <Button
          variant="primary"
          radius="lg"
          onClick={handleSubmit}
          className="px-6 sm:px-8 py-3 sm:py-4 w-full text-sm sm:text-base cursor-pointer"
        >
          Proceed
        </Button>
      </div>
    </div>
  );
}

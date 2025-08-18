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
import Button from "../../UI/Button";

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

export default function CategorySelection({
  onCategorySelection,
  minSelection = 1,
  maxSelection = 5,
}) {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (categoryId) => {
    setSelectedCategories((prev) => {
      if (prev.includes(categoryId)) {
        return prev.filter((id) => id !== categoryId);
      } else if (prev.length < maxSelection) {
        return [...prev, categoryId];
      }
      return prev;
    });
  };

  const handleSubmit = () => {
    if (selectedCategories.length >= minSelection) {
      onCategorySelection(selectedCategories);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-primary-purple mb-2">
          Personalize Your shopping Experience{" "}
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {categories.map((category) => {
          const IconComponent = category.icon;
          const isSelected = selectedCategories.includes(category.id);
          const isDisabled =
            !isSelected && selectedCategories.length >= maxSelection;

          return (
            <button
              key={category.id}
              onClick={() => toggleCategory(category.id)}
              disabled={isDisabled}
              className={`
                p-6 rounded-lg border-2 transition-all duration-200 
                flex flex-col items-center gap-3 min-h-[120px]
                ${
                  isSelected
                    ? "border-primary-purple shadow-md"
                    : isDisabled
                    ? "border-gray-200 bg-gray-50 cursor-not-allowed opacity-50"
                    : "border-gray-200 bg-[#9267A01C] hover:border-gray-300 hover:shadow-sm cursor-pointer"
                }
              `}
            >
              <IconComponent
                className={`text-3xl ${
                  isSelected ? "text-primary-purple" : category.color
                }`}
              />
              <span
                className={`text-sm font-medium text-center ${
                  isSelected ? "text-primary-purple" : "text-gray-700"
                }`}
              >
                {category.name}
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex justify-center">
        <Button
          variant="primary"
          radius="lg"
          disabled={selectedCategories.length < minSelection}
          onClick={handleSubmit}
          className="px-8 py-3 w-full"
        >
          Proceed
        </Button>
      </div>
    </div>
  );
}

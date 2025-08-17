"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BuyerAccountSetup from "../../../components/Auth/Buyer/BuyerAccountSetup";
import CategorySelection from "../../../components/Auth/Buyer/BuyerCategorySelection";
import Welcome from "@/components/Auth/Welcome";

export default function BuyerSetupPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();
  const [setupData, setSetupData] = useState({
    phone: "",
    country: "",
    state: "",
    address: "",
    selectedCategories: [],
  });

  const handleSetupDataChange = (newData) => {
    setSetupData(newData);
  };

  const handleAccountSetupSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(2); // Move to category selection
  };

  const handleCategorySelection = (categories) => {
    setSetupData({ ...setupData, selectedCategories: categories });
    console.log("Complete setup data:", {
      ...setupData,
      selectedCategories: categories,
    });
    setCurrentStep(3);
  };

  const handleWelcomeContinue = () => {
    router.push("/");
  };

  return (
    <>
      {currentStep === 1 ? (
        <BuyerAccountSetup
          formData={setupData}
          onFormDataChange={handleSetupDataChange}
          onSubmit={handleAccountSetupSubmit}
        />
      ) : currentStep === 2 ? (
        <CategorySelection onCategorySelection={handleCategorySelection} />
      ) : (
        <Welcome onContinue={handleWelcomeContinue} />
      )}
    </>
  );
}

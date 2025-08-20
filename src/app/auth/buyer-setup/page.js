"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AccountSetup from "../../../components/Auth/AccountSetup";
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

  const handleSetupDataChange = (field, value) => {
    setSetupData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAccountSetupSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  const handleCategoryComplete = (categories) => {
    const completeSetupData = {
      ...setupData,
      selectedCategories: categories,
    };
    setSetupData(completeSetupData);

    console.log("Complete buyer setup data:", completeSetupData);
    setCurrentStep(3);
  };

  const handlePrevFromCategory = () => {
    setCurrentStep(1);
  };

  const handleWelcomeContinue = () => {
    router.push("/");
  };

  return (
    <>
      {currentStep === 1 ? (
        <AccountSetup
          formData={setupData}
          onFormDataChange={handleSetupDataChange}
          onSubmit={handleAccountSetupSubmit}
        />
      ) : currentStep === 2 ? (
        <CategorySelection
          onNext={handleCategoryComplete}
          onPrev={handlePrevFromCategory}
        />
      ) : (
        <Welcome onContinue={handleWelcomeContinue} />
      )}
    </>
  );
}

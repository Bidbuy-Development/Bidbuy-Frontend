"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AccountSetup from "../../../components/Auth/AccountSetup";
import CategorySelection from "../../../components/Auth/Buyer/BuyerCategorySelection";
import Welcome from "@/components/Auth/Welcome";
import useSteps from "@/hooks/useSteps";

export default function BuyerSetupPage() {
  const { step: currentStep, next, prev } = useSteps(3);
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
    next();
  };

  const handleCategoryComplete = (categories) => {
    const completeSetupData = {
      ...setupData,
      selectedCategories: categories,
    };
    setSetupData(completeSetupData);

    console.log("Complete buyer setup data:", completeSetupData);
    next();
  };

  const handlePrevFromCategory = () => {
    prev();
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

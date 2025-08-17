"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BuyerAccountSetup from "../../../components/Auth/Buyer/BuyerAccountSetup";
import ShopperKyc from "../../../components/Auth/Shopper/ShopperKyc";
import Welcome from "@/components/Auth/Welcome";

export default function BuyerSetupPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();
  const [setupData, setSetupData] = useState({
    phone: "",
    country: "",
    state: "",
    address: "",
    kycData: {
      documentType: "",
      frontDocument: null,
      backDocument: null,
      faceVerification: false,
    },
  });

  const handleSetupDataChange = (newData) => {
    setSetupData(newData);
  };

  const handleAccountSetupSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  const handleKycComplete = () => {
    console.log("Complete setup data:", setupData);
    setCurrentStep(3);
  };

  const handleWelcomeContinue = () => {
    router.push("/");
  };

  const handlePrevFromKyc = () => {
    setCurrentStep(1);
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
        <ShopperKyc onNext={handleKycComplete} onPrev={handlePrevFromKyc} />
      ) : (
        <Welcome onContinue={handleWelcomeContinue} />
      )}
    </>
  );
}

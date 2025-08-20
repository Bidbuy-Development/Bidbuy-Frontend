"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AccountSetup from "../../../components/Auth/AccountSetup";
import ShopperKyc from "../../../components/Auth/Shopper/ShopperKyc";
import Welcome from "@/components/Auth/Welcome";

export default function ShopperSetupPage() {
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

  const handleKycComplete = (kycData) => {
    const completeSetupData = {
      ...setupData,
      kycData: {
        documentType: kycData.documentType,
        frontDocument: kycData.frontDocument,
        backDocument: kycData.backDocument,
        faceVerification: true,
      },
    };

    setSetupData(completeSetupData);

    console.log("Complete setup data:", completeSetupData);
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
        <AccountSetup
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

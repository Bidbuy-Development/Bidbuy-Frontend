"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AccountSetup from "../../../components/Auth/AccountSetup";
import ShopperKyc from "../../../components/Auth/Shopper/ShopperKyc";
import Welcome from "@/components/Auth/Welcome";
import useSteps from "@/hooks/useSteps";

export default function ShopperSetupPage() {
  const { step: currentStep, next, prev } = useSteps(3);
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
    next();
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
    next();
  };

  const handleWelcomeContinue = () => {
    router.push("/");
  };

  const handlePrevFromKyc = () => {
    prev();
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

"use client";
import { useState } from "react";

const useSteps = (totalSteps, currentStep = 1) => {
  const [step, setStep] = useState(currentStep);

  const prev = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const next = () => {
    setStep((prevStep) => Math.min(prevStep + 1, totalSteps));
  };

  const goToStep = (stepNumber) => {
    if (stepNumber >= 1 && stepNumber <= totalSteps) {
      setStep(stepNumber);
    }
  };

  const reset = () => {
    setStep(1);
  };

  const isFirstStep = step === 1;
  const isLastStep = step === totalSteps;

  return {
    step,
    setStep,
    prev,
    next,
    goToStep,
    reset,
    isFirstStep,
    isLastStep,
    totalSteps,
  };
};

export default useSteps;

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthLayout from "../../../components/Auth/auth-layout";
import GetStarted from "../../../components/Auth/GetStarted";
import BuyerSignupForm from "../../../components/Auth/Buyer/BuyerSignupForm";
import ShopperSignupForm from "../../../components/Auth/Shopper/ShopperSignupForm";
import { toast } from "react-toastify";

export default function SignupPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState("");
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const handleInputChange = (newFormData) => {
    setFormData(newFormData);
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: role,
    });
  };

  const handleProceedToForm = () => {
    if (selectedRole) {
      setCurrentStep(2);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    router.push(
      `/auth/verify?type=signup&role=${selectedRole}&email=${encodeURIComponent(
        formData.email
      )}`
    );
  };

  const renderSignupForm = () => {
    if (selectedRole === "buyer") {
      return (
        <BuyerSignupForm
          formData={formData}
          onFormDataChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      );
    } else if (selectedRole === "shopper") {
      return (
        <ShopperSignupForm
          formData={formData}
          onFormDataChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      );
    }
    return null;
  };

  return (
    <AuthLayout>
      {currentStep === 1 ? (
        <GetStarted
          selectedRole={selectedRole}
          onRoleSelect={handleRoleSelect}
          onProceed={handleProceedToForm}
        />
      ) : (
        renderSignupForm()
      )}
    </AuthLayout>
  );
}

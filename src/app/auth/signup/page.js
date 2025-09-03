"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import GetStarted from "../../../components/Auth/GetStarted";
import BuyerSignupForm from "../../../components/Auth/Buyer/BuyerSignupForm";
import ShopperSignupForm from "../../../components/Auth/Shopper/ShopperSignupForm";
import { toast } from "react-toastify";
import useAuthStore from "../../../stores/useAuthStore";

export default function SignupPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState("");
  const router = useRouter();
  const { signupBuyer, signupSeller, isLoading, setSignupData } =
    useAuthStore();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    // Validate form data
    if (!formData.fullName || !formData.email || !formData.password) {
      toast.error("Please fill in all required fields!");
      return;
    }

    // Store signup data in Zustand
    setSignupData({
      name: formData.fullName,
      email: formData.email,
      password: formData.password,
      role: selectedRole,
    });

    try {
      let result;

      if (selectedRole === "buyer") {
        result = await signupBuyer({
          name: formData.fullName,
          email: formData.email,
          password: formData.password,
        });
      } else if (selectedRole === "shopper") {
        result = await signupSeller({
          name: formData.fullName,
          email: formData.email,
          password: formData.password,
        });
      }

      if (result?.success) {
        // Navigate to verification page
        router.push(
          `/auth/verify?type=signup&role=${selectedRole}&email=${encodeURIComponent(
            formData.email
          )}`
        );
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("An error occurred during signup. Please try again.");
    }
  };

  const renderSignupForm = () => {
    if (selectedRole === "buyer") {
      return (
        <BuyerSignupForm
          formData={formData}
          onFormDataChange={handleInputChange}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />
      );
    } else if (selectedRole === "shopper") {
      return (
        <ShopperSignupForm
          formData={formData}
          onFormDataChange={handleInputChange}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />
      );
    }
    return null;
  };

  return currentStep === 1 ? (
    <GetStarted
      selectedRole={selectedRole}
      onRoleSelect={handleRoleSelect}
      onProceed={handleProceedToForm}
    />
  ) : (
    renderSignupForm()
  );
}

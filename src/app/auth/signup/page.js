"use client";
import { useState } from "react";
import AuthLayout from "../../../components/Auth/auth-layout";
import GetStarted from "../../../components/Auth/GetStarted";
import SignupForm from "../../../components/Auth/SignupForm";

export default function SignupPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState("");
  const [formData, setFormData] = useState({
    category: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (newFormData) => {
    setFormData(newFormData);
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setFormData((prev) => ({ ...prev, category: role }));
  };

  const handleProceedToForm = () => {
    if (selectedRole) {
      setCurrentStep(2);
    }
  };

  const handleBackToRoleSelection = () => {
    setCurrentStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Signup works!");
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
        <SignupForm
          selectedRole={selectedRole}
          formData={formData}
          onFormDataChange={handleInputChange}
          onBackToRoleSelection={handleBackToRoleSelection}
          onSubmit={handleSubmit}
        />
      )}
    </AuthLayout>
  );
}

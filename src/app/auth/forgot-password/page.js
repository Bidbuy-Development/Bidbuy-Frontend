"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ForgetPassword from "../../../components/Auth/ForgetPassword";
import useAuthStore from "../../../stores/useAuthStore";

export default function ForgotPasswordPage() {
  const [formData, setFormData] = useState({
    email: "",
  });
  const router = useRouter();
  const { forgotPassword, isLoading } = useAuthStore();

  const handleFormDataChange = (newData) => {
    setFormData(newData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email) {
      return;
    }

    try {
      const result = await forgotPassword(formData.email);

      if (result.success) {
        router.push(
          `/auth/verify?email=${encodeURIComponent(formData.email)}&type=reset`
        );
      }
    } catch (error) {
      console.error("Forgot password error:", error);
    }
  };

  return (
    <>
      <ForgetPassword
        formData={formData}
        onFormDataChange={handleFormDataChange}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </>
  );
}

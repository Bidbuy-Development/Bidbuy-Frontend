"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ForgetPassword from "../../../components/Auth/ForgetPassword";
import AuthLayout from "../../../components/Auth/auth-layout";

export default function ForgotPasswordPage() {
  const [formData, setFormData] = useState({
    email: "",
  });
  const router = useRouter();

  const handleFormDataChange = (newData) => {
    setFormData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(
      `/auth/verify?email=${encodeURIComponent(formData.email)}&type=reset`
    );
  };

  return (
    <AuthLayout>
      <ForgetPassword
        formData={formData}
        onFormDataChange={handleFormDataChange}
        onSubmit={handleSubmit}
      />
    </AuthLayout>
  );
}

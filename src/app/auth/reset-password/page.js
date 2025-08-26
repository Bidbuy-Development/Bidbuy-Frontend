"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ResetPassword from "../../../components/Auth/ResetPassword";
import { toast } from "react-toastify";

export default function ResetPasswordPage() {
  const router = useRouter();
  const urlParams =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null;
  const emailParam = urlParams ? urlParams.get("email") : "";
  const decodedEmail = emailParam ? decodeURIComponent(emailParam) : "";
  const [formData, setFormData] = useState({
    email: decodedEmail,
    password: "",
    confirmPassword: "",
  });


  const handleFormDataChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return;
    }

    toast.success("Password reset successful!");
    router.push("/auth/signin");
  };

  return (
    <>
      <ResetPassword
        formData={formData}
        onFormDataChange={handleFormDataChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}

"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ResetPassword from "../../../components/Auth/ResetPassword";
import { toast } from "react-toastify";
import useAuthStore from "../../../stores/useAuthStore";

export default function ResetPasswordPage() {
  const router = useRouter();
  const { resetPassword, isLoading } = useAuthStore();

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [resetToken, setResetToken] = useState("");

  // Get reset token from URL params
  useEffect(() => {
    const urlParams =
      typeof window !== "undefined"
        ? new URLSearchParams(window.location.search)
        : null;

    if (urlParams) {
      const tokenParam = urlParams.get("resetToken");
      const decodedToken = tokenParam ? decodeURIComponent(tokenParam) : "";
      setResetToken(decodedToken);
    }
  }, []);

  const handleFormDataChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return;
    }

    if (!resetToken) {
      toast.error(
        "Reset token not found. Please start the reset process again."
      );
      router.push("/auth/forgot-password");
      return;
    }

    try {
      const result = await resetPassword(resetToken, formData.password);

      if (result.success) {
        toast.success("Password reset successful!");
        router.push("/auth/signin");
      }
    } catch (error) {
      console.error("Reset password error:", error);
    }
  };

  return (
    <>
      <ResetPassword
        formData={formData}
        onFormDataChange={handleFormDataChange}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </>
  );
}

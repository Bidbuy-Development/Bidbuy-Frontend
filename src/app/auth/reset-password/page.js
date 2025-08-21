"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ResetPassword from "../../../components/Auth/ResetPassword";
import { toast } from "react-toastify";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const emailParam = urlParams.get("email");

    if (emailParam) {
      const decodedEmail = decodeURIComponent(emailParam);
      setEmail(decodedEmail);
      setFormData((prev) => ({
        ...prev,
        email: decodedEmail,
      }));
    }
  }, []);

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

"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ResetPassword from "../../../components/Auth/ResetPassword";
import  from "../../../components/Auth/auth-layout";
import { toast } from "react-toastify";

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email"); // Get email from URL parameters

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Set email from URL when component mounts
  useEffect(() => {
    if (email) {
      setFormData((prev) => ({
        ...prev,
        email: decodeURIComponent(email),
      }));
    }
  }, [email]);

  const handleFormDataChange = (newData) => {
    setFormData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

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

"use client";
import { useState } from "react";
import SigninForm from "../../../components/Auth/SigninForm";
import { toast } from "react-toastify";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (newFormData) => {
    setFormData(newFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Login successful!");
  };

  return (
    <SigninForm
      formData={formData}
      onFormDataChange={handleInputChange}
      onSubmit={handleSubmit}
    />
  );
}

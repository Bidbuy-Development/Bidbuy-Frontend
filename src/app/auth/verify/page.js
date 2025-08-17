"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Verify from "../../../components/Auth/Verify";
import AuthLayout from "../../../components/Auth/auth-layout";
import { toast } from "react-toastify";

export default function VerifyPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "verification"; 
  const role = searchParams.get("role"); 
  const email = searchParams.get("email");

  const handleNext = () => {
    if (type === "reset" || type === "forgot-password") {
      toast.success("Password reset code verified");
      router.push(`/auth/reset-password?email=${encodeURIComponent(email)}`);
    } else if (type === "signup") {
      toast.success("Email verified successfully");
      if (role === "buyer") {
        router.push("/auth/buyer-setup");
      } else if (role === "shopper") {
        router.push("/auth/shopper-setup");
      } else {
        router.push("/auth/signin");
      }
    } else {
      toast.success("Email verified successfully");
      router.push("/auth/signin");
    }
  };

  const handlePrev = () => {
    if (type === "reset" || type === "forgot-password") {
      router.push("/auth/forgot-password");
    } else if (type === "signup") {
      router.push("/auth/signup");
    } else {
      router.push("/auth/signin");
    }
  };

  return (
    <AuthLayout>
      <Verify
        email={email}
        onNext={handleNext}
        onPrev={handlePrev}
        type={type}
      />
    </AuthLayout>
  );
}

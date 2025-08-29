"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Verify from "../../../components/Auth/Verify";
import { toast } from "react-toastify";

export default function VerifyPage() {
  const router = useRouter();
  const [type, setType] = useState("verification");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setType(urlParams.get("type") || "verification");
    setRole(urlParams.get("role") || "");
    setEmail(urlParams.get("email") || "");
  }, []);

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
    <Verify email={email} onNext={handleNext} onPrev={handlePrev} type={type} />
  );
}

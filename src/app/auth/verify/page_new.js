"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Verify from "../../../components/Auth/Verify";
import { toast } from "react-toastify";
import useAuthStore from "../../../stores/useAuthStore";

export default function VerifyPage() {
  const router = useRouter();
  const [type, setType] = useState("verification");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [resetToken, setResetToken] = useState("");
  const { clearAuth, resetData } = useAuthStore();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setType(urlParams.get("type") || "verification");
    setRole(urlParams.get("role") || "");
    setEmail(urlParams.get("email") || "");
  }, []);

  // Watch for reset token changes from the store
  useEffect(() => {
    if (resetData.resetToken) {
      setResetToken(resetData.resetToken);
    }
  }, [resetData.resetToken]);

  const handleNext = () => {
    if (type === "reset" || type === "forgot-password") {
      // Pass only the reset token to reset password page
      const params = new URLSearchParams({
        resetToken: resetToken || resetData.resetToken || "",
      });
      router.push(`/auth/reset-password?${params.toString()}`);
    } else if (type === "signup") {
      if (role === "buyer") {
        router.push("/auth/buyer-setup");
      } else if (role === "shopper") {
        router.push("/auth/shopper-setup");
      } else {
        router.push("/auth/signin");
      }
    } else {
      router.push("/auth/signin");
    }
  };

  const handlePrev = () => {
    // Clear auth data when going back
    clearAuth();

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

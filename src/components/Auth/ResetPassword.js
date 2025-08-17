"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ResetPassword({
  formData,
  onFormDataChange,
  onSubmit,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    onFormDataChange({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-left mb-12">
        <h2 className="text-3xl font-normal text-[#2b2b2b] mb-6">
          Set new password
        </h2>
        <p className="text-[#2b2b2b]">Reset your account with a new password</p>
      </div>

      {/* Reset Form */}
      <form onSubmit={onSubmit} className="space-y-6">
        {/* Password Field */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="New Password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-8 py-4 pr-12 rounded-xl bg-input-background focus:outline-none text-black"
            required
            minLength={6}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            <Image
              src={showPassword ? "/eye-open.svg" : "/eye-close.svg"}
              alt={showPassword ? "Hide password" : "Show password"}
              width={20}
              height={20}
            />
          </button>
        </div>

        {/* Confirm Password Field */}
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm New Password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="w-full px-8 py-4 pr-12 rounded-xl bg-input-background focus:outline-none text-black"
            required
            minLength={6}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            <Image
              src={showConfirmPassword ? "/eye-open.svg" : "/eye-close.svg"}
              alt={showConfirmPassword ? "Hide password" : "Show password"}
              width={20}
              height={20}
            />
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-primary-purple text-white py-4 rounded-xl font-medium hover:opacity-90 transition-opacity"
        >
          Reset Password
        </button>
      </form>

      {/* Login Link */}
      <div className="text-center">
        <Link href="/auth/signin" className="text-[#2b2b2b] hover:underline">
          Go back to Login
        </Link>
      </div>
    </div>
  );
}

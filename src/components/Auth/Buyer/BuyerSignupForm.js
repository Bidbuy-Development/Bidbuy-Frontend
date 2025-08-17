"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function BuyerSignupForm({
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
    <div className="space-y-6">
      {/* Header with back option */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-primary-purple mb-2">
          Buyer Signup
        </h2>
        <p className="text-[#2B2B2B]">Create your buyer account</p>
      </div>

      {/* Signup Form */}
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName || ""}
            onChange={handleInputChange}
            className="w-full px-8 py-4 rounded-xl bg-input-background focus:outline-none text-black"
            required
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-8 py-4 rounded-xl bg-input-background focus:outline-none text-black"
            required
          />
        </div>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-8 py-4 pr-12 rounded-xl bg-input-background focus:outline-none text-black"
            required
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

        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="w-full px-8 py-4 pr-12 rounded-xl bg-input-background focus:outline-none text-black"
            required
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
          Create Buyer Account
        </button>
      </form>

      {/* Login link */}
      <div className="text-center">
        <span className="text-light-gray">Already have an account? </span>
        <Link
          href="/auth/signin"
          className="text-primary-purple hover:underline"
        >
          Log in
        </Link>
      </div>
    </div>
  );
}

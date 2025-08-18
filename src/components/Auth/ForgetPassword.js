"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ForgetPassword({
  formData,
  onFormDataChange,
  onSubmit,
}) {
  const handleInputChange = (e) => {
    onFormDataChange({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-left mb-14">
        <h2 className="text-3xl font-normal text-[#2b2b2b] mb-6">
          Forgot Password?
        </h2>
        <p className="text-[#2b2b2b]">
          Enter email or phone number to get a reset link
        </p>
      </div>

      {/* Reset Form */}
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-8 py-4 pr-12 rounded-xl bg-input-background focus:outline-none text-black"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary-purple text-white py-4 rounded-xl font-medium hover:opacity-90 transition-opacity"
        >
          Send Reset Link
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

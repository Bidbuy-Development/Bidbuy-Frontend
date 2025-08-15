"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SigninForm({ formData, onFormDataChange, onSubmit }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    onFormDataChange({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-left">
        <h2 className="text-4xl font-bold text-primary-purple mb-2">Login</h2>
        <p className="text-[#2b2b2b]">Log into existing account</p>
      </div>

      {/* Login Form */}
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-8 py-4 pr-12 rounded-xl bg-input-background focus:outline-none text-black"
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
            className="w-full px-8 py-4 pr-12 rounded-xl bg-input-background focus:outline-none text-primary-purple"
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

        <button
          type="submit"
          className="w-full bg-primary-purple text-white py-4 rounded-xl font-medium hover:opacity-90 transition-opacity"
        >
          Log in
        </button>
      </form>

      {/* Sign up link */}
      <div className="text-center">
        <span className="text-light-gray">{"Don't have an account? "}</span>
        <Link href="/auth/signup" className="text-primary-purple hover:underline">
          Sign up
        </Link>
      </div>

      {/* Social login options */}
      <div className="space-y-3">
        <button className="w-full flex items-center justify-center px-4 py-3 rounded-xl bg-input-background transition-colors text-[#505050]">
          <Image
            src="/Google.svg"
            alt="Google logo"
            width={20}
            height={20}
            className="mr-2"
          />
          Sign up with Google
        </button>
      </div>
    </div>
  );
}

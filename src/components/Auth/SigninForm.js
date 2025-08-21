"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import Label from "../UI/Label";
import TextField from "../UI/TextField";
import Input from "../UI/Input";
import Group from "../UI/Group";
import Checkbox from "../UI/Checkbox";
import Password from "../UI/Password";

export default function SigninForm() {
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
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-primary-purple mb-2">
          Welcome back
        </h2>
        <p className="text-[#2b2b2b]">Log into existing account</p>
      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <TextField type="email" isRequired>
          <Label>Email</Label>
          <Input placeholder="Email" />
        </TextField>

        <TextField type="password" isRequired>
          <Label>Password</Label>
          <Password />
        </TextField>

        <div className="flex justify-between">
          <Link
            href="/auth/forgot-password"
            className="text-[#2b2b2b] hover:underline"
          >
            Forgot password?
          </Link>

          <Checkbox>Remember me</Checkbox>
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
        <Link
          href="/auth/signup"
          className="text-primary-purple hover:underline"
        >
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

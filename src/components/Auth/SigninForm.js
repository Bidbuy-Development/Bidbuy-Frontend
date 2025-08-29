"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Label from "../UI/Label";
import TextField from "../UI/TextField";
import Input from "../UI/Input";
import Checkbox from "../UI/Checkbox";
import Password from "../UI/Password";
import { toast } from "react-toastify";

export default function SigninForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    toast.success("Login successful!");
  };

  return (
    <section className="w-full space-y-4 sm:space-y-6">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-purple mb-2">
          Welcome back
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          Log into existing account
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <TextField type="email" isRequired>
          <Label className="block sm:hidden text-sm font-medium text-gray-700">
            Email
          </Label>
          <Input
            placeholder="Email"
            className="text-sm sm:text-base"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        </TextField>

        <TextField type="password" isRequired>
          <Label className="block sm:hidden text-sm font-medium text-gray-700">
            Password
          </Label>
          <Password
            className="text-sm sm:text-base"
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
          />
        </TextField>

        <div className="flex justify-between space-y-2 sm:space-y-0">
          <Link
            href="/auth/forgot-password"
            className="text-gray-700 hover:underline text-sm sm:text-base"
          >
            Forgot password?
          </Link>

          <Checkbox className="text-sm sm:text-base">Remember me</Checkbox>
        </div>

        <button
          type="submit"
          className="w-full bg-primary-purple text-white py-3 sm:py-4 rounded-xl font-medium hover:opacity-90 transition-opacity text-sm sm:text-base"
        >
          Log in
        </button>
      </form>

      <div className="text-center text-sm sm:text-base">
        <span className="text-gray-600">{"Don't have an account? "}</span>
        <Link
          href="/auth/signup"
          className="text-primary-purple hover:underline font-medium"
        >
          Sign up
        </Link>
      </div>

      <div className="space-y-3">
        <button className="w-full flex items-center justify-center px-4 py-3 rounded-xl bg-input-background transition-colors text-gray-600 text-sm sm:text-base">
          <Image
            src="/Google.svg"
            alt="Google logo"
            width={18}
            height={18}
            className="mr-2 sm:w-5 sm:h-5"
          />
          Sign up with Google
        </button>
      </div>
    </section>
  );
}

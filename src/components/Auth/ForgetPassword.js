"use client";
import Link from "next/link";
import Label from "../UI/Label";
import TextField from "../UI/TextField";
import Input from "../UI/Input";

export default function ForgetPassword({
  formData,
  onFormDataChange,
  onSubmit,
  isLoading = false,
}) {
  const handleInputChange = (field, value) => {
    onFormDataChange({
      ...formData,
      [field]: value,
    });
  };

  return (
    <section className="w-full space-y-6 sm:space-y-8">
      <div className="mb-8 sm:mb-14 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-purple mb-2">
          Forgot Password?
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          Enter email or phone number to get a reset link
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4 sm:space-y-6">
        <TextField type="email" isRequired>
          <Label className="block sm:hidden text-sm font-medium text-gray-700">
            Email Address
          </Label>
          <Input
            placeholder="Enter your email address"
            className="text-sm sm:text-base"
            value={formData.email || ""}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        </TextField>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary-purple text-white py-3 sm:py-4 rounded-xl font-medium hover:opacity-90 transition-opacity text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>

      <div className="text-center">
        <Link
          href="/auth/signin"
          className="text-gray-700 hover:underline text-sm sm:text-base"
        >
          Go back to Login
        </Link>
      </div>
    </section>
  );
}

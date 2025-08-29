"use client";
import Link from "next/link";
import Label from "../../UI/Label";
import TextField from "../../UI/TextField";
import Input from "../../UI/Input";
import Password from "../../UI/Password";
import { toast } from "react-toastify";

export default function ShopperSignupForm({
  formData,
  onFormDataChange,
  onSubmit,
}) {
  const handleInputChange = (field, value) => {
    onFormDataChange(field, value);
  };

  return (
    <div className="w-full space-y-4 sm:space-y-6">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-purple mb-2">
          Shop. Deliver. Profit
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          Create a new account
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <TextField type="text" isRequired>
          <Label className="block sm:hidden text-sm font-medium text-gray-700">
            Full Name
          </Label>
          <Input
            placeholder="Full Name"
            className="text-sm sm:text-base"
            value={formData.fullName || ""}
            onChange={(e) => handleInputChange("fullName", e.target.value)}
          />
        </TextField>

        <TextField type="email" isRequired>
          <Label className="block sm:hidden text-sm font-medium text-gray-700">
            Email
          </Label>
          <Input
            placeholder="E-mail"
            className="text-sm sm:text-base"
            value={formData.email || ""}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        </TextField>

        <TextField type="password" isRequired>
          <Label className="block sm:hidden text-sm font-medium text-gray-700">
            Password
          </Label>
          <Password
            placeholder="Password"
            className="text-sm sm:text-base"
            value={formData.password || ""}
            onChange={(e) => handleInputChange("password", e.target.value)}
          />
        </TextField>

        <TextField type="password" isRequired>
          <Label className="block sm:hidden text-sm font-medium text-gray-700">
            Confirm Password
          </Label>
          <Password
            placeholder="Confirm Password"
            className="text-sm sm:text-base"
            value={formData.confirmPassword || ""}
            onChange={(e) =>
              handleInputChange("confirmPassword", e.target.value)
            }
          />
        </TextField>

        <button
          type="submit"
          className="w-full bg-primary-purple text-white py-3 sm:py-4 rounded-xl font-medium hover:opacity-90 transition-opacity text-sm sm:text-base mt-4 sm:mt-6"
        >
          Proceed
        </button>
      </form>

      <div className="text-center text-sm sm:text-base">
        <span className="text-gray-600">Already have an account? </span>
        <Link
          href="/auth/signin"
          className="text-primary-purple hover:underline font-medium"
        >
          Log in
        </Link>
      </div>
    </div>
  );
}

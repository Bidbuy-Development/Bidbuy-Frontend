"use client";
import Label from "../UI/Label";
import TextField from "../UI/TextField";
import Input from "../UI/Input";
import { toast } from "react-toastify";

export default function AccountSetup({ formData, onFormDataChange, onSubmit }) {
  const handleInputChange = (field, value) => {
    onFormDataChange(field, value);
  };

  return (
    <div className="w-full space-y-4 sm:space-y-6">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-purple mb-2">
          Set up Account
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          Just a few more details to get your account ready
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <TextField type="tel" isRequired>
          <Label className="block sm:hidden text-sm font-medium text-gray-700">
            Phone Number
          </Label>
          <Input
            type="tel"
            placeholder="Phone Number"
            className="text-sm sm:text-base"
            value={formData.phone || ""}
            onChange={(e) => handleInputChange("phone", e.target.value)}
          />
        </TextField>

        <TextField type="text" isRequired>
          <Label className="block sm:hidden text-sm font-medium text-gray-700">
            Country
          </Label>
          <Input
            placeholder="Country"
            className="text-sm sm:text-base"
            value={formData.country || ""}
            onChange={(e) => handleInputChange("country", e.target.value)}
          />
        </TextField>

        <TextField type="text" isRequired>
          <Label className="block sm:hidden text-sm font-medium text-gray-700">
            State
          </Label>
          <Input
            placeholder="State"
            className="text-sm sm:text-base"
            value={formData.state || ""}
            onChange={(e) => handleInputChange("state", e.target.value)}
          />
        </TextField>

        <TextField type="text" isRequired>
          <Label className="block sm:hidden text-sm font-medium text-gray-700">
            Address
          </Label>
          <Input
            placeholder="Address"
            className="text-sm sm:text-base"
            value={formData.address || ""}
            onChange={(e) => handleInputChange("address", e.target.value)}
          />
        </TextField>

        <button
          type="submit"
          className="w-full bg-primary-purple text-white py-3 sm:py-4 rounded-xl font-medium hover:opacity-90 transition-opacity text-sm sm:text-base mt-4 sm:mt-6"
        >
          Proceed
        </button>
      </form>
    </div>
  );
}

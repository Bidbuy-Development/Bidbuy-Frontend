"use client";
import { useState } from "react";

export default function BuyerAccountSetup({
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
    <div className="space-y-6">
      {/* Header with back option */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-primary-purple mb-2">
          Set up Account
        </h2>
        <p className="text-[#2B2B2B]">
          Just a few more details to get your account ready
        </p>
      </div>

      {/* Signup Form */}
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone || ""}
            onChange={handleInputChange}
            className="w-full px-8 py-4 rounded-xl bg-input-background focus:outline-none text-black"
            required
          />
        </div>

        <div>
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleInputChange}
            className="w-full px-8 py-4 rounded-xl bg-input-background focus:outline-none text-black"
            required
          />
        </div>

        <div className="relative">
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleInputChange}
            className="w-full px-8 py-4 pr-12 rounded-xl bg-input-background focus:outline-none text-black"
            required
          />
        </div>

        <div className="relative">
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full px-8 py-4 pr-12 rounded-xl bg-input-background focus:outline-none text-black"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary-purple text-white py-4 rounded-xl font-medium hover:opacity-90 transition-opacity"
        >
          Proceed
        </button>
      </form>
    </div>
  );
}

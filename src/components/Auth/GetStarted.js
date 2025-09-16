"use client";
import Image from "next/image";

export default function GetStarted({ selectedRole, onRoleSelect, onProceed }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-purple mb-2">
          Get Started
        </h2>
        <p className="text-gray-700">Choose Your Role</p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-lg mx-auto sm:max-w-none">
        <div
          className={`relative border-2 rounded-xl overflow-hidden cursor-pointer transition-colors ${
            selectedRole === "buyer"
              ? "border-primary-purple"
              : "border-gray-200"
          }`}
          onClick={() => onRoleSelect("buyer")}
        >
          <div className="relative w-full h-40 sm:h-48 lg:h-56">
            <Image
              src="/auth-buyer.svg"
              alt="Buyer"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/20 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white">Buyer</h3>
            </div>
          </div>
        </div>

        <div
          className={`relative border-2 rounded-xl overflow-hidden cursor-pointer transition-colors ${
            selectedRole === "shopper"
              ? "border-primary-purple"
              : "border-gray-200"
          }`}
          onClick={() => onRoleSelect("shopper")}
        >
          <div className="relative w-full h-40 sm:h-48 lg:h-56">
            <Image
              src="/auth-shopper.svg"
              alt="Shopper"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/20 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white">Shopper</h3>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={onProceed}
        disabled={!selectedRole}
        className={`w-full py-3 sm:py-4 rounded-xl font-medium transition-opacity ${
          selectedRole
            ? "bg-primary-purple text-white hover:opacity-90"
            : "bg-primary-purple/50 text-white cursor-not-allowed"
        }`}
      >
        Proceed
      </button>
    </div>
  );
}

"use client";
import Image from "next/image";

export default function GetStarted({ selectedRole, onRoleSelect, onProceed }) {
  return (
    <div className="space-y-6">
      <div className="text-left">
        <h2 className="text-4xl font-bold text-primary-purple mb-2">Get Started</h2>
        <p className="text-[#2b2b2b]">Choose Your Role</p>
      </div>

      {/* Role Selection */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div
          className={`relative border-4 rounded-2xl overflow-hidden cursor-pointer ${
            selectedRole === "buyer" ? "border-primary-purple" : "border-gray-200"
          }`}
          onClick={() => onRoleSelect("buyer")}
        >
          <div className="relative w-full h-48 md:w-56 md:h-56">
            <Image
              src="/auth-buyer.svg"
              alt="Buyer"
              fill
              className="object-cover"
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-4"
              style={{
                background: "rgba(2, 2, 2, 0.15)",
                boxShadow: "0 2.238px 2.238px 0 rgba(0, 0, 0, 0.15)",
                backdropFilter: "blur(1.118881106376648px)",
              }}
            >
              <h3 className="text-xl font-bold text-white">Buyer</h3>
            </div>
          </div>
        </div>

        <div
          className={`relative border-4 rounded-2xl overflow-hidden cursor-pointer ${
            selectedRole === "shopper" ? "border-primary-purple" : "border-gray-200"
          }`}
          onClick={() => onRoleSelect("shopper")}
        >
          <div className="relative w-full h-48 md:w-56 md:h-56">
            <Image
              src="/auth-shopper.svg"
              alt="Shopper"
              fill
              className="object-cover"
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-4"
              style={{
                background: "rgba(2, 2, 2, 0.15)",
                boxShadow: "0 2.238px 2.238px 0 rgba(0, 0, 0, 0.15)",
                backdropFilter: "blur(1.118881106376648px)",
              }}
            >
              <h3 className="text-xl font-bold text-white">Shopper</h3>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={onProceed}
        disabled={!selectedRole}
        className={`w-full py-4 rounded-xl font-medium transition-all transform ${
          selectedRole
            ? "bg-primary-purple text-white hover:opacity-90 shadow-lg"
            : "bg-[#9267A08C] text-white cursor-not-allowed"
        }`}
      >
        Proceed
      </button>
    </div>
  );
}

"use client";
import { useState, useRef } from "react";
import { FaCheck } from "react-icons/fa";

export default function Verify({
  onNext,
  onPrev,
  type = "verification",
  email,
}) {
  const [code, setCode] = useState(["", "", "", ""]);
  const [isVerified, setIsVerified] = useState(false);
  const inputRefs = useRef([]);

  const handleInputChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    if (value.length > 1) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newCode.every((digit) => digit !== "")) {
      setTimeout(() => {
        setIsVerified(true);
        setTimeout(() => {
          if (onNext) onNext();
        }, 2000); // Show verified state for 2 seconds
      }, 500);
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const getHeaderText = () => {
    if (type === "reset" || type === "forgot-password") {
      return {
        title: "Reset Password",
        subtitle: "We sent a reset code to your email",
      };
    } else if (type === "signup") {
      return {
        title: "Verify Email",
        subtitle: "We sent a verification code to complete your signup",
      };
    } else {
      return {
        title: "Verify Now",
        subtitle: "We sent a code to the email",
      };
    }
  };

  const headerText = getHeaderText();

  const getSuccessText = () => {
    if (type === "reset" || type === "forgot-password") {
      return {
        title: "Code Verified",
        subtitle: "You can now reset your password",
      };
    } else if (type === "signup") {
      return {
        title: "Email Verified",
        subtitle: "Setting up your account...",
      };
    } else {
      return {
        title: "Verified",
        subtitle: "Verified successfully",
      };
    }
  };

  const successText = getSuccessText();

  if (isVerified) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-4xl text-[#2b2b2b] mb-2">{successText.title}</h2>
          <p className="text-[#2b2b2b]">{successText.subtitle}</p>
        </div>

        <div className="flex justify-center">
          <div className="w-20 h-20 border-3 border-primary-purple rounded-xl flex items-center justify-center animate-pulse">
            <FaCheck className="text-black text-2xl" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl text-[#2b2b2b] mb-2">{headerText.title}</h2>
        <p className="text-[#2b2b2b]">{headerText.subtitle}</p>
        {email && <p className="text-[#666] text-sm mt-1">{email}</p>}
      </div>

      <div className="flex justify-center gap-4 mb-8">
        {code.map((digit, index) => (
          <div
            key={index}
            className={`
              w-14 h-14 md:w-16 md:h-16 rounded-xl p-[2px] transition-all duration-300 overflow-hidden
              ${
                digit
                  ? "bg-gradient-to-b from-[#FF066A] to-[#9747FF]"
                  : "bg-input-background focus-within:bg-gradient-to-b focus-within:from-[#FF066A] focus-within:to-[#9747FF]"
              }
            `}
          >
            <input
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className={`w-full h-full text-center text-xl md:text-2xl font-semibold rounded-[10px] focus:outline-none text-black ${
                digit ? "bg-white" : "bg-input-background focus:bg-white"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Back Button */}
      {onPrev && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={onPrev}
            className="px-6 py-3 border-2 border-gray-300 text-gray-600 rounded-xl font-medium hover:border-primary-purple hover:text-primary-purple transition-all duration-300"
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}

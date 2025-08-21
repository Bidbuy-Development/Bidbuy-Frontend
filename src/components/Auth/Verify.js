"use client";
import { useState, useRef, useEffect } from "react";
import { FaCheck } from "react-icons/fa";

export default function Verify({
  onNext,
  onPrev,
  type = "verification",
  email,
  onResendCode,
}) {
  const [code, setCode] = useState(["", "", "", ""]);
  const [isVerified, setIsVerified] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef([]);

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const handleResendCode = () => {
    if (canResend && onResendCode) {
      onResendCode();
      setTimeLeft(120);
      setCanResend(false);
      setCode(["", "", "", ""]);
    }
  };

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
        }, 2000);
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
        subtitle: "We sent a code to the email address",
      };
    } else {
      return {
        title: "Verify Account",
        subtitle: "We sent a verification code to your email",
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
        title: "Account Verified",
        subtitle: "You can now access your account",
      };
    }
  };

  const successText = getSuccessText();

  if (isVerified) {
    return (
      <div className="w-full space-y-4 sm:space-y-6">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-purple mb-4 sm:mb-6">
            Verify email address
          </h1>
        </div>
        <div className="w-full bg-[#FCFCFC] rounded-2xl shadow-lg p-6 sm:p-8 space-y-4 sm:space-y-6">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 mb-2">
              {successText.title}
            </h2>
            <p className="text-gray-700 text-sm sm:text-base">
              {successText.subtitle}
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 border-3 border-primary-purple rounded-xl flex items-center justify-center animate-pulse">
              <FaCheck className="text-black text-xl sm:text-2xl" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full space-y-4 sm:space-y-6">
      <div className="text-center">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-purple mb-4 sm:mb-6">
          Verify email address
        </h1>
      </div>
      <div className="w-full bg-[#FCFCFC] rounded-2xl shadow-lg p-6 sm:p-8 space-y-4 sm:space-y-6">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 mb-2">
            {headerText.title}
          </h2>
          <p className="text-gray-700 text-sm sm:text-base">
            {headerText.subtitle}
          </p>
          {email && (
            <p className="text-gray-600 text-xs sm:text-sm mt-1">{email}</p>
          )}
        </div>

        <div className="flex justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          {code.map((digit, index) => (
            <div
              key={index}
              className={`
              w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl p-[2px] transition-all duration-300 overflow-hidden
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
                className={`w-full h-full text-center text-lg sm:text-xl md:text-2xl font-semibold rounded-[10px] focus:outline-none text-black ${
                  digit ? "bg-white" : "bg-input-background focus:bg-white"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Timer and Resend Code */}
        <div className="text-center space-y-3 sm:space-y-4">
          {timeLeft > 0 ? (
            <div className="flex items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base text-gray-600">
              <span>
                This code will expire in{" "}
                <span className="font-semibold text-primary-purple">
                  {formatTime(timeLeft)}
                </span>
              </span>
              <button
                type="button"
                onClick={handleResendCode}
                disabled={!canResend}
                className={`font-medium transition-all duration-300 ${
                  canResend
                    ? "text-primary-purple hover:underline cursor-pointer"
                    : "text-gray-400 cursor-not-allowed"
                }`}
              >
                Resend code
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 sm:gap-4">
                <span className="text-sm sm:text-base text-gray-600">
                  Timer expired
                </span>
                <button
                  type="button"
                  onClick={handleResendCode}
                  className="text-sm sm:text-base font-medium text-primary-purple hover:underline cursor-pointer transition-all duration-300"
                >
                  Resend code
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

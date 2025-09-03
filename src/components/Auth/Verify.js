"use client";
import { useState, useRef, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import useAuthStore from "../../stores/useAuthStore";

export default function Verify({
  onNext,
  type = "verification",
  email,
  onResendCode,
}) {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [isVerified, setIsVerified] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef([]);
  const { resendVerificationCode, isLoading, verifyEmail } = useAuthStore();

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

  const handleResendCode = async () => {
    if (canResend && email) {
      try {
        const result = await resendVerificationCode(email, role);
        if (result?.success) {
          setTimeLeft(120);
          setCanResend(false);
          setCode(["", "", "", "", "", ""]);
        }
      } catch (error) {
        console.error("Resend code error:", error);
      }
    } else if (onResendCode) {
      onResendCode();
      setTimeLeft(120);
      setCanResend(false);
      setCode(["", "", "", "", "", ""]);
    }
  };

  const handleInputChange = async (index, value) => {
    if (!/^\d*$/.test(value)) return;
    if (value.length > 1) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check if all digits are filled
    if (newCode.every((digit) => digit !== "")) {
      const otpCode = newCode.join("");

      try {
        const result = await verifyEmail(email, otpCode);
        console.log(email, otpCode);
        console.log("Verification result:", result);

        if (result?.success) {
          setTimeout(() => {
            setIsVerified(true);
            setTimeout(() => {
              if (onNext) onNext();
            }, 2000);
          }, 500);
        } else {
          // Reset the code if verification failed
          setCode(["", "", "", "", "", ""]);
          inputRefs.current[0]?.focus();
        }
      } catch (error) {
        console.error("Verification error:", error);
        setCode(["", "", "", "", "", ""]);
        inputRefs.current[0]?.focus();
      }
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
      <div className="w-full max-w-md mx-auto space-y-4 sm:space-y-6 px-4 sm:px-0">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-purple mb-4 sm:mb-6">
            Verify email address
          </h1>
        </div>
        <div className="w-full bg-[#FCFCFC] rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-gray-800 mb-2">
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
    <div className="w-full max-w-md mx-auto space-y-4 sm:space-y-6 px-4 sm:px-0">
      <div className="text-center">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-purple mb-4 sm:mb-6">
          Verify email address
        </h1>
      </div>
      <div className="w-full bg-[#FCFCFC] rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-gray-800 mb-2">
            {headerText.title}
          </h2>
          <p className="text-gray-700 text-sm sm:text-base">
            {headerText.subtitle}
          </p>
          {email && (
            <p className="text-gray-600 text-xs sm:text-sm mt-1 break-all">
              {email}
            </p>
          )}
        </div>

        <div className="flex justify-center items-center gap-1 xs:gap-2 sm:gap-3 mb-6 sm:mb-8 px-2">
          {code.map((digit, index) => (
            <div
              key={index}
              className={`
              flex-shrink-0 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl p-[2px] transition-all duration-300 overflow-hidden
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
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength="1"
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className={`w-full h-full text-center text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-semibold rounded-[10px] focus:outline-none text-black ${
                  digit ? "bg-white" : "bg-input-background focus:bg-white"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Timer and Resend Code */}
        <div className="text-center space-y-3 sm:space-y-4">
          {timeLeft > 0 ? (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base text-gray-600">
              <span className="text-center">
                This code will expire in{" "}
                <span className="font-semibold text-primary-purple">
                  {formatTime(timeLeft)}
                </span>
              </span>
              <button
                type="button"
                onClick={handleResendCode}
                disabled={!canResend || isLoading}
                className={`font-medium transition-all duration-300 ${
                  canResend && !isLoading
                    ? "text-primary-purple hover:underline cursor-pointer"
                    : "text-gray-400 cursor-not-allowed"
                }`}
              >
                {isLoading ? "Sending..." : "Resend code"}
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                <span className="text-sm sm:text-base text-gray-600">
                  Timer expired
                </span>
                <button
                  type="button"
                  onClick={handleResendCode}
                  disabled={isLoading}
                  className={`text-sm sm:text-base font-medium transition-all duration-300 ${
                    isLoading
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-primary-purple hover:underline cursor-pointer"
                  }`}
                >
                  {isLoading ? "Sending..." : "Resend code"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

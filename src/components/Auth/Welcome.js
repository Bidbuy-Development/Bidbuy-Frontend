"use client";
import { useState, useEffect } from "react";

import Button from "../UI/Button";
import { FaCheck } from "react-icons/fa";
import confetti from "canvas-confetti";

export default function Welcome({ onContinue }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    let interval;

    if (isVisible) {
      // Initial confetti burst when component becomes visible
      setTimeout(() => {
        const circleElement = document.getElementById("success-circle");
        if (circleElement) {
          const rect = circleElement.getBoundingClientRect();
          const x = (rect.left + rect.width / 2) / window.innerWidth;
          const y = (rect.top + rect.height / 2) / window.innerHeight;

          confetti({
            particleCount: 100,
            spread: 70,
            origin: { x, y },
            colors: ["#9267A0", "#FFD700", "#FF69B4", "#00CED1", "#98FB98"],
          });
        }
      }, 300);

      // Continuous confetti animation
      interval = setInterval(() => {
        const circleElement = document.getElementById("success-circle");
        if (circleElement && !document.hidden) {
          const rect = circleElement.getBoundingClientRect();
          const x = (rect.left + rect.width / 2) / window.innerWidth;
          const y = (rect.top + rect.height / 2) / window.innerHeight;

          confetti({
            particleCount: 30,
            spread: 50,
            origin: { x, y },
            colors: ["#9267A0", "#FFD700", "#FF69B4", "#00CED1", "#98FB98"],
            gravity: 0.4,
            scalar: 0.8,
          });
        }
      }, 2000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isVisible]);

  const handleContinue = () => {
    if (onContinue) {
      onContinue();
    }
  };
  return (
    <div className="w-full space-y-6 sm:space-y-8 flex flex-col items-center justify-center px-4 sm:px-0">
      <div className="text-center max-w-2xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-purple mb-3 sm:mb-4">
          Welcome Aboard
        </h2>
        <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-800 leading-relaxed">
          Your profile is complete and you're all set to explore Bidbuy
        </p>
      </div>

      <div
        className="relative flex items-center justify-center h-40 sm:h-48 lg:h-52"
        id="success-circle"
      >
        {/* Outer circle */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-primary-purple/30 to-primary-purple/10 flex items-center justify-center shadow-lg">
          {/* Inner circle */}
          <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-primary-purple/50 to-primary-purple/20 flex items-center justify-center">
            {/* Checkmark icon */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-primary-purple flex items-center justify-center shadow-md">
              <FaCheck className="text-white text-sm sm:text-base lg:text-lg" />
            </div>
          </div>
        </div>

        {/* Animated pulse rings */}
        <div className="absolute w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full border-2 border-primary-purple/20 animate-ping"></div>
        <div className="absolute w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full border border-primary-purple/10 animate-pulse"></div>
      </div>

      <Button
        variant="primary"
        radius="lg"
        className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base w-full sm:w-auto max-w-xs"
        onClick={handleContinue}
      >
        Continue
      </Button>
    </div>
  );
}

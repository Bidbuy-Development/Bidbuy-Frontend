"use client";
import { useState, useEffect } from "react";

import Button from "../UI/Link";
import { FaCheck } from "react-icons/fa";
import confetti from "canvas-confetti";

export default function Welcome({ onContinue }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Handle page visibility changes
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    // Add event listener for visibility change
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup on unmount
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    let interval;

    // Only start confetti when page is visible
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
    <div className="space-y-8 flex flex-col items-center justify-center">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-primary-purple mb-2">
          Welcome Aboard
        </h2>
        <p className="text-2xl text-[#2b2b2b]">
          Your profile is complete and you're all set to explore Bidbuy
        </p>
      </div>

      <div
        className="relative flex items-center justify-center h-52"
        id="success-circle"
      >
        {/* Outer circle */}
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-purple/30 to-primary-purple/10 flex items-center justify-center shadow-lg">
          {/* Inner circle */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-purple/50 to-primary-purple/20 flex items-center justify-center">
            {/* Checkmark icon */}
            <div className="w-12 h-12 rounded-full bg-primary-purple flex items-center justify-center shadow-md">
              <FaCheck className="text-white text-lg" />
            </div>
          </div>
        </div>

        {/* Animated pulse rings */}
        <div className="absolute w-32 h-32 rounded-full border-2 border-primary-purple/20 animate-ping"></div>
        <div className="absolute w-40 h-40 rounded-full border border-primary-purple/10 animate-pulse"></div>
      </div>

      <Button
        variant="primary"
        radius="lg"
        className="px-8 py-3"
        onClick={handleContinue}
      >
        Continue
      </Button>
    </div>
  );
}

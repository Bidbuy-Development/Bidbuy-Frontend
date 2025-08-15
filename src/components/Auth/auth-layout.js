"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Logo from "../UI/Logo";

export default function AuthLayout({ children }) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <div className="min-h-screen flex">
      {/* Left side - Background image with logo */}
      <div className="flex-[45] relative">
        <Image
          src="/Auth-bg.svg"
          alt="Bidbuy background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Logo color="#9267A0" width="330" height="90" />
        </div>
      </div>

      {/* Right side - Form content */}
      <div
        className="flex-[55] flex items-center justify-center p-8 relative"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        {/* Back button */}
        <button
          onClick={handleBack}
          className="absolute top-8 left-8 p-2 cursor-pointer"
        >
          <Image
            src="/BackIcon.svg"
            alt="Back"
            width={24}
            height={24}
            className="object-contain"
          />
        </button>
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}

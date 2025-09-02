"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Logo from "../UI/Logo";

function AuthLayout({ children }) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-col lg:flex-row">
      {/* Left side */}
      <aside className="hidden md:flex md:flex-[65] lg:flex-[45] relative">
        {/* Back button */}
        <button
          onClick={handleBack}
          className="absolute top-8 left-8 p-2 flex items-center justify-center cursor-pointer rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow md:block lg:hidden z-10"
        >
          <Image
            src="/BackIcon.svg"
            alt="Back"
            width={20}
            height={20}
            className="object-contain"
          />
        </button>
        {/* Desktop background */}
        <Image
          src="/Auth-bg2.svg"
          alt="Bidbuy background"
          fill
          className="object-cover hidden lg:block"
          priority
        />
        {/* Tablet background */}
        <Image
          src="/Auth-bg.svg"
          alt="Bidbuy background"
          fill
          className="object-cover block lg:hidden"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Logo color="#9267A0" width="330" height="90" />
        </div>
      </aside>

      {/* Right side */}
      <aside
        className="flex-1 md:flex-[35] lg:flex-[55] flex items-center justify-center p-4 sm:p-6 relative"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        {/* Mobile logo */}
        <div className="absolute top-11 left-4 sm:left-8 md:hidden">
          <Logo color="#9267A0" width="120" height="32" />
        </div>

        {/* Back button */}
        <button
          onClick={handleBack}
          className="absolute top-8 right-4 md:left-8 md:right-8 w-10 h-10 md:hidden lg:flex flex items-center justify-center cursor-pointer rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
        >
          <Image
            src="/BackIcon.svg"
            alt="Back"
            width={20}
            height={20}
            className="object-contain"
          />
        </button>

        <div className="w-full max-w-md mt-16 md:mt-0">{children}</div>
      </aside>
    </div>
  );
}

export default AuthLayout;

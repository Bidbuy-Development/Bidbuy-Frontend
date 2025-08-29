"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../components/UI/Logo";
import Button from "../components/UI/Link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Background image with logo (similar to auth layout) */}
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

      {/* Right side - 404 Content */}
      <div className="flex-[55] flex items-center justify-center p-8 bg-[var(--color-background-color)]">
        <div className="w-full max-w-md text-center space-y-6">
          {/* 404 Animation/Icon */}
          <div className="relative">
            <div className="text-8xl font-bold text-primary-purple opacity-20">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-4xl">🔍</div>
            </div>
          </div>

          {/* Error Message */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-text-title">
              Page Not Found
            </h1>
            <p className="text-md text-secondary-text">
              Oops! The page you're looking for doesn't exist. It might have
              been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          {/* Navigation Options */}
          <div className="flex flex-col gap-4 pt-4">
            <Link href="/">
              <Button variant="primary" radius="full" className="w-full">
                🏠 Go Back Home
              </Button>
            </Link>

            <Link href="/auth/signin">
              <Button variant="secondary" radius="full" className="w-full">
                👤 Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "../UI/Link";

const Hero = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center mx-auto max-w-7xl min-h-screen pt-20 sm:pt-24 lg:pt-28 gap-6">
      <section className="order-1 sm:order-2 self-center px-4 flex flex-col items-start justify-center lg:order-none lg:justify-center lg:h-full">
        <h1 className="text-3xl font-bold sm:text-5xl lg:text-[75px] font-outfit">
          Connecting <span className="text-primary-purple">Buyers</span> and
          personal shoppers
        </h1>
        <p className="py-6 text-lg font-medium">
          Whether you're buying or helping others shop, Bidbuy makes the process
          easy, secure, and rewarding
        </p>
        <div className="flex gap-4">
          <Link href="/auth/signup" className="px-6 py-2">
            Sign up
          </Link>
           <Link variant="secondary" href="/auth/signin" className="px-6 py-2">
            Login
          </Link>
        </div>
      </section>

      <figcaption className="relative h-[409px] lg:h-[584px] sm:h-[800px] order-2 sm:order-1 overflow-hidden blur-mask lg:order-none">
        <Image
          src="/images/heroimgmobile.png"
          alt="Hero section img"
          fill
          quality={80}
          className="object-cover rounded-2xl lg:rounded-[200px] sm:rounded-none px-[var(--spacing-main-inline-padding)] sm:px-0 lg:px-[var(--spacing-main-inline-padding)] lg:hidden"
          priority
        />
        <Image
          src="/images/heroimg.jpg"
          alt="Hero section img"
          fill
          quality={80}
          className="object-cover rounded-2xl lg:rounded-[200px] sm:rounded-none px-[var(--spacing-main-inline-padding)] sm:px-0 lg:px-[var(--spacing-main-inline-padding)] hidden lg:block"
          priority
        />
      </figcaption>
    </section>
  );
};

export default Hero;

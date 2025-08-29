import React from "react";
import Image from "next/image";
import Link from "next/link";

const GetStarted = () => {
  return (
    <section className="w-full min-h-[50vh] flex items-center justify-center bg-white p-4">
      <div className="bg-primary-purple flex flex-col md:flex-row max-w-6xl w-full rounded-xl shadow-lg overflow-hidden">
        {/* Text Content */}
        <div className="flex-1 p-4 sm:p-6 md:p-12 text-white flex flex-col justify-center order-2 md:order-1">
          <h2 className="text-md sm:text-xl md:text-2xl lg:text-3xl font-medium mb-4 sm:mb-6 leading-tight">
            Ready to make shopping easier or earn as a personal shopper?
          </h2>
          <Link
            href="/auth/signup"
            className="bg-white text-black px-6 py-2 sm:px-6 sm:py-3  rounded-3xl font-medium hover:bg-gray-200 transition-colors duration-200 w-fit text-sm sm:text-base"
          >
            Get started
          </Link>
        </div>

        {/* Image */}
        <div className="flex-1 p-4 md:p-6 flex items-center justify-center md:justify-end order-1 md:order-2">
          <div className="relative w-full max-w-sm aspect-[4/3]">
            <Image
              src="/images/Cart-Image.jpg"
              alt="Shopping cart"
              fill
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
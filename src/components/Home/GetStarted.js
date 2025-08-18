import React from "react";
import Image from "next/image";
import Link from "next/link";

const GetStarted = () => {
  return (
    <section>
      <div className="min-h-[50vh] flex items-center justify-center text-center bg-white">
        <div className="bg-primary-purple  flex flex-col-reverse mx-7 my-6 md:flex-row md:mx-10 md:my-9 justify-center overflow-hidden rounded-lg">
          
          {/* Left text */}
          <div className="flex-1 p-8 text-white flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-medium leading-snug mb-6">
              Ready to make shopping easier or earn as a personal shopper?
            </h2>
            <Link href="/auth/signup">
              <button className="bg-white text-black px-6 py-3 rounded-md font-medium w-fit hover:bg-gray-200 transition">
                Get started
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative mx-auto p-6">
            <Image
              src="/images/Rectangle 84.jpg"
              alt="Shopping cart"
              width={250}
              height={200}
              className="rounded-lg flex justify-center object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;

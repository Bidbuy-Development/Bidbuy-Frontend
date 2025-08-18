import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="px-4 sm:px-6 md:px-16 py-12 bg-background-color">
      {/* Mobile layout */}
      <div className="flex flex-col md:hidden lg:hidden text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">ABOUT US</h2>
        <p className="text-base sm:text-lg to-about-text mb-4">
          Bidbuy connects buyers with trusted personal shoppers who purchase and
          deliver exactly what they need.
        </p>
          <Image
            src="/images/freepik__the-style-is-candid-image-photography-with-natural__74510.jpg"
            alt="Shopper picking groceries"
            width={250}
            height={200}
            className="rounded-lg object-cover w-full h-auto mx-auto mb-4"
          />
        <p className="text-base sm:text-lg to-about-text mb-6">
          Buyers post requests, get competitive bids, and choose the best offer.
          Shoppers earn flexibly while helping others.
        </p>
        <Image
              src="/images/freepik__the-style-is-candid-image-photography-with-natural__74509 1.jpg"
              alt="Laptop with bidbuy"
              width={250}
              height={500}
              className="rounded-lg object-cover w-full h-auto mx-auto mb-4"
            />
      </div>

      {/* Tablet layout */}
      <div className="hidden md:flex flex-col lg:hidden grid-cols-2 gap-6 items-start text-center">
        <h2 className="text-2xl mx-auto sm:text-3xl font-bold mb-4">ABOUT US</h2>
        <div>
          <Image
            src="/images/freepik__the-style-is-candid-image-photography-with-natural__74510.jpg"
            alt="Shopper picking groceries"
            width={250}
            height={200}
            className="rounded-lg object-contain w-full h-auto mx-auto mb-4"
          />
          <p className="text-base sm:text-lg to-about-text">
            Bidbuy connects buyers with trusted personal shoppers who purchase and
            deliver exactly what they need.
          </p>
        </div>

        {/* Second image + second paragraph */}
        <div>
          <Image
              src="/images/freepik__the-style-is-candid-image-photography-with-natural__74509 1.jpg"
              alt="Laptop with bidbuy"
              width={250}
              height={500}
              className="rounded-lg object-cover w-full h-auto mx-auto mb-4"
            />
          <p className="text-base sm:text-lg to-about-text">
            Buyers post requests, get competitive bids, and choose the best offer.
            Shoppers earn flexibly while helping others.
          </p>
        </div>
      </div>

      {/* Desktop layout (side by side) */}
      <div className="hidden lg:flex flex-row items-start justify-between gap-8">
        {/* Images */}
        <div className="flex gap-3">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <Image
              src="/images/freepik__the-style-is-candid-image-photography-with-natural__74510.jpg"
              alt="Shopper picking groceries"
              width={250}
              height={200}
              className="rounded-lg object-cover"
            />
            <Image
              src="/images/freepik__the-style-is-candid-image-photography-with-natural__53184 1.jpg"
              alt="People shopping"
              width={250}
              height={300}
              className="rounded-lg object-cover hidden md:block"
            />
            <Image
              src="/images/freepik__the-style-is-candid-image-photography-with-natural__74509 1.jpg"
              alt="Laptop with bidbuy"
              width={250}
              height={500}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="max-w-lg w-full text-left">
          <h2 className="text-3xl font-bold mb-4">ABOUT US</h2>
          <p className="text-lg to-about-text mb-4">
            Bidbuy connects buyers with trusted personal shoppers who purchase and
            deliver exactly what they need.
          </p>
          <p className="text-lg to-about-text">
            Buyers post requests, get competitive bids, and choose the best offer.
            Shoppers earn flexibly while helping others.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import InfoCard from "./infoCard";
import ClipImage from "./clipImage";

const WhoIsItFor = () => {
  return (
    <section className="py-2 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Buyer Section */}
          <div className="flex flex-col items-start space-y-8 md:space-y-10">
            {/* Section Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-shade-text text-left mb-12 md:mb-16">
              Who is it for
            </h2>
            <InfoCard
              info={{
                title: "Buyer",
                description:
                  "If you don't have the time or energy to shop yourself, Bidbuy connects you with trusted shoppers who can handle it for you",
                buttonLink: "/auth/signup",
              }}
            />
            <ClipImage image="/buyer.png" />
          </div>

          {/* Shopper Section */}
          <div className="flex flex-col-reverse items-start space-y-8 md:space-y-10 lg:flex-col">
            <ClipImage image="/shopper.png" />
            <InfoCard
              info={{
                title: "Shoppers",
                description:
                  "For reliable shoppers who want to earn money by helping others buy and deliver the things they need while working on their own schedule",
                buttonText: "Get Started",
                buttonLink: "/auth/signup",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;

"use client"; // Needed if in Next.js app directory

import React, { useState } from "react";
import Button from "../UI/Button";
import Users from "../Users";
import Shoppers from "../Shopper";
import UserCoreFeatures from "../UserCoreFeatures";
import ShopperCoreFeatures from "../ShopperCoreFeatures";
import CoreFeature from "./CoreFeature";

/* main logic for the how it works section */
const HowItWorks = () => {
  /* state for active button */
  const [activeTab, setActiveTab] = useState(0);

  /*button array for users and shoppers and their respective content */
  const tabs = [
    { label: "Users", content: <Users /> },
    { label: "Shoppers", content: <Shoppers /> },
  ];

  /* core features array for users and shoppers, their respective background images and content */
  const coreFeatures = [
    {
      bgImage: "/users-core-feature.svg",
      title: "Core Feature",
      description: <UserCoreFeatures />,
    },
    {
      bgImage: "/shoppers-core-feature.svg",
      title: "Core Feature",
      description: <ShopperCoreFeatures />,
    },
  ];

  return (
    <>
      <section className="min-h-[100vh] pt-10 lg:pt-20">
        {/* map through the tabs array to display users and shoppers button */}
        <div className="space-x-2 flex justify-center mb-12 lg:mb-5">
          {tabs.map((tab, index) => (
            <Button
              key={index}
              onClick={() => setActiveTab(index)}
              variant={activeTab === index ? "primary" : "secondary"}
              radius="xl"
              className={`cursor-pointer px-6 py-2 transition-colors duration-200 ${
                activeTab === index ? "" : "bg-background-card"
              }`}
            >
              {tab.label}
            </Button>
          ))}
        </div>
        {/* display content for either users or shoppers */}
        <div className="mt-4">{tabs[activeTab].content}</div>
      </section>
      {/* <CoreFeature />
      <CoreFeature /> */}

      {/* Core Features Section */}
      <div className="mt-18 mb-10 lg:mx-2">
        <div
          className="bg-cover bg-center bg-no-repeat h-screen w-full"
          style={{
            backgroundImage: `url(${coreFeatures[activeTab].bgImage})`,
          }}
        >
          {/*displays the core features content for either users or shoppers */}
          <h1 className="text-background-color font-bold text-xl lg:text-4xl text-center pt-15">
            {coreFeatures[activeTab].title}
          </h1>
          <div className="mt-10 lg:mt-85">
            {coreFeatures[activeTab].description}
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;

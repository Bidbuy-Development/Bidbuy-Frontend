import React from "react";
import Card from "./Card";

const Users = () => {
  return (
    <div className="text-center lg:space-y-3.5 flex flex-col items-center px-4 ">
      <h1 className="text-xl lg:text-4xl font-bold lg:font-semibold">
        Shop in 4 Easy Steps
      </h1>
      <p className="text-sm mb-10">
        Get your shopping done in four simple steps
      </p>

      {/* Card Grid for users section*/}
      <div className="text-start grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-16 max-w-7xl">
        <Card
          imageSrc="/request.svg"
          title="Request"
          description="Post your shopping request with details about what you need and when."
          alt="Request icon"
        />
        <Card
          imageSrc="/receives-bids.svg"
          title="Receive Bids"
          description="Get proposals from qualified shoppers with pricing and timelines"
          alt="Receive bids icon"
        />
        <Card
          imageSrc="/pay-securely.svg"
          title="Pay Securely"
          description="Choose your shopper and pay safely through our escrow system"
          alt="Pay securely icon"
        />
        <Card
          imageSrc="/get-delivery.svg"
          title="Get Delivery"
          description="Receive your items and rate your experience"
          alt="Get delivery icon"
        />
      </div>
    </div>
  );
};

export default Users;

import React from "react";
import Card from "./Card";

const Users = () => {
  return (
    <div className="text-center lg:space-y-3.5 flex flex-col items-center">
      <h1 className="text-xl lg:text-4xl font-bold lg:font-semibold">
        Shop in 4 Easy Steps
      </h1>
      <p className="text-sm font-semibold">
        Get your shopping done in four simple steps
      </p>

      {/* Card Grid for users section*/}
      <div className="mt-5 mx-2 text-start grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-8 lg:w-3/4">
        <Card
          imageSrc="/request.svg"
          title="Request"
          description="Post your shopping request with details about what you need and when."
        />
        <Card
          imageSrc="/receives-bids.svg"
          title="Receive Bids"
          description="Get proposals from qualified shoppers with pricing and timelines"
        />
        <Card
          imageSrc="/pay-securely.svg"
          title="Pay Securely"
          description="Choose your shopper and pay safely through our escrow system"
        />
        <Card
          imageSrc="/get-delivery.svg"
          title="Get Delivery"
          description="Receive your items and rate your experience"
        />
      </div>
    </div>
  );
};

export default Users;
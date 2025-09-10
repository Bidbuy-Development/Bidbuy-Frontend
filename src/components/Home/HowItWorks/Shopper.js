import React from "react";
import Card from "./Card";

const Shoppers = () => {
  return (
    <div className="text-center lg:space-y-3.5 flex flex-col items-center px-4">
      <h1 className="text-xl lg:text-4xl font-bold lg:font-semibold">
        <span>Become a shopper in 4 Easy Steps</span>
      </h1>
      <p className="text-sm mb-10">
        Start shopping for others and earn safely through Bidbuy
      </p>

      {/* Card Grid for shoppers section*/}
      <div className="text-start grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-16 max-w-7xl">
        <Card
          imageSrc="/signup.svg"
          title="Sign Up"
          description="Create your profile, choose your specialties, and complete verification to start receiving requests."
          alt="Sign up icon"
        />
        <Card
          imageSrc="/receiveimage.svg"
          title="Receive Shopping Requests"
          description="Get matched with users looking for shoppers in your category. Review item details, budget, and deadlines."
          alt="Receive requests icon"
        />
        <Card
          imageSrc="/sendoffer.svg"
          title="Send Your Offer"
          description="Set your price, delivery timeline, and submit a clear proposal for the shopping request."
          alt="Send offer icon"
        />
        <Card
          imageSrc="/shop.svg"
          title="Shop & Deliver"
          description="Purchase the items, deliver them to the user, and get paid securely through our escrow system."
          alt="Shop and deliver icon"
        />
      </div>
    </div>
  );
};

export default Shoppers;

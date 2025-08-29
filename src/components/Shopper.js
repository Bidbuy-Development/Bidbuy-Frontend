import React from "react";
import Card from "./Card";

const Shoppers = () => {
  return (
    <div className="text-center lg:space-y-3.5 flex flex-col items-center ">
      <h1 className="text-xl lg:text-4xl font-bold lg:font-semibold">
        <span className="block">Become a shopper in</span>
        <span className="block">4 Simple Steps</span>
      </h1>
      <p className="text-sm font-semibold">
        Start shopping for others and earn safely through Bidbuy
      </p>

      {/* Card Grid for shoppers section*/}
      <div className="mt-5 mx-2 md:mx-18 text-start grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-8 lg:w-3/4">
        <Card
          imageSrc="/signup.svg"
          title="Sign Up"
          description="Create your profile, choose your specialties, and complete verification to start receiving requests."
        />
        <Card
          imageSrc="/receiveimage.svg"
          title="Receive Shopping Requests"
          description="Get matched with users looking for shoppers in your category. Review item details, budget, and deadlines."
        />
        <Card
          imageSrc="/sendoffer.svg"
          title="Send Your Offer"
          description="Set your price, delivery timeline, and submit a clear proposal for the shopping request."
        />
        <Card
          imageSrc="/shop.svg"
          title="Shop & Deliver"
          description="Purchase the items, deliver them to the user, and get paid securely through our escrow system."
        />
      </div>
    </div>
  );
};

export default Shoppers;
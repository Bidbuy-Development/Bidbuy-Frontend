import React from "react";
import CoreFeatures from "./CoreFeature";

const UserCoreFeatures = () => {
  return (
    <div className="absolute bottom-8 left-0 right-0 px-4 lg:px-10 xl:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-7xl mx-auto">
        <CoreFeatures
          logo="/verified.svg"
          title="Verified Shoppers"
          description="Browse shoppers by category, view their catalogs and ratings"
        />
        <CoreFeatures
          logo="/payment.svg"
          title="Escrow Payment"
          description="Pay securely funds are held until order delivery is confirmed."
        />
        <CoreFeatures
          logo="/ratings.svg"
          title="Post Requests"
          description="Create requests with item name, quantity, budget, and location"
        />
        <CoreFeatures
          logo="/profiles.svg"
          title="Compare Bids"
          description="View bids with shopper name, rating, prices and accept bid."
        />
      </div>
    </div>
  );
};

export default UserCoreFeatures;

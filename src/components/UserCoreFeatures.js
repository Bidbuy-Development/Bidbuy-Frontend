import React from "react";
import CoreFeatures from "./CoreFeatures";

const UserCoreFeatures = () => {
  return (
    <div className="grid grid-cols-2 gap-8 px-2 md:gap-4 md:px-25 lg:px-20 lg:grid-cols-4">
      <CoreFeatures
        logo="/verified.svg"
        title="Verified Shoppers"
        description="Browse shoppers by category, view their catalogs and ratings"
      />
      <CoreFeatures
        logo="/ratings.svg"
        title="Post Requests"
        description="Create requests with item name, quantity, budget, and location"
      />
      <CoreFeatures
        logo="/payment.svg"
        title="Escrow Payment"
        description="Pay securely funds are held until order delivery is confirmed."
      />
      <CoreFeatures
        logo="/profiles.svg"
        title="Compare Bids"
        description="View bids with shopper name, rating, prices and accept bid."
      />
    </div>
  );
};

export default UserCoreFeatures;

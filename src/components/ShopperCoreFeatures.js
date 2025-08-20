import React from "react";
import CoreFeatures from "./CoreFeatures";

const ShopperCoreFeatures = () => {
  return (
    <div className="grid grid-cols-2 gap-4 px-2 lg:px-20 lg:grid-cols-4">
      <CoreFeatures
        logo="/verified.svg"
        title="Badges"
        description="Earn “Verified Pro” or “Top 5% Shopper” based on performance."
      />
      <CoreFeatures
        logo="/payment.svg"
        title="Escrow Payment"
        description="Pay securely; funds are held until order delivery is confirmed."
      />
      <CoreFeatures
        logo="/ratings.svg"
        title="Receive Ratings"
        description="Feedback affects ratings and badge eligibility."
      />
      <CoreFeatures
        logo="/profiles.svg"
        title="Shopper Profiles"
        description="Public profile with bio, ratings, catalog, and badges."
      />
    </div>
  );
};

export default ShopperCoreFeatures;

import React from "react";
import CoreFeatures from "./CoreFeatures";

const UserCoreFeatures = () => {
  return (
    <div className="flex gap-4 justify-center">
      <CoreFeatures
        logo="/verified.svg"
        title="Verified Shoppers"
        description="Browse only KYC-verified shoppers."
      />
      <CoreFeatures
        logo="/payment.svg"
        title="Escrow Payment"
        description="Pay securely; funds are held until order delivery is confirmed."
      />
      <CoreFeatures
        logo="/ratings.svg"
        title="Shopper Ratings"
        description="Browse only KYC-verified shoppers."
      />
      <CoreFeatures
        logo="/profiles.svg"
        title="Explore Profiles"
        description="Browse only KYC-verified shoppers."
      />
    </div>
  );
};

export default UserCoreFeatures;

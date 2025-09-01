import React from "react";
import CoreFeatures from "./CoreFeatures";

const ShopperCoreFeatures = () => {
  return (
    <div className="grid grid-cols-2 gap-4 px-2 md:gap-4 md:px-25 lg:px-20 lg:grid-cols-4">
      <CoreFeatures
        logo="/verified.svg"
        title="Receive Requests"
        description="Get shopping requests based on your location and expertise."
      />
      <CoreFeatures
        logo="/payment.svg"
        title="Build Reputation"
        description="Earn ratings and reviews to attract more buyers."
      />
      <CoreFeatures
        logo="/ratings.svg"
        title="Submit Bids"
        description="Offer your price, delivery time, and any special services."
      />
      <CoreFeatures
        logo="/profiles.svg"
        title="Secure Earnings"
        description="Payments are stored in your Bidbuy Wallet until withdrawal."
      />
    </div>
  );
};

export default ShopperCoreFeatures;

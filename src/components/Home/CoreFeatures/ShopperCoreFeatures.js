import React from "react";
import CoreFeatures from "./CoreFeature";

const ShopperCoreFeatures = () => {
  return (
    <div className="absolute bottom-8 left-0 right-0 px-4 lg:px-10 xl:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-7xl mx-auto">
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
    </div>
  );
};

export default ShopperCoreFeatures;

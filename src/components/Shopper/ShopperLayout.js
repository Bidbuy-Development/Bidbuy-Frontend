"use client";

import Sidebar from "../UI/Sidebar";
import React, { useState } from "react";

const ShopperLayout = ({ children }) => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  return (
    <div className="min-h-screen">
      <Sidebar userType="shopper" onExpandChange={setSidebarExpanded} />
      <section
        className={`transition-all duration-300 min-h-screen ${
          sidebarExpanded ? "ml-64" : "ml-16"
        }`}
      >
        {children}
      </section>
    </div>
  );
};

export default ShopperLayout;

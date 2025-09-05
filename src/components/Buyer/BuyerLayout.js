"use client";

import Sidebar from "../UI/Sidebar";
import React, { useState } from "react";

const BuyerLayout = ({ children }) => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  return (
    <div className="min-h-screen">
      <Sidebar userType="buyer" onExpandChange={setSidebarExpanded} />
      <section
        className={`transition-all duration-300 min-h-screen ${
          sidebarExpanded ? "ml-64" : "ml-24"
        }`}
      >
        {children}
      </section>
    </div>
  );
};

export default BuyerLayout;

"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  RiDashboardLine,
  RiFileTextLine,
  RiBellLine,
  RiSettings4Line,
  RiQuestionLine,
  RiLogoutBoxLine,
  RiShoppingBagLine,
  RiMoneyDollarCircleLine,
} from "react-icons/ri";
import Logo from "./Logo";
import { toast } from "react-toastify";

// Utility function for className concatenation (similar to cn)
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const buyerSidebarItems = [
  { icon: RiDashboardLine, label: "Dashboard", href: "/buyer" },
  { icon: RiFileTextLine, label: "Request", href: "/buyer/request" },
  { icon: RiBellLine, label: "Notification", href: "/buyer/notification" },
  { icon: RiSettings4Line, label: "Setting", href: "/buyer/setting" },
  { icon: RiQuestionLine, label: "Support", href: "/buyer/support" },
  { icon: RiLogoutBoxLine, label: "Log out", isLogout: true },
];

const shopperSidebarItems = [
  {
    icon: RiDashboardLine,
    label: "Dashboard",
    href: "/shopper",
  },
  { icon: RiFileTextLine, label: "Request", href: "/shopper/request" },
  { icon: RiShoppingBagLine, label: "My Products", href: "/shopper/products" },
  {
    icon: RiMoneyDollarCircleLine,
    label: "Transactions",
    href: "/shopper/transactions",
  },
  { icon: RiSettings4Line, label: "Setting", href: "/shopper/setting" },
  { icon: RiQuestionLine, label: "Support", href: "/shopper/support" },
  { icon: RiLogoutBoxLine, label: "Log out", isLogout: true },
];

export default function Sidebar({ userType = "buyer", onExpandChange }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();

  const sidebarItems =
    userType === "buyer" ? buyerSidebarItems : shopperSidebarItems;

  const handleExpand = (expanded) => {
    setIsExpanded(expanded);
    onExpandChange?.(expanded);
  };

  const handleLogout = () => {
    toast.success("Logged out successfully");
    window.location.href = "/auth/signin";
  };

  // Function to check if a path is active
  const isActivePath = (itemHref) => {
    if (itemHref === "/buyer" || itemHref === "/shopper") {
      return pathname === itemHref;
    }
    return pathname.startsWith(itemHref);
  };

  return (
    <div
      className={cn(
        "fixed left-0 top-0 h-full bg-white border-r border-gray-200 transition-all duration-300 ease-in-out flex flex-col z-50",
        isExpanded ? "w-64" : "w-20"
      )}
      onMouseEnter={() => handleExpand(true)}
      onMouseLeave={() => handleExpand(false)}
    >
      {/* Logo */}
      <div className="flex items-center h-16 px-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center flex-shrink-0">
            <Logo width="50" height="50" color="#000000" />
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex flex-col p-4 space-y-2 flex-1">
        {sidebarItems
          .filter((item) => !item.isLogout)
          .map((item, index) => {
            const Icon = item.icon;
            const isActive = isActivePath(item.href);
            return (
              <a
                href={item.href}
                key={index}
                className={cn(
                  "flex items-center gap-3 px-3 py-3 rounded-lg cursor-pointer transition-all duration-200",
                  isActive
                    ? "bg-gradient-to-r from-[rgba(222,192,232,0.58)] to-[rgba(124,107,130,0.3364)] text-[#4B0561]"
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span
                  className={cn(
                    "transition-opacity duration-300 whitespace-nowrap",
                    isExpanded ? "opacity-100" : "opacity-0"
                  )}
                >
                  {item.label}
                </span>
              </a>
            );
          })}
      </nav>

      {/* Logout - Bottom */}
      <div className="p-4">
        {sidebarItems
          .filter((item) => item.isLogout)
          .map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                onClick={handleLogout}
                className={cn(
                  "flex items-center gap-3 px-3 py-3 rounded-lg cursor-pointer transition-all duration-200",
                  "text-red-500 hover:bg-red-50"
                )}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span
                  className={cn(
                    "transition-opacity duration-300 whitespace-nowrap",
                    isExpanded ? "opacity-100" : "opacity-0"
                  )}
                >
                  {item.label}
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
}

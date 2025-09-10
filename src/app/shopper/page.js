"use client";

import Header from "@/components/Shopper/Header";
import StatsCard from "@/components/Shopper/StatsCard";
import Button from "@/components/UI/Button";
import Image from "next/image";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

function ShopperDashboard() {
  const BiddingActivity = [
    { image: "/profilepic.svg", name: "Alex Sandra", amount: "₦ 150,000" },
    { image: "/profilepic.svg", name: "John Doe", amount: "₦ 120,000" },
    { image: "/profilepic.svg", name: "Jane Smith", amount: "₦ 110,000" },
    { image: "/profilepic.svg", name: "Michael Brown", amount: "₦ 100,000" },
    { image: "/profilepic.svg", name: "Emily Davis", amount: "₦ 90,000" },
    { image: "/profilepic.svg", name: "David Wilson", amount: "₦ 80,000" },
  ];

  return (
    <div className="min-h-screen p-12">
      <Header
        title="Welcome"
        subtitle="Your current sale summary and activity."
        hasNotifications={true}
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <StatsCard title="Active listing" value="8" />
        <StatsCard title="Bids Received" value="36" hasNotification={true} notificationCount={2} />
        <StatsCard title="Orders Completed" value="7" />
        <StatsCard title="Monthly Earnings" value="150,000" />
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <Button variant="primary" className="py-3 px-16" radius="none">
          Add new listing
        </Button>
        <Button variant="primary" className="py-3 px-16" radius="none">
          Promote listing
        </Button>
        <Button variant="primary" className="py-3 px-16" radius="none">
          Respond to request
        </Button>
        <Button variant="primary" className="py-3 px-16" radius="none">
          Withdraw Earning
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-8 ">
        {/* Product Listing */}
        <div className="col-span-2 border-2 border-[#D9D9D9]">
          <div className="flex justify-between items-center p-6">
            <h2 className="text-lg font-semibold">Product listing</h2>
            <button>View All</button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="table-header border-b-2 border-[#D9D9D9]">
                  <th className="text-left py-3 px-4">Product</th>
                  <th className="text-left py-3 px-4">Price</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Time Left</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-row border-b-2 border-[#D9D9D9]">
                  <td className="py-3 px-5">Leather Jacket</td>
                  <td className="py-3 px-5">₦ 150,000</td>
                  <td className="py-3 px-5">
                    <span className="text-[#4BB906]">Active</span>
                  </td>
                  <td className="py-3 px-5">5d 4h</td>
                </tr>
                <tr className="table-row border-b-2 border-[#D9D9D9]">
                  <td className="py-3 px-5">Jacket</td>
                  <td className="py-3 px-5">₦ 150,000</td>
                  <td className="py-3 px-5">
                    <span className="text-[#A90404]">Inactive</span>
                  </td>
                  <td className="py-3 px-5">5d 4h</td>
                </tr>
                <tr className="table-row border-b-2 border-[#D9D9D9]">
                  <td className="py-3 px-5">Leather</td>
                  <td className="py-3 px-5">₦ 150,000</td>
                  <td className="py-3 px-5">
                    <span className="text-[#A90404]">Inactive</span>
                  </td>
                  <td className="py-3 px-5">5d 4h</td>
                </tr>
                <tr className="table-row border-b-2 border-[#D9D9D9]">
                  <td className="py-3 px-5">Leather Shoe</td>
                  <td className="py-3 px-5">₦ 150,000</td>
                  <td className="py-3 px-5">
                    <span className="text-[#A90404]">Inactive</span>
                  </td>
                  <td className="py-3 px-5">5d 4h</td>
                </tr>
                <tr className="table-row">
                  <td className="py-3 px-5">Bag</td>
                  <td className="py-3 px-5">₦ 150,000</td>
                  <td className="py-3 px-5">
                    <span className="text-[#4BB906]">Active</span>
                  </td>
                  <td className="py-3 px-5">5d 4h</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6 border-2 border-[#D9D9D9]">
          {/* Bidding Activity */}
          <div className="flex justify-between items-center p-6">
            <h2 className="text-lg font-semibold">Bidding Activity</h2>
            <button>View All</button>
          </div>

          <div>
            {BiddingActivity.map((activity, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-2 ${
                  index < BiddingActivity.length - 1
                    ? "border-b-2 border-[#D9D9D9]"
                    : ""
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Image
                    src={activity.image}
                    alt={activity.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <span className="text-sm font-medium">{activity.name}</span>
                </div>
                <span className="text-sm font-semibold">{activity.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 mt-8">
        {/* Order Management */}
        <div className="col-span-2 border-2 border-[#D9D9D9]">
          <div className="flex justify-between items-center p-6">
            <h2 className="text-lg font-semibold">Order Management</h2>
            <button>View All</button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="table-header border-b-2 border-[#D9D9D9]">
                  <th className="text-left py-3 px-5">Order</th>
                  <th className="text-left py-3 px-5">Customer</th>
                  <th className="text-left py-3 px-5">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-row border-b-2 border-[#D9D9D9]">
                  <td className="py-3 px-4">#1023</td>
                  <td className="py-3 px-4">Bright Jaden</td>
                  <td className="py-3 px-4">
                    <span className="text-[#A90404]">Shipped</span>
                  </td>
                </tr>
                <tr className="table-row border-b-2 border-[#D9D9D9]">
                  <td className="py-3 px-4">#1023</td>
                  <td className="py-3 px-4">Bright Jaden</td>
                  <td className="py-3 px-4">
                    <span className="text-[#4BB906]">Delivered</span>
                  </td>
                </tr>
                <tr className="table-row">
                  <td className="py-3 px-4">#1023</td>
                  <td className="py-3 px-4">Bright Jaden</td>
                  <td className="py-3 px-4">
                    <span className="text-[#A90404]">Shipped</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Reputation */}
        <div className="p-3 border-2 border-[#D9D9D9]">
          <h2 className="text-lg font-semibold mb-4">Reputation</h2>
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-2xl font-bold">3.6</span>
            <div className="flex ">⭐⭐⭐⭐⭐</div>
          </div>
          <div className="flex items-center justify-start gap-3">
            <div className="w-full h-32">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: "completed", value: 86, fill: "#9267A0" },
                      { name: "remaining", value: 14, fill: "#e5e7eb" },
                    ]}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={60}
                    startAngle={90}
                    endAngle={450}
                    dataKey="value"
                  >
                    <Cell key="completed" fill="#9267A0" />
                    <Cell key="remaining" fill="#e5e7eb" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-col items-start justify-center">
              <span className="text-xl font-bold">86%</span>
              <p className="text-center">Completed Order</p>
            </div>
          </div>
        </div>

        {/* Sales Overview */}
        <div className="p-3 border-2 border-[#D9D9D9]">
          <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
          <div className="mb-4">
            <span>Total sales</span>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold">832</span>
              <span className="text-sm font-semibold text-green-600">
                ↗ 4.7%
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span>Clothe</span>
              <div className="w-full bg-gray-200 h-2">
                <div
                  className="bg-primary-purple h-2"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span>Canvas</span>
              <div className="w-full bg-gray-200 h-2">
                <div
                  className="bg-primary-purple h-2"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span>Macbook</span>
              <div className="w-full bg-gray-200 h-2">
                <div
                  className="bg-primary-purple h-2"
                  style={{ width: "45%" }}
                ></div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span>Bag</span>
              <div className="w-full bg-gray-200 h-2">
                <div
                  className="bg-primary-purple h-2"
                  style={{ width: "30%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopperDashboard;

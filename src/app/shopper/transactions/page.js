import Header from "@/components/Shopper/Header";
import StatsCard from "@/components/Shopper/StatsCard";
import { AiOutlineSearch } from "react-icons/ai";

export default function Transactions() {
  const orders = [
    {
      id: "#1023",
      product: "Sneakers",
      date: "2 Dec 2025",
      customer: "Raheem Khalid",
      status: "Pending",
      items: "5 items",
      total: "28,000",
      image: "/sneakers.svg",
    },
    {
      id: "#1023",
      product: "Sneakers",
      date: "2 Dec 2025",
      customer: "Raheem Khalid",
      status: "Completed",
      items: "5 items",
      total: "28,000",
      image: "/sneakers.svg",
    },
    {
      id: "#1023",
      product: "Sneakers",
      date: "2 Dec 2025",
      customer: "Raheem Khalid",
      status: "Completed",
      items: "5 items",
      total: "28,000",
      image: "/sneakers.svg",
    },
    {
      id: "#1023",
      product: "Sneakers",
      date: "2 Dec 2025",
      customer: "Raheem Khalid",
      status: "Pending",
      items: "5 items",
      total: "28,000",
      image: "/sneakers.svg",
    },
    {
      id: "#1023",
      product: "Sneakers",
      date: "2 Dec 2025",
      customer: "Raheem Khalid",
      status: "Pending",
      items: "5 items",
      total: "28,000",
      image: "/sneakers.svg",
    },
    {
      id: "#1023",
      product: "Sneakers",
      date: "2 Dec 2025",
      customer: "Raheem Khalid",
      status: "Completed",
      items: "5 items",
      total: "28,000",
      image: "/sneakers.svg",
    },
  ];

  return (
    <div className="min-h-screen p-12">
      <Header
        title="Transaction"
        subtitle="All your product tis available in this section"
      />

      <div className="grid grid-cols-4 gap-6 mb-8">
        <StatsCard title="Total Product" value="8" />
        <StatsCard title="Recently Added" value="36" />
        <StatsCard title="Out of stock" value="7" />
        <StatsCard title="Earnings" value="150,000" />
      </div>

      <div className="border-2 border-[#D9D9D9]">
        <div className="p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">All Orders</h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search product"
                  className="bg-[#D9D9D94D] rounded-full pl-10 pr-4 py-2 w-48 outline-0 border-0"
                />
              </div>
              <select className="form-input w-32 outline-0 border-0 bg-[#D9D9D94D] rounded-full px-4 py-2">
                <option>Pending</option>
                <option>Completed</option>
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#D9D9D94D] shadow-md">
              <tr className="table-header">
                <th className="text-left py-4 px-8">Product Info</th>
                <th className="text-left py-4 px-8">Order ID</th>
                <th className="text-left py-4 px-8">Date</th>
                <th className="text-left py-4 px-8">Customers</th>
                <th className="text-left py-4 px-8">Status</th>
                <th className="text-left py-4 px-8">Item</th>
                <th className="text-left py-4 px-8">Total</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="table-row border-b border-[#D9D9D9]">
                  <td className="py-4 px-7">
                    <div className="flex items-center space-x-3">
                      <img
                        src={order.image || "/placeholder.svg"}
                        alt={order.product}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <span className="font-medium">{order.product}</span>
                    </div>
                  </td>
                  <td className="py-4 px-7">{order.id}</td>
                  <td className="py-4 px-7">{order.date}</td>
                  <td className="py-4 px-7">{order.customer}</td>
                  <td className="py-4 px-7">
                    <span
                      className={`${
                        order.status === "Completed"
                          ? "text-[#4BB906]"
                          : "text-[#A90404]"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4 px-7">{order.items}</td>
                  <td className="py-4 px-7">{order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

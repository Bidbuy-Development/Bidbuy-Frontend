"use client";

import Header from "@/components/Shopper/Header";
import StatsCard from "@/components/Shopper/StatsCard";
import { BsUpload } from "react-icons/bs";

function Products() {
  const products = Array(8).fill({
    name: "Limited Vintage car",
    price: "₦3,000,000",
    image: "/car.svg",
  });

  return (
    <div className="min-h-screen p-12">
      <Header
        title="Product"
        subtitle="All your product are available in this section"
      />

      <div className="grid grid-cols-4 gap-6 mb-8">
        <div
          onClick={() => {
            window.location.href = "/shopper/products/upload";
          }}
          className="rounded-xl p-6 border-2 border-[#D9D9D9] cursor-pointer hover:border-[#9267A0] transition-all duration-200"
        >
          <div className="flex flex-col items-center justify-center p-2 border-dashed border-2 border-gray-300 rounded-xl">
            <div className="text-gray-400 text-4xl mb-4">
              <BsUpload className="mx-auto" />
            </div>
            <p className="text-gray-600 text-xs text-center">
              Click to upload or drag and drop
            </p>
          </div>
        </div>
        <StatsCard title="Total Product" value="8" />
        <StatsCard title="Recently Added" value="36" />
        <StatsCard title="Out of stock" value="7" />
      </div>

      <div className="grid grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="border-2 border-[#D9D9D9] rounded-4xl overflow-hidden p-4"
          >
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-auto object-cover rounded-3xl"
            />
            <div className="mt-3">
              <h3>{product.name}</h3>
              <p className="text-md mb-3">{product.price}</p>
              <button className="bg-[#9267A080] py-1 px-4 rounded-xl">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

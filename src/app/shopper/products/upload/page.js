"use client";

import Header from "@/components/Shopper/Header";
import Button from "@/components/UI/Button";
import React, { useState } from "react";
import { BsUpload } from "react-icons/bs";

const ProductUploadPage = () => {
  const [activeTab, setActiveTab] = useState("upload");

  return (
    <div className="min-h-screen p-12">
      <Header
        title="Upload Product"
        subtitle="Upload, manage, and share your product effortlessly"
        hasNotifications={false}
      />

      {/* Tab Navigation */}
      <div className="flex">
        <button
          className={`px-6 py-2  transition-colors ${
            activeTab === "upload" ? "border-b-2 border-[#9267A0]" : null
          }`}
          onClick={() => setActiveTab("upload")}
        >
          Upload
        </button>
        <button
          className={`px-6 py-2  transition-colors ${
            activeTab === "products" ? "border-b-2 border-[#9267A0] " : null
          }`}
          onClick={() => setActiveTab("products")}
        >
          Products
        </button>
      </div>

      <div className="mt-8">
        {activeTab === "upload" && (
          <div className="grid grid-cols-2 gap-12">
            {/* Form Section */}
            <div className="space-y-4 border-2 border-[#D9D9D9] rounded-xl p-6">
              <div>
                <label className="block text-sm  mb-3">Product Name</label>
                <input
                  type="text"
                  placeholder="Enter product name (e.g., Leather Jacket)"
                  className="w-full px-3 py-2 border-1 border-[#D9D9D9] rounded-lg text-sm transition-all duration-200 focus:outline-none focus:border-[#9267A0] focus:shadow-[0_0_0_3px_rgba(146,103,160,0.1)] hover:border-[#9267A0]"
                />
              </div>

              <div>
                <label className="block text-sm  mb-3">Category</label>
                <select className="w-full px-3 py-2 border-1 border-[#D9D9D9] rounded-lg text-sm transition-all duration-200 focus:outline-none focus:border-[#9267A0] focus:shadow-[0_0_0_3px_rgba(146,103,160,0.1)] hover:border-[#9267A0]">
                  <option value="">Select a category</option>
                  <option value="fashion">Fashion</option>
                  <option value="electronics">Electronics</option>
                  <option value="home">Home & Garden</option>
                  <option value="sports">Sports & Recreation</option>
                  <option value="books">Books & Media</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="block text-sm ">Description</label>
                  <span className="text-gray-400 ml-2 font-normal">
                    (0/1000 characters)
                  </span>
                </div>
                <textarea
                  placeholder="Describe your product in detail. Include materials, condition, size, and any special features..."
                  rows={6}
                  className="w-full px-3 py-2 border-1 border-[#D9D9D9] rounded-lg text-sm transition-all duration-200 focus:outline-none focus:border-[#9267A0] focus:shadow-[0_0_0_3px_rgba(146,103,160,0.1)] hover:border-[#9267A0] resize-none"
                />
              </div>

              <div>
                <label className="block text-sm  mb-3">Pricing</label>
                <input
                  type="number"
                  placeholder="300k"
                  className="w-full px-3 py-2 border-1 border-[#D9D9D9] rounded-lg text-sm transition-all duration-200 focus:outline-none focus:border-[#9267A0] focus:shadow-[0_0_0_3px_rgba(146,103,160,0.1)] hover:border-[#9267A0]"
                />
              </div>

              <div>
                <label className="block text-sm  mb-3">Quantity </label>
                <input
                  type="number"
                  placeholder="1"
                  min="1"
                  className="w-full px-3 py-2 border-1 border-[#D9D9D9] rounded-lg text-sm transition-all duration-200 focus:outline-none focus:border-[#9267A0] focus:shadow-[0_0_0_3px_rgba(146,103,160,0.1)] hover:border-[#9267A0]"
                />
              </div>

              <div>
                <label className="block text-sm  mb-3">Location</label>
                <input
                  type="text"
                  placeholder="Enter pickup location (e.g., Lagos, Nigeria)"
                  className="w-full px-3 py-2 border-1 border-[#D9D9D9] rounded-lg text-sm transition-all duration-200 focus:outline-none focus:border-[#9267A0] focus:shadow-[0_0_0_3px_rgba(146,103,160,0.1)] hover:border-[#9267A0]"
                />
              </div>
            </div>

            {/* Upload Section */}
            <div className="border-2 border-[#D9D9D9] rounded-xl p-6">
              <label className="block text-sm  mb-4">
                Product Photos
                <span className="text-gray-400 text-xs ml-2 font-normal">
                  (Up to 6 images)
                </span>
              </label>

              {/* Main Upload Area */}
              <div className="border-2 border-dashed border-[#D9D9D9] rounded-xl p-12 text-center bg-white transition-all duration-200 hover:border-[#9267A0] hover:bg-[#faf5ff] cursor-pointer mb-6 h-80 flex flex-col justify-center">
                <div className="text-[#9267A0] text-5xl mb-4">
                  <BsUpload className="mx-auto" />
                </div>
                <p className="text-gray-600 text-lg font-medium mb-2">
                  Click to upload or drag and drop
                </p>
                <p className="text-gray-400 text-sm">
                  PNG, JPG, JPEG up to 10MB each
                </p>
              </div>

              {/* Image Preview Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8 justify-items-center">
                {Array(6)
                  .fill(0)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square border-2 border-[#D9D9D9] rounded-lg flex items-center justify-center text-gray-400 hover:border-[#9267A0] transition-colors cursor-pointer h-20"
                    ></div>
                  ))}
              </div>

              {/* Action Buttons */}
                <Button
                  variant="primary"
                  className="w-full py-3 text-lg font-semibold"
                >
                  Upload Product
                </Button>
              </div>
          </div>
        )}

        {activeTab === "products" && (
          <div className="flex flex-col items-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📦</div>
            <h3 className="text-xl  mb-2">No Products Yet</h3>
            <p className="text-gray-500 mb-6">
              Start by uploading your first product to begin selling.
            </p>
            <Button
              variant="primary"
              className="px-8 py-3"
              onClick={() => setActiveTab("upload")}
            >
              Upload First Product
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductUploadPage;

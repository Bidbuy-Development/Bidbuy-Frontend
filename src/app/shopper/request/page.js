"use client";

import Header from "@/components/Shopper/Header";
import { LuTags } from "react-icons/lu";
import { CgDanger } from "react-icons/cg";
import { useState } from "react";
import Button from "@/components/UI/Button";
import Image from "next/image";

export default function Request() {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const requests = [
    {
      id: 1,
      name: "Alex Sandra",
      price: "₦ 400,000",
      category: "Fashion",
      priority: "Urgent",
      location: "Lagos",
      product: "Leather Jacket",
      time: "5min ago",
      description:
        "I'm Sarah, a Lagos-based personal shopper passionate about fashion. I help buyers find trendy outfits and accessories at the best prices. With 3 years of experience sourcing quality items, I assure authentic products, quick updates, and stress-free delivery.",
      image: ["/house.svg", "/cartwo.svg","/house.svg", "/cartwo.svg","/house.svg", "/cartwo.svg"],
    },
    {
      id: 2,
      name: "John Doe",
      price: "₦ 350,000",
      category: "Electronics",
      priority: "Urgent",
      location: "Abuja",
      product: "Laptop",
      time: "10min ago",
      description:
        "I need a laptop for programming work. Looking for something with good specs - at least 16GB RAM and SSD. Can you help?",
      image: ["/house.svg", "/cartwo.svg","/house.svg", "/cartwo.svg"],
    },
    {
      id: 3,
      name: "Jane Smith",
      price: "₦ 200,000",
      category: "Fashion",
      priority: "Urgent",
      location: "Lagos",
      product: "Designer Shoes",
      time: "15min ago",
      description:
        "Looking for designer heels for a wedding. Size 7. Need them by this weekend. Can you arrange express delivery?",
      image: ["/house.svg", "/cartwo.svg","/house.svg", "/cartwo.svg","/house.svg", "/cartwo.svg"],
    },
    {
      id: 4,
      name: "Mike Johnson",
      price: "₦ 500,000",
      category: "Electronics",
      priority: "Urgent",
      location: "Abuja",
      product: "Camera",
      time: "20min ago",
      description:
        "I'm a photographer looking for a professional camera. Need something with excellent low-light performance.",
      image: ["/house.svg", "/cartwo.svg","/house.svg", "/cartwo.svg"],
    },
    {
      id: 5,
      name: "Sarah Wilson",
      price: "₦ 150,000",
      category: "Home",
      priority: "Urgent",
      location: "Lagos",
      product: "Furniture",
      time: "25min ago",
      description:
        "Looking for a comfortable sofa for my living room. 3-seater preferred. Modern design.",
      image: ["/house.svg", "/cartwo.svg","/house.svg", "/cartwo.svg","/house.svg", "/cartwo.svg"],
    },
    {
      id: 6,
      name: "David Brown",
      price: "₦ 300,000",
      category: "Fashion",
      priority: "Urgent",
      location: "Abuja",
      product: "Watch",
      time: "30min ago",
      description:
        "Need a luxury watch for my anniversary. Looking for something classic and elegant.",
      image: ["/house.svg", "/cartwo.svg","/house.svg", "/cartwo.svg"],
    },
  ];

  return (
    <div className="min-h-screen p-12">
      <Header title="Request" subtitle="Manage request for manage" />

      <div className="grid grid-cols-3 gap-8">
        {/* Requests List */}
        <div className="col-span-1">
          <div className="border-2 border-[#D9D9D9] rounded-xl shadow-sm">
            <div className="p-6 border-b border-[#D9D9D9]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-600">2 unread</span>
              </div>
              <div className="relative border-2 border-[#D9D9D9] rounded-2xl">
                <input
                  type="text"
                  placeholder="Search request"
                  className="pl-4 pr-4 py-3 w-full outline-0 border-0"
                />
              </div>
            </div>

            <div className="divide-y divide-[#D9D9D9]">
              {requests.map((request) => (
                <div
                  key={request.id}
                  className={`p-6 cursor-pointer transition-colors ${
                    selectedRequest === request.id
                      ? "bg-[#D9D9D94A]"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedRequest(request.id)}
                >
                  <div className="flex flex-col items-start space-y-2">
                    <div className="flex items-center justify-between space-x-3 w-full">
                      <h3>{request.name}</h3>
                      <div className="font-semibold">{request.price}</div>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="text-sm text-gray-500 flex items-center gap-2">
                        <LuTags />
                        <span>{request.category}</span>
                      </div>
                      <div className="text-sm  flex items-center gap-2">
                        <CgDanger />
                        <span className="text-[#FF0000]">
                          {" "}
                          {request.priority}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start justify-between w-full mt-2">
                    <p>{request.product}</p>
                    <h3 className="text-sm">{request.time}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Messages Panel */}
        <div className="col-span-2 border-2 border-[#D9D9D9] rounded-xl p-6">
          {selectedRequest ? (
            (() => {
              const selected = requests.find((r) => r.id === selectedRequest);
              return (
                <div className="h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6 w-full">
                    <h2 className="text-lg font-semibold">{selected.name}</h2>
                    <p className="text-md">{selected.price}</p>
                  </div>

                  {/* Product Info */}
                  <div className="flex items-center gap-10 mb-6">
                    <div className="flex flex-col gap-3">
                      <h2 className="text-md font-semibold">Category</h2>
                      <div className="text-sm flex items-center gap-2">
                        <LuTags />
                        <span>{selected.category}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h2 className="text-md font-semibold">Priority</h2>
                      <div className="text-sm flex items-center gap-2">
                        <CgDanger />
                        <span className="text-[#FF0000]">
                          {selected.priority}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h2 className="text-md font-semibold">Location</h2>
                      <div className="text-sm flex items-center gap-2">
                        <LuTags />
                        <span>{selected.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Button Content */}
                  <div className="flex items-center gap-6">
                    <button
                      className="px-4 py-2 bg-primary-purple text-white rounded-md border-2 border-primary-purple"
                      variant="primary"
                      radius="md"
                    >
                      Accept
                    </button>
                    <button
                      className="px-4 py-2 border-2 border-primary-purple text-black rounded-md"
                      variant="secondary"
                      radius="md"
                    >
                      Decline
                    </button>
                  </div>

                  {/* Description */}
                  <div className="flex flex-col gap-2 mt-6">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Description
                    </h3>
                    <p className="text-[#02020287] leading-relaxed">
                      {selected.description}
                    </p>
                  </div>

                  {/* Images */}
                  <div className="flex flex-col gap-2 mt-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Images</h3>
                    {selected.image && selected.image.length > 0 && (
                      <div className="flex items-center justify-start flex-wrap gap-10">
                        {selected.image.map((img, index) => (
                          <div key={index} className="relative">
                            <Image
                              src={img}
                              alt={`Request Image ${index + 1}`}
                              width={50}
                              height={150}
                              className="rounded-lg object-cover w-full h-32"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })()
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-gray-400 mb-4 text-4xl">💬</div>
              <h2 className="text-lg font-semibold mb-2 text-gray-700">
                Messages
              </h2>
              <p className="text-gray-500 text-sm text-center">
                Click on a request from the list to view the full details and
                message
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

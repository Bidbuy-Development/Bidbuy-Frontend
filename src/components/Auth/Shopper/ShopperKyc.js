"use client";
import { useState } from "react";
import { FaRegFileImage } from "react-icons/fa";
import Image from "next/image";

export default function ShopperKyc({ onNext, onPrev }) {
  const [showDocumentOverlay, setShowDocumentOverlay] = useState(false);
  const [selectedDocumentType, setSelectedDocumentType] = useState("");
  const [frontDocument, setFrontDocument] = useState(null);
  const [backDocument, setBackDocument] = useState(null);

  const documentTypes = ["Drivers License", "Passports", "National ID"];

  const handleDocumentTypeSelect = (type) => {
    setSelectedDocumentType(type);
    setShowDocumentOverlay(false);
  };

  const handleFileUpload = (e, side) => {
    const file = e.target.files[0];
    if (side === "front") {
      setFrontDocument(file);
    } else {
      setBackDocument(file);
    }
  };

  const handleContinue = () => {
    if (!selectedDocumentType || !frontDocument || !backDocument) {
      alert("Please complete all verification steps");
      return;
    }
    onNext();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-primary-purple mb-2">
          Verify Account
        </h2>
        <p className="text-[#2b2b2b]">
          Just a few more details to get your account ready
        </p>
      </div>

      {/* Document Type Selection */}
      <div className="relative mb-6">
        <div
          className="w-full px-6 py-4 border-2 border-black rounded-xl cursor-pointer flex justify-between items-center focus:outline-none text-[#2b2b2b]"
          onClick={() => setShowDocumentOverlay(!showDocumentOverlay)}
        >
          <span>{selectedDocumentType || "Document type"}</span>
          <span
            style={{
              transform: showDocumentOverlay
                ? "rotate(180deg)"
                : "rotate(0deg)",
              transition: "transform 0.2s",
            }}
          >
            ▼
          </span>
        </div>

        {showDocumentOverlay && (
          <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden mt-1">
            {documentTypes.map((type, index) => (
              <div
                key={type}
                onClick={() => handleDocumentTypeSelect(type)}
                className="px-8 py-4 cursor-pointer hover:bg-gray-50 transition-colors text-[#2b2b2b]"
                style={{
                  borderBottom:
                    index < documentTypes.length - 1
                      ? "1px solid #f0f0f0"
                      : "none",
                }}
              >
                {type}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Front Document Upload */}
      <div className="mb-6">
        <div
          className="w-full px-6 py-2 rounded-xl border-2 border-black cursor-pointer flex justify-between items-center"
          onClick={() => document.getElementById("front-upload").click()}
          style={{
            color: frontDocument ? "#2b2b2b" : "#999",
          }}
        >
          <div className="flex items-center gap-3">
            <div>
              <div className="text-md font-medium text-[#2b2b2b] mb-1">
                Front
              </div>
              <div className="text-xs text-[#1e1e1e]">
                {frontDocument
                  ? frontDocument.name
                  : "Upload doc Supports: JPG, PNG, PDF"}
              </div>
            </div>
          </div>
          <FaRegFileImage className="text-xl text-black" />
        </div>
        <input
          id="front-upload"
          type="file"
          accept=".jpg,.jpeg,.png,.pdf"
          onChange={(e) => handleFileUpload(e, "front")}
          className="hidden"
        />
      </div>

      {/* Back Document Upload */}
      <div className="mb-6">
        <div
          className="w-full px-6 py-2 rounded-xl border-2 border-black cursor-pointer flex justify-between items-center"
          onClick={() => document.getElementById("back-upload").click()}
          style={{
            color: backDocument ? "#2b2b2b" : "#999",
          }}
        >
          <div className="flex items-center gap-3">
            <div>
              <div className="text-sm font-medium text-[#2b2b2b] mb-1">
                Back
              </div>
              <div className="text-xs text-[#1e1e1e]">
                {backDocument
                  ? backDocument.name
                  : "Upload doc Supports: JPG, PNG, PDF"}
              </div>
            </div>
          </div>
          <FaRegFileImage className="text-xl text-black" />
        </div>
        <input
          id="back-upload"
          type="file"
          accept=".jpg,.jpeg,.png,.pdf"
          onChange={(e) => handleFileUpload(e, "back")}
          className="hidden"
        />
      </div>

      {/* Face Verification */}
      <div className="mb-8">
        <h3 className="text-[#2b2b2b] text-lg mb-4 font-semibold">
          Face verification
        </h3>

        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center bg-input-background">
          <div className="w-24 h-24 mx-auto mb-2 relative flex items-center justify-center">
            <Image
              src="/OpenCamera.svg"
              alt="Open Camera"
              width={90}
              height={90}
              className="object-contain"
            />
          </div>

          <button
            type="button"
            className="bg-white border border-gray-300 rounded-full px-4 py-2 text-sm text-[#2b2b2b] hover:bg-gray-50 transition-colors font-medium"
          >
            Open Camera
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4">
        {onPrev && (
          <button
            type="button"
            onClick={onPrev}
            className="flex-1 px-6 py-4 border-2 border-gray-300 text-gray-600 rounded-xl font-medium hover:border-primary-purple hover:text-primary-purple transition-all duration-300"
          >
            Back
          </button>
        )}
        <button
          type="button"
          className="flex-1 bg-primary-purple text-white py-4 rounded-xl font-medium hover:opacity-90 transition-opacity"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

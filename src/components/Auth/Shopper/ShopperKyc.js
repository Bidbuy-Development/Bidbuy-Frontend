"use client";
import { useState } from "react";
import { FaRegFileImage } from "react-icons/fa";
import Image from "next/image";
import Button from "../../UI/Button";

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
    if (file) {
      if (side === "front") {
        setFrontDocument(file);
      } else {
        setBackDocument(file);
      }
    }
  };

  const handleContinue = () => {
    if (!selectedDocumentType || !frontDocument || !backDocument) {
      alert("Please complete all verification steps");
      return;
    }

    const kycData = {
      documentType: selectedDocumentType,
      frontDocument: frontDocument,
      backDocument: backDocument,
    };

    onNext(kycData);
  };

  return (
    <div className="w-full space-y-4 sm:space-y-6 mt-10 sm:mt-0">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-purple mb-2">
          Verify Account
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          Just a few more details to get your account ready
        </p>
      </div>

      <div className="relative mb-4 sm:mb-6">
        <div
          className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-300 rounded-xl cursor-pointer flex justify-between items-center focus:outline-none text-gray-700 bg-input-background text-sm sm:text-base"
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
                className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 cursor-pointer hover:bg-gray-50 transition-colors text-gray-700 text-sm sm:text-base"
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

      <div className="mb-4 sm:mb-6">
        <div
          className="w-full px-4 sm:px-6 py-2 sm:py-3 rounded-xl border-2 border-gray-300 cursor-pointer flex justify-between items-center bg-input-background"
          onClick={() => document.getElementById("front-upload").click()}
        >
          <div className="flex items-center gap-3">
            <div>
              <div className="text-sm sm:text-base font-medium text-gray-700 mb-1">
                Front
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                {frontDocument
                  ? frontDocument.name
                  : "Upload doc Supports: JPG, PNG, PDF"}
              </div>
            </div>
          </div>
          <FaRegFileImage className="text-lg sm:text-xl text-gray-700" />
        </div>
        <input
          id="front-upload"
          type="file"
          accept=".jpg,.jpeg,.png,.pdf"
          onChange={(e) => handleFileUpload(e, "front")}
          className="hidden"
        />
      </div>

      <div className="mb-4 sm:mb-6">
        <div
          className="w-full px-4 sm:px-6 py-2 sm:py-3 rounded-xl border-2 border-gray-300 cursor-pointer flex justify-between items-center bg-input-background"
          onClick={() => document.getElementById("back-upload").click()}
        >
          <div className="flex items-center gap-3">
            <div>
              <div className="text-sm sm:text-base font-medium text-gray-700 mb-1">
                Back
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                {backDocument
                  ? backDocument.name
                  : "Upload doc Supports: JPG, PNG, PDF"}
              </div>
            </div>
          </div>
          <FaRegFileImage className="text-lg sm:text-xl text-gray-700" />
        </div>
        <input
          id="back-upload"
          type="file"
          accept=".jpg,.jpeg,.png,.pdf"
          onChange={(e) => handleFileUpload(e, "back")}
          className="hidden"
        />
      </div>

      <div className="mb-6 sm:mb-8">
        <h3 className="text-gray-700 text-center sm:text-left text-base sm:text-lg mb-3 sm:mb-4 font-semibold">
          Face verification
        </h3>

        <div className="w-40 mx-auto sm:w-full sm:mx-0 border-2 border-dashed border-gray-300 rounded-xl p-4 sm:p-6 lg:p-8 text-center bg-input-background">
          <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-2 relative flex items-center justify-center">
            <Image
              src="/OpenCamera.svg"
              alt="Open Camera"
              width={90}
              height={90}
              className="object-contain w-full h-full"
            />
          </div>

          <button
            type="button"
            className="bg-white border border-gray-300 rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-50 transition-colors font-medium"
          >
            Open Camera
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        {onPrev && (
          <Button
            variant="secondary"
            radius="lg"
            onClick={onPrev}
            className="px-6 sm:px-8 py-3 sm:py-4 w-full text-sm sm:text-base cursor-pointer"
          >
            Back
          </Button>
        )}
        <Button
          variant="primary"
          radius="lg"
          onClick={handleContinue}
          className="px-6 sm:px-8 py-3 sm:py-4 w-full text-sm sm:text-base cursor-pointer"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

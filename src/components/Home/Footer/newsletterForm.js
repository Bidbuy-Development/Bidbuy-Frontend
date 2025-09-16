"use client";

import React, { useState } from "react";
import { TextArea, FieldError } from "react-aria-components";
import TextField from "../../UI/TextField";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import { toast } from "react-toastify";
import ErrorMessage from "../Contact/ErrorMessage";
import { MdEmail } from "react-icons/md";

export default function NewsletterForm() {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prevFormData) =>
      Object.fromEntries(Object.keys(prevFormData).map((key) => [key, ""]))
    );

    toast.success("Subscription successful!");
  };

  return (
    <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
      <div className="relative flex items-center">
        <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 z-10" />
        <Input
          type="email"
          placeholder="Enter email address"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          rounded="none"
          className="w-full md:w-80 pl-10 py-1 bg-white text-gray-700 border border-gray-200 focus:border-primary-purple transition-colors duration-200"
        />
      </div>

      <Button
        type="button"
        onClick={handleSubmit}
        variant="secondary"
        radius="none"
        className="text-black bg-white font-semibold px-4 py-1 border border-white hover:bg-gray-50 transition-colors duration-200"
      >
        Subscribe
      </Button>
    </div>
  );
}

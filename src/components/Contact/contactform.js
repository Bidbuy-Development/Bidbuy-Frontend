"use client";

import React, { useState } from "react";
import {
  TextArea,
  FieldError,
} from "react-aria-components";
import TextField from "../UI/TextField";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Label from "../UI/Label";
import { FaArrowRight } from "react-icons/fa";
import { toast } from "react-toastify";
import ErrorMessage from "./ErrorMessage";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    complaint: "",
    message: "",
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

    toast.success("Your form was submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
      {/* Name */}
      <TextField
        name="name"
        isRequired
        value={formData.name}
        onChange={(val) => handleChange("name", val)}
      >
        <Label className="not-sr-only text-white block">Name</Label>
        <Input className="border w-full rounded-xl p-2 bg-white" />
        <ErrorMessage/>
      </TextField>

      {/* Email */}
      <TextField
        name="email"
        type="email"
        isRequired
        value={formData.email}
        onChange={(val) => handleChange("email", val)}
      >
        <Label className="not-sr-only text-white block">Email</Label>
        <Input className="border w-full rounded-xl p-2 bg-white" />
        <ErrorMessage/>
      </TextField>

      {/* Complaint */}
      <TextField
        name="complaint"
        isRequired
        value={formData.complaint}
        onChange={(val) => handleChange("complaint", val)}
      >
        <Label className="not-sr-only text-white block">Complaint</Label>
        <Input className="border w-full rounded-xl p-2 bg-white" />
        <ErrorMessage/>
      </TextField>

      {/* Message */}
      <TextField
        name="message"
        isRequired
        value={formData.message}
        onChange={(val) => handleChange("message", val)}
      >
        <Label className="not-sr-only text-white block">Message</Label>
        <TextArea
          id="message"
          rows={3}
          minLength={10}
          className="border p-2 focus:outline-none text-primary-purple rounded-xl bg-white w-full"
        />
        <ErrorMessage/>
      </TextField>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        radius="2xl"
        className="text-sm text-white !px-0 !py-1 lg:w-[183px] max-lg:[120px]"
      >
        <span className="flex items-center gap-7">
          <FaArrowRight
            className="bg-white rounded-full p-1 text-black ml-[-70px]"
            size={30}
          />
          Submit
        </span>
      </Button>
    </form>
  );
}

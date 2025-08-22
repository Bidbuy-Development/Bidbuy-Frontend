"use client";

import React, { useState } from "react";
import {
  TextArea,
  FieldError,
} from "react-aria-components";
import TextField from "../UI/TextField";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { toast } from "react-toastify";
import ErrorMessage from "../Contact/ErrorMessage";
import { MdOutlineMail } from "react-icons/md";


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
    <form onSubmit={handleSubmit} className="md:flex gap-2 h-[50px] max-md:flex max-md:flex-col max-md:gap-2  ">
    
      <TextField
        name="email"
        type="email"
        isRequired
        placeholder="Enter email address"
        value={formData.email}
        onChange={(val) => handleChange("email", val)}
         >
        <div className="flex ">
        <MdOutlineMail  className=" absolute left-1 top-[14px] -translate-y-1/2 fold-bold text-black  w-[1rem] " />
        <Input className=" md:w-[333px]  !pl-6 !py-0 !max-md:h-[20px]   bg-white text-gray-500 rounded-none " />
        </div>
        <ErrorMessage className="!text-white w-[300px] h-[27px] mt-1"/>
      </TextField>

     
      <Button
        type="submit"
        variant="secondary"
        radius="none"
        className="text-black !px-0 !py-0 md:w-[106px] max-md:w-[99px] h-[25px] max-md:h-[30px] max-md:mx-auto "
      >
          Subscribe
      </Button>
    </form>
  );
}

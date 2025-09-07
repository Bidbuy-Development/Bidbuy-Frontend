import React from "react";
import ContactInfo from "../Contact/contactinfo";
import ContactForm from "../Contact/contactform";

const Contact = () => {
    return (
      <section id="contactus" className="relative max-w-full md:h-[641px] bg-[url('/contact.jpg')] bg-cover bg-center max-md:h-[741px]">
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        {/* Content above overlay */}
        <div className="relative z-10 max-md:mx-auto max-lg:mx-12 lg:mx-20 max-md:w-[300px]">
          <h2 className="text-white text-center text-[1.6rem] max-md:text-[1.4rem] font-[700] pt-10 mb-10">
            Contact Us
          </h2>
          <div className="flex justify-between  max-md:flex-col-reverse max-md:mb-6">
            <div className="w-auto max-md:text-sm max-sm:text-xs  ">
              <ContactInfo />
            </div>
            {/* Right Side */}
            <div className=" lg:w-[480px] max-lg:w-[330px] max-md:w-full rounded-[20px] px-4 py-5 backdrop-blur-3xl backdrop-brightness-100 backdrop-contrast-50  max-md:mb-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    );
  }

export default Contact;

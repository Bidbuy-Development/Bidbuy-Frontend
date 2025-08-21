import React from "react";
import ContactInfo from "../Contact/contactinfo";
import SocialIcons from "../Contact/contacticons";
import ContactForm from "../Contact/contactform";

function Contact() {
  return (
    //git test for changes
    <section className="max-w-max-width py-[134px] px-[75px]  ">
      <div className="flex  max-lg:flex-wrap">
        <div className="flex flex-col w-1/2 max-lg:w-full py-6 gap-6">
          <h2 className="text-primary-purple text-[1.6rem] max-md:text-[1.4rem]  max-sm:text-[1.2rem] font-[700] pt-10">
            Contact Us
          </h2>
          <div className="max-md:text-sm max-sm:text-xs">
            <ContactInfo />
          </div>

          <SocialIcons />
        </div>

        {/* Right Side */}
        <div className="w-1/2 max-lg:w-full rounded-md shadow-[1px_1px_20px_gray-200] border border-gray-200 shadow-gray-300 px-3 py-3">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;

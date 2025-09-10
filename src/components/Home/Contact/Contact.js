import React from "react";
import ContactInfo from "./contactinfo";
import ContactForm from "./contactform";

const Contact = () => {
  return (
    <section
      id="contactus"
      className="relative min-h-screen bg-[url('/contact.jpg')] bg-cover bg-center flex items-center"
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content above overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-white text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-12 lg:mb-16">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Right Side - Contact Form (shown first on mobile) */}
          <div className="flex justify-center md:order-2">
            <div className="w-full max-w-md lg:max-w-lg rounded-2xl p-4 lg:p-6 backdrop-blur-xl bg-white/10 border border-white/20">
              <ContactForm />
            </div>
          </div>

          {/* Left Side - Contact Info (shown second on mobile, first on desktop) */}
          <div className="flex justify-center md:justify-start md:order-1">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

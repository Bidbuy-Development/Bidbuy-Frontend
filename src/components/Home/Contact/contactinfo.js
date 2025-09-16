import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function ContactInfo() {
  return (
    <div className="flex flex-col gap-6 p-6 lg:p-8 text-white bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl max-w-sm">
      <div className="flex items-center justify-center gap-3">
        <FaPhoneAlt className="text-primary-purple text-xl" />
        <a
          className="text-base md:text-lg font-semibold hover:underline transition-all duration-200"
          href="tel:+2348040000002"
        >
          +234 8040 000 002
        </a>
      </div>

      <div className="flex items-center justify-center gap-3">
        <MdOutlineMail className="text-primary-purple text-xl" />
        <a
          className="text-base md:text-lg font-semibold hover:underline transition-all duration-200"
          href="mailto:bidbuy123@gmail.com"
        >
          bidbuy123@gmail.com
        </a>
      </div>
    </div>
  );
}

export default ContactInfo;

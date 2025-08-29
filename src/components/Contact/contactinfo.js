import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function ContactInfo(){
    return <>

    <div className=" flex flex-col item-center md:mt-30 gap-2 md:backdrop-blur-3xl md:backdrop-brightness-150 md:backdrop-contrast-50  mx-auto w-auto text-white md:border-2 md:border-primary-purple rounded-[20px] lg:py-15 lg:px-15  max-md:justify-center max-lg:py-13 max-lg:px-13 ">

        <div className=" flex justify-center   ">

          <FaPhoneAlt  className=" text-white  w-[1rem] " />
           <a className="italic font-bold text-[15px] hover:underline" href="tel:+2348040000002">
               +234 8040 000 002
            </a>

        </div> 
        <div className=" flex justify-center">

        <MdOutlineMail  className="fold-bold text-white  w-[1rem] " />
        <a className="italic font-bold text-[15px] hover:underline" href = "mailto:bidbuy123@gmail.com">
          bidbuy123@gmail.com
        </a>


        </div>



        </div>


    </>
}
export default ContactInfo;
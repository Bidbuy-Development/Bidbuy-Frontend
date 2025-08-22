import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function ContactInfo(){
    return <>
          
    <div className="flex  gap-7 max-md:justify-center ">

        <div className=" flex flex-col justify-center text-center  text-text-primaery leading-5 p-3  ">
            
          <FaPhoneAlt  className=" text-primary-purple  w-[1rem] mx-auto" />
             <div className="italic text-[15px]">Call Us:</div>
           <a className="italic font-bold text-[15px] hover:underline" href="tel:+2348040000002">
               +234 8040 000 002
            </a>

        </div> 
        <div className=" flex flex-col justify-center text-black text-center leading-5 p-3">
            
          <MdOutlineMail  className="fold-bold text-primary-purple  w-[1rem] mx-auto" />
            <div className="italic  text-[15px]">Email Us:</div>
        <a className="italic font-bold text-[15px] hover:underline" href = "mailto:bidbuy123@gmail.com">
          bidbuy123@gmail.com
        </a>


        </div>
        
       

        </div>
        
  
    </>
}
export default ContactInfo
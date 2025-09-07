 import React from "react";
 import { FaQuoteLeft } from "react-icons/fa";
 
 const Quote= ({ info }) => {
   return (
       <div className="lg:w-[553px] max-lg:w-[98%] lg:px-[56px] max-lg:px-[30px] lg:py-[50px] max-lg:py-[30px] gap-[10px] flex flex-col bg-[#f7f4ed] text-black  ">
        <FaQuoteLeft className="text-primary-gold lg:w-[44px] h-[33px]" />
         <p className="text-[24px] max-md:text-[18px]  leading-[29px] max-lg:leading-[24px]">{info.description}</p>
         <p className=" text-[24px] max-md:text-[18px]   ">{info.author}</p>
         
       </div>
   );
 };
 
 export default Quote;
 
 import React from "react";
 import { FaQuoteLeft } from "react-icons/fa";
 
 const Quote= ({ info }) => {
   return (
       <div className={`lg:w-[553px] max-lg:w-[90%] h-[336px] lg:px-[56px] max-md:[10px]: py-[20px] gap-[10px] flex flex-col bg-[#f7f4ed]  `}>
        <FaQuoteLeft className="text-primary-gold lg:w-[44px] h-[33px]" />
         <p className="text-[24px] max-lg:text-[24px] font-[400] text-shade-text leading-[29px] max-lg:leading-[24px]">{info.description}</p>
         <p className="text-shade-text text-[24px] max-lg:text-[18px] font-[500]  ">{info.author}</p>
         
       </div>
   );
 };
 
 export default Quote;
 
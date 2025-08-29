import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";

function SocialIcons() {
    return<>

    <div className="flex-col gap-1  flex  ">

        <p className="text-[17px] md:text-center text-white font-[500] ">Contact us</p>

        <div className="flex md:gap-[12px] max-md:gap-[29px]">

          <a href="https://facebook.com"  target="_blank" rel="noopener noreferrer"><FaFacebook className="text-white md:w-[28px] md:h-[20px] max-md:w-[37px]" /> </a> 
         
         <a href="https://instagram.com"  target="_blank" rel="noopener noreferrer"> <RiInstagramFill className="text-white md:w-[28px] md:h-[20px] max-md:w-[37px]" /></a>

         
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"> <AiFillTikTok className="text-white md:w-[28px] md:h-[20px] max-md:w-[37px]" /> </a>
                
           <a href="https://x.com" target="_blank" rel="noopener noreferrer"> <BsTwitterX className="text-white md:w-[28px] md:h-[20px] max-md:w-[37px]" /></a>
        </div>


    </div>
    
    </>

}
export default SocialIcons

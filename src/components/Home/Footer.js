import React from "react";
import Logo from "../UI/Logo";
import DownloadLink from "../Footer/downloadLinks";
import SocialIcons from "../Footer/contacticons";
import NewsletterForm from "../Footer/newsletterForm";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";


const Footer = () => {
  return (
    <section className="w-full bg-primary-purple pt-[40px] pb-[40px]">
      <div className="md:mx-[50px] md:mt-[0px] flex flex-col">
          
       <div className="md:flex md:justify-between max-md:space-y-3">      
        
        <div className="flex flex-col gap-1 ">
           <div><Logo color="#ffffff"/></div>
         <div className="md:flex gap-2">

          <DownloadLink info={{
            link:"https://playstore.com",
            content:"Download on Play store",
            icon:<IoLogoGooglePlaystore className="w-[24px] h-[24px]" />
          }} />
          <DownloadLink info={{
            link:"https://appstore.com",
            content:"Download on App store",
            icon:<FaApple className="w-[24px] h-[24px]" />
          }}/>
         </div>
        </div>


        <div>
          <SocialIcons/>
        </div>
      </div> 
        
       <div className="mx:auto flex flex-col gap-1 justify-center max-lg:mt-[15px] ">
        <p className="text-white text-center text-[14px] max-md:mt-[10px]">Subscribe to our newsletter to get updates on our latest offer!</p>
        <div className="flex justify-center"><NewsletterForm/></div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

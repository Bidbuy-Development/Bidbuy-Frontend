import React from "react";
import InfoCard from "../WhoIsItFor/infoCard";
import ClipImage from "../WhoIsItFor/clipImage";


const WhoIsItFor = () => {
  return (

    // buyer
    <section className=" lg:mx-20 my-20 max-lg:mx-auto ">
      <div className=" lg:flex lg:gap-[50px]">
        <div>
      <h2 className="text-shade-text text-[42px] max-lg:text-[32px] font-semibold lg:mb-[40px] max-lg:text-center" >Who is it for</h2>
      <div className="flex flex-col  items-center gap-[30px] lg:h-[787px] lg:w-[502px]">   
      <InfoCard
          info={{
            title: "Buyer",
            description: "If you don’t have the time or energy to shop yourself, Bidbuy connects you with trusted shoppers who can handle it for you",
            buttonLink: "/auth" 
          }}
          />
      <ClipImage image="/buyer.png"/>
          </div>
     </div>

{/* Shopper */}
  <div className="flex flex-col  items-center gap-[10px] lg:h-[757px] lg:w-[502px] max-lg:flex-col-reverse max-lg:mt-[70px] max-lg:gap-[20px]">
      <ClipImage image="/shopper.png"/>
      <InfoCard
          info={{
          title: "Shoppers",
          description: "For reliable shoppers who want to earn money by helping others buy and deliver the things they need while working on their own schedule",
          buttonText: "Get Started",
          buttonLink: "/designs"  
  }}
/>
</div>
</div>
      
    </section>
  );
};

export default WhoIsItFor;
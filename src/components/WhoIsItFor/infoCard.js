import React from "react";
import Button from "../UI/Button";
import Link from "next/link";

const InfoCard = ({ info }) => {
  return (
      <div className={`lg:w-[502px] h-[246px] p-[20px] gap-[25px] flex flex-col `}>
        <h2 className="text-[30px] max-lg:text-[24px] font-semibold text-primary-purple">{info.title}</h2>
        <p className="text-shade-text text-[20px] max-lg:text-[18px] leading-[29px] max-lg:leading-[24px] ">{info.description}</p>
        
        <Link href = {info.buttonLink}>
        <Button    variant="primary" radius="full" 
         className="text-sm text-white !px-0 !py-2 w-[148px] cursor-pointer">
          Sign Up
        </Button>
        </Link>
      </div>
  );
};

export default InfoCard;

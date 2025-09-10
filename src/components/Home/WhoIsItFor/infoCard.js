import React from "react";
import Button from "../../UI/Button";
import Link from "next/link";

const InfoCard = ({ info }) => {
  return (
    <div className="w-full max-w-lg flex flex-col gap-6 text-start lg:text-left mb-5 sm:mb-10 p-2">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-purple">
        {info.title}
      </h2>
      <p className="text-shade-text text-base md:text-lg lg:text-xl leading-relaxed">
        {info.description}
      </p>

      <Link href={info.buttonLink}>
        <Button
          variant="primary"
          radius="full"
          className="text-sm text-white px-8 py-3 cursor-pointer hover:shadow-lg transition-all duration-300"
        >
          Sign Up
        </Button>
      </Link>
    </div>
  );
};

export default InfoCard;

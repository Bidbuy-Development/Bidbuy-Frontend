import React from "react";
import Quote from "../Testimonial/quote";
import AvatarGroup from "../Testimonial/avatarGroup";
import Rating from "../Testimonial/rating";

const Testimonial = () => {
    const people = [
    "/testimonialImage1.jpg",
    "/testimonialImage2.jpg",
    "/testimonialImage3.jpg",
    "/testimonialImage4.jpg",
    "/testimonialImage5.jpg",
  ];
  return (
    <section className="">
      <div className="flex flex-col gap-[45px] max-md:gap-[55px] mx-[80px]  max-md:mx-[20px]">
        <div className="flex justify-between ">
          <div className="max-w-[350px]">
            <p className="text-primary-gold text-[20px]">Potential users</p>
            <h2 className="text-shade-text text-[24px] font-[600]">
              What People Say When We Pitch Bidbuy
            </h2>
          </div>
          <div className="max-md:hidden">
            <Rating rating={4.8} totalStars={5} />
          </div>
        </div>

         <div className="w-[190px]">
         <AvatarGroup avatars={people} />
         </div>
        <div className="lg:flex gap-[24px] max-lg:space-y-[24px]">
          <Quote 
          info = {{
            description : "This would save me so much time. I’m always begging people abroad to help me shop.",
            author : "— Fola, Fashion Retailer"
          }}
        />
          <Quote 
          info = {{
            description : "Wait — I can just post what I want, and verified shoppers will bid to buy it for me? That’s genius",
            author : "— Annie, Busy Mum"
          }}
        />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
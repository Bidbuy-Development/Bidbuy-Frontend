import { RxStarFilled } from "react-icons/rx";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "This would save me so much time. I'm always begging people abroad to help me shop.",
    author: "Fola, Fashion Retailer",
  },
  {
    quote:
      "Wait — I can just post what I want, and verified shoppers will bid to buy it for me? That's genius",
    author: "Annie, Busy Mum",
  },
];

const profileImages = [
    "/testimonialImage1.jpg",
    "/testimonialImage2.jpg",
    "/testimonialImage3.jpg",
    "/testimonialImage4.jpg",
    "/testimonialImage5.jpg",
  ];

export default function Testimonials() {
  return (
    <section className="px-4 sm:px-8 lg:px-16 max-w-9xl mx-auto min-h-screen flex flex-col justify-center">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center md:justify-between">
        <div className="flex-1 mb-6 lg:mb-0">
          <p className="text-amber-600 font-medium mb-2 text-sm sm:text-base">
            Potential users
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            What People Say When We
            <br />
            <span className="sm:hidden"> </span>Pitch Bidbuy
          </h2>
        </div>

        {/* Rating */}
        <div className="hidden sm:flex items-center gap-2 lg:ml-8">
          <span className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            4.8
          </span>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <RxStarFilled
                key={i}
                className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-[#B87A08]"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Profile Photos */}
      <div className="flex items-end mb-8 sm:mb-10 lg:mb-12 border-5 rounded-full w-fit bg-black">
        {profileImages.map((src, index) => (
          <div
            key={index}
            className="relative"
            style={{
              marginLeft: index > 0 ? "-12px" : "0",
              zIndex: profileImages.length - index,
            }}
          >
            <Image
              src={src}
              alt={`User ${index + 1}`}
              width={56}
              height={56}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover border-2 sm:border-3 border-white shadow-lg hover:scale-110 transition-transform duration-200"
            />
          </div>
        ))}
      </div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 w-full">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-full rounded-2xl sm:rounded-[24px] p-6 sm:p-8 lg:p-10 xl:p-14 bg-[#F7F4ED]"
          >
            {/* Quote Icon */}
            <div className="mb-4 sm:mb-6">
              <Image
                src="/quote.svg"
                alt="Quote Icon"
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 opacity-70 drop-shadow-sm"
                width={48}
                height={48}
              />
            </div>

            {/* Quote Text */}
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-normal mb-4 sm:mb-6 leading-relaxed text-gray-800 flex-grow">
              {testimonial.quote}
            </p>

            {/* Author */}
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-gray-700">
              — {testimonial.author}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
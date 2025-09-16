import Image from "next/image";
import React, { useState } from "react";
import Button from "../UI/Button";
import { BsPlus } from "react-icons/bs";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is Bidbuy?",
      answer:
        "Bidbuy is an online platform where users can place shopping requests, and shoppers compete by bidding to fulfill them.",
    },
    {
      question: "How does Bidbuy work?",
      answer:
        "You submit a shopping request specifying the items you want. Shoppers then place bids to fulfill your request, and you choose the shopper you prefer.",
    },
    {
      question: "Is it safe to pay through Bidbuy?",
      answer:
        "Yes, payments are secured through the platform. Your money is only released to the shopper once your order is delivered and confirmed.",
    },
    {
      question: "Can I choose the shopper I want?",
      answer:
        "Yes, after receiving bids from different shoppers, you can select the shopper you trust or prefer to complete your shopping request.",
    },
    {
      question: "How do I place a shopping request?",
      answer:
        "Go to the 'Place Request' page, fill in the details of the items you want, submit your request, and wait for shoppers to bid.",
    },
  ];

  return (
    <section className="p-4 sm:p-8 lg:p-12 relative min-h-screen">
      <div className="max-w-9xl mx-auto">
        {/* Star decoration - positioned absolutely to the whole container */}
        <div className="absolute right-0 top-1/3 -translate-y-1/2 z-10 lg:block hidden">
          <Image
            src="/starhide.png"
            alt="Star decoration"
            width={50}
            height={50}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20">
          {/* FAQ Content */}
          <article className="space-y-6 md:space-y-8">
            <header>
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl:pr-5 font-semibold leading-tight">
                Frequently Asked Questions - Bidbuy
              </h1>
            </header>

            <dl className="space-y-3 md:space-y-4">
              {faqItems.map(({ question, answer }, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg bg-[#E6DDE9] overflow-hidden transition-all duration-300 hover:shadow-md"
                >
                  <dt>
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-4 md:px-6 py-4 md:py-5 text-left flex justify-between items-center font-semibold text-sm md:text-base lg:text-lg"
                      aria-expanded={openFAQ === index}
                    >
                      <span>{question}?</span>
                      <BsPlus
                        className={`w-8 h-8 transition-transform duration-300 ${
                          openFAQ === index ? "rotate-45" : ""
                        }`}
                      />
                    </button>
                  </dt>
                  <dd
                    className={`overflow-hidden transition-all duration-300 ${
                      openFAQ === index
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-4 md:px-6 pb-4 md:pb-5 text-sm md:text-base text-gray-700 leading-relaxed">
                      {answer}.
                    </div>
                  </dd>
                </div>
              ))}
            </dl>
          </article>

          {/* Right Side Content with Images */}
          <aside className="flex flex-col justify-between gap-6 md:gap-8 h-full">
            <div className="space-y-6 md:space-y-8">
              <figure className="relative w-full h-48 md:h-60 lg:h-72 xl:h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/faq.svg"
                  alt="FAQ Illustration"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <figcaption className="sr-only">
                  Illustration for frequently asked questions
                </figcaption>
              </figure>

              <div className="text-center space-y-3">
                <h4 className="text-lg md:text-xl lg:text-2xl font-semibold">
                  Have more questions?
                </h4>
                <p className="text-base md:text-lg lg:text-xl text-gray-600">
                  Send a direct email to our customer care.
                </p>
              </div>
            </div>

            <div className="w-full mt-auto flex justify-center">
              <Button
                radius="none"
                className="w-full px-8 py-3 md:px-10 md:py-4 text-sm md:text-base font-medium hover:shadow-lg transition-all duration-300"
              >
                Send Email
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

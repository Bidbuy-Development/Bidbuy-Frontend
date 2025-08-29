import Image from "next/image";
import React from "react";
import Button from "../UI/Button";

const FAQ = () => {
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
    <section
      className="grid md:grid-cols-1 max-w-7xl lg:grid-cols-2 mx-auto p-5 lg:p-20 gap-40"
      aria-label="FAQ Section"
    >
      <article className="space-y-5">
        <header>
          <h1 className="text-2xl lg:text-4xl lg:pr-14 font-semibold">
            Frequently Asked Questions – Bidbuy
          </h1>
        </header>
        <dl className="space-y-3 mt-20 md:px-20 lg:px-0">
          {faqItems.map(({ question, answer }, index) => (
            <div
              className="collapse collapse-plus border border-base-300 bg-[#E6DDE9]"
              key={index}
            >
              <input
                type="radio"
                name="my-accordion-3"
                // defaultChecked={index === 0}
              />
              <dt className="collapse-title font-semibold text-sm lg:text-[16px]">
                {question}?
              </dt>
              <dd className="collapse-content text-sm">{answer}.</dd>
            </div>
          ))}
        </dl>
      </article>

      <aside className="hidden lg:flex flex-col justify-between gap-5 h-full">
        <div className="space-y-4 relative">
          <figure className="w-full h-70">
            <Image
              src="/faq.svg"
              alt="FAQ Illustration"
              fill
              className="object-cover rounded-2xl"
            />
            <figcaption className="sr-only">
              Illustration for frequently asked questions
            </figcaption>
          </figure>
          <div className="text-center">
            <h4 className="text-xl font-semibold">Have more questions?</h4>
            <p className="text-xl">Send a direct email to our customer care.</p>
          </div>
        </div>
        <div className="">
          <Button radius="none" className="w-[50%] h-15 text-xl mx-auto">
            Send Email
          </Button>
        </div>
      </aside>
    </section>
  );
};

export default FAQ;

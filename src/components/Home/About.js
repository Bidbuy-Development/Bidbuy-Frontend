import React from 'react'
import Image from "next/image";

const About = () => {
  return (
    <section className='px-4 sm:px-6 md:px-13 py-12 bg-background-color'>

      {/* flex-row for desktop*/}

        <div className='flex gap-6 items-center justify-center flex-col lg:flex-row'>
           <Image
             src="/images/Group-Images.png"
                alt="Shopper picking groceries"
                width={250}
                height={200}
                className="rounded-lg object-cover hidden lg:block"
            />

        <div className="max-w-lg w-full text-left">
          <h2 className="text-3xl font-bold mx-auto mb-4">ABOUT US</h2>

          {/* flex-col-reverse for mobile and tablet view */}

          <div className='flex flex-col-reverse sm:flex-col'>
            <Image
                src="/images/Left-Image.jpg"
                alt="Shopper picking groceries"
                width={250}
                height={200}
                className="rounded-lg object-cover w-full h-auto mb-4 md: flex-col lg:hidden"/>
          <p className="text-lg text-about-text mb-4">
            Bidbuy connects buyers with trusted personal shoppers who purchase and
            deliver exactly what they need.
          </p>
          </div>
          
          <div className='flex flex-col-reverse sm:flex-col'>
            <Image
                src="/images/Right-Image.jpg"
                alt="Laptop with bidbuy"
                width={250}
                height={500}
                className="rounded-lg object-cover w-full h-auto mb-4 md:flex-col lg:hidden"/> 
          <p className="text-lg text-about-text">
            Buyers post requests, get competitive bids, and choose the best offer.
            Shoppers earn flexibly while helping others.
          </p>
          </div>
        </div>

        </div>
    </section>

  )
}

export default About
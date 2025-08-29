import Image from "next/image";

export default function About() {
  return (
    <section className="py-8 px-4 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-background-color">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image Collage - Left Side (desktop) */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] xl:h-[600px] hidden lg:block">
              <Image
                src="/images/Group-Images.png"
                alt="Bidbuy service showcase"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="order-1 lg:order-2  w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left text-foreground mb-6 lg:mb-10 tracking-tight">
              ABOUT US
            </h2>

            {/* Mobile image after first section */}
            <div className="relative w-full h-80 lg:hidden mb-6">
              <Image
                src="/images/Left-Image.png"
                alt="Shopper picking groceries"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="space-y-6 text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed text-left">
              <p>
                Bidbuy connects buyers with trusted personal shoppers who
                purchase and deliver exactly what they need.
              </p>
              {/* Mobile image after second section */}
              <div className="relative w-full h-80 lg:hidden mb-6">
                <Image
                  src="/images/Right-Image.png"
                  alt="Laptop with bidbuy"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <p>
                Buyers post requests, get competitive bids, and choose the best
                offer. Shoppers earn flexibly while helping others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
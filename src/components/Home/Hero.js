import Image from "next/image";
import Link from "../UI/Link";
import heroImg from "../../../public/images/heroimg.jpg";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});


const Hero = () => {
  return (
    <section className="grid grid-rows-[1fr,minmax(200px,800px)]   lg:grid-cols-2   justify-between items-center mx-auto max-w-[var(--container-max-width)]  min-h-screen  py-5 gap-6 ">

      <section className=" order-1 sm:order-2 self-start px-[var(--spacing-main-inline-padding)] flex flex-col items-start lg:order-none">
        <h1 className={`text-3xl font-bold sm:text-5xl  lg:text-[75px] ${outfit.className}`}>Connecting <span className="text-primary-purple">Buyers</span> and personal shoppers</h1>
        <p className={`py-6 text-lg font-medium`}>
          Whether you’re buying or helping others shop, Bidbuy makes the process easy, secure, and rewarding
        </p>
        <Link href='#' className='py-2.5 px-10 font-semibold' >View Shop</Link>
      </section>


      <figcaption className="relative h-[409px] lg:h-[584px] sm:h-[800px] order-2 sm:order-1 overflow-hidden  blur-mask  lg:order-none">
        <Image
          src={heroImg}
          alt="Hero section img"
          fill
          quality={80}
          className="object-cover rounded-2xl lg:rounded-[200px] sm:rounded-none px-[var(--spacing-main-inline-padding)] sm:px-0 lg:px-[var(--spacing-main-inline-padding)]"
          placeholder="blur"
          priority
        />
      </figcaption>

    </section >
  );
};

export default Hero;

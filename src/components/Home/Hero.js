import Image from "next/image";
import Button from "../UI/Button";


const Hero = () => {
  return (
    <section className="flex flex-col sm:flex-col-reverse lg:flex-row justify-between items-center mx-auto max-w-[var(--container-max-width)]  min-h-screen  py-10 gap-6 ">

      <div className="w-full  lg:w-1/2 px-2 ">
        <h1 className="text-3xl font-bold sm:text-5xl  lg:w-full  ">Connecting <span className="text-primary-purple">Buyers</span> and personal shoppers</h1>
        <p className="py-6 text-lg">
          Whether you’re buying or helping others shop, Bidbuy makes the process easy, secure, and rewarding
        </p>
        <Button >View Shop</Button>
      </div>


      <div className="relative w-full h-[409px] sm:h-[800px] lg:h-[584px] overflow-hidden   lg:w-1/2 blur-mask ">
        <Image
          src="/heroimg.jpg"
          alt="Hero section img"
          fill
          quality={80}
          className="object-cover rounded-2xl lg:rounded-[200px] sm:rounded-none px-2 sm:px-0 lg:pr-2"
          priority
        />
      </div>

    </section>
  );
};

export default Hero;

"use client";
import GetStarted from "@/components/Home/GetStarted";
import Contact from "@/components/Home/Contact/Contact";
import FAQ from "@/components/Home/FAQ";
import Footer from "@/components/Home/Footer/Footer";
import Hero from "@/components/Home/Hero";
import HowItWorks from "@/components/Home/HowItWorks/HowItWorks";
import Header from "@/components/Home/Header";
import Testimonial from "@/components/Home/Testimonial";
import WhoIsItFor from "@/components/Home/WhoIsItFor/WhoIsItFor";
import About from "@/components/Home/About";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <HowItWorks />
      <WhoIsItFor />
      <Testimonial />
      <FAQ />
      <Contact />
      <GetStarted />
      <Footer />
    </>
  );
}

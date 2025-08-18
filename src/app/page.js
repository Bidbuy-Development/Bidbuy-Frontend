import GetStarted from "@/components/Home/GetStarted";
import Contact from "@/components/Home/Contact";
import FAQ from "@/components/Home/FAQ";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import HowItWorks from "@/components/Home/HowItWorks";
import NavBar from "@/components/Home/NavBar";
import Testimonial from "@/components/Home/Testimonial";
import WhoIsItFor from "@/components/Home/WhoIsItFor";
import About from "@/components/Home/About";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About/>
        <HowItWorks />
        <WhoIsItFor />
        <Testimonial />
        <FAQ />
        <Contact />
        <GetStarted />
      </main>
      <Footer />
    </>
  );
}

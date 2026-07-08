import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Trusted from "@/components/sections/Trusted";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trusted />
      <Services />
      <Stats />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </>
  );
}
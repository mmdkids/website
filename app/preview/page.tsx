import AboutUsHero from "@/app/about/page";
import About from "@/components/blocks/about";
import AboutSection from "@/components/blocks/about-us";
import CallToAction from "@/components/blocks/call-to-action";
import ChildCareServices from "@/components/blocks/child";
import ConnectWithUs from "@/components/blocks/connect-with-us";
import ContactUs from "@/components/blocks/contact-us";
import FAQSection from "@/components/blocks/FAQs";
import FeaturesAndServices from "@/components/blocks/features-services";

import HeroSection from "@/components/blocks/hero-section";
import MissionSection from "@/components/blocks/our-mission";

import OurMission from "@/components/blocks/our-missionz";
import ProcessSection from "@/components/blocks/process";
import ServicesGrid from "@/components/blocks/seervices";
import Testimonials from "@/components/blocks/testimonial";

export default function Home() {
  return (
    <div className="">
      <HeroSection/>

      <AboutSection/>
      
      <MissionSection/>
      

     
      <Testimonials/>
      <ContactUs/>

      <ConnectWithUs/>

      <About/>

      <OurMission/>

      <AboutUsHero/>

      <CallToAction/>

      <ChildCareServices/>

      <FeaturesAndServices/>

      <FAQSection/>

      <ProcessSection/>

      <ServicesGrid/>

      


    </div>
  );
}

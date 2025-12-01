import AboutSection from "@/components/blocks/about-us";
import CallToAction from "@/components/blocks/call-to-action";
import { HealYourselfSection } from "@/components/blocks/heal";
import HeroSection from "@/components/blocks/hero-section";
import MissionSection from "@/components/blocks/our-mission";
import Testimonials from "@/components/blocks/testimonial";

export default function Home() {
  return (
    <div className="">
      <HeroSection/>

          <AboutSection/>
            
            {/* <MissionSection/> */}
            <HealYourselfSection/>
      
           
            <Testimonials/>


            <div className="px-5 w-full items-center justify-center">
                    <CallToAction />
                  </div>
      


    </div>
  );
}

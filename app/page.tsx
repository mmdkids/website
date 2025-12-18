import AboutSection from "@/components/blocks/about-us";
import CallToAction from "@/components/blocks/call-to-action";
import Philosopy from "@/components/blocks/philosophy";
import HeroSection from "@/components/blocks/hero-section";
// import Testimonials from "@/components/blocks/testimonial";
import ImageSeparator from "@/components/custom/separator";
import FeaturesSection from "@/components/features-5";

export default function Home() {
  return (
    <div className="">
      <HeroSection />

      <AboutSection />
      

      {/* <MissionSection/> */}
      <Philosopy />
      

      {/* <Testimonials /> */}

      <div className="px-5 w-full items-center justify-center">
        <CallToAction />
      </div>
      {/* <ImageSeparator src="/el/arranged-1.svg" /> */}
      
    </div>
  );
}

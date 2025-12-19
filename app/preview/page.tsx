import AboutUsHero from "@/app/about/page";
import About from "@/components/blocks/about";
import AboutSection from "@/components/blocks/about-us";
import CallToAction from "@/components/blocks/call-to-action";
import ChildCareServices from "@/components/blocks/child";
import ConnectWithUs from "@/components/blocks/connect-with-us";
import ContactUs from "@/components/blocks/contact-us";
import FeaturesAndServices from "@/components/blocks/features-services";

import HeroSection from "@/components/blocks/hero-section";
import MissionSection from "@/components/blocks/our-mission";

import OurMission from "@/components/blocks/our-missionz";
import ProcessSection from "@/components/blocks/process";
import ServicesGrid from "@/components/blocks/seervices";
import Testimonials from "@/components/blocks/testimonial";
export {}

// import CallToAction from "@/components/blocks/call-to-action";

// export default function ProgamsPage() {
//   return (
//     <div className="w-full flex flex-col items-start justify-start font-fredoka">
//        <div className="w-full min-h-[30vh] flex flex-col bg-muted text-gray-800 mt-20 md:mt-40 px-6 sm:px-10 md:px-20 lg:px-40">
//         {/* Hero Content */}
//         <div className="pt-24 pb-16 max-w-4xl">
//           <h1 className="max-w-2xl font-fredoka text-balance text-4xl sm:text-5xl md:text-6xl font-medium mb-4 md:mb-6">
//             Our Events
//           </h1>
//           <p className="text-muted-foreground my-4 md:my-8 max-w-4xl text-balance text-xl">
//             Masterminds is locally operated nonprofit daycare in Lethbridge, Alberta.
//             We're committed to nurturing young minds through play, compassion,
//             and community connection.
//           </p>
//         </div>
//       </div>

//       <div className="px-40">
        
//       </div>

//       <div className="px-5 w-full items-center justify-center">
//         <CallToAction />
//       </div>
//     </div>
//   );
// }

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

      

      <ProcessSection/>

      <ServicesGrid/>

      


    </div>
  );
}

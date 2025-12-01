import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FeaturesSection from "@/components/features-5";
import FeaturessSection from "@/components/features-three";
import CallToAction from "@/components/blocks/call-to-action";
import { Background } from "@/components/custom/background";

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col items-start justify-start font-fredoka">
      <div className="w-full min-h-[50vh] flex flex-col bg-[#f4e073] text-gray-800 mt-40 px-40">
        {/* Hero Content */}
        <div className="pt-24 pb-16 max-w-4xl">
          <h1 className="max-w-2xl font-fredoka text-balance text-5xl font-medium md:text-6xl mb-6">
            About Us
          </h1>
          <p className="text-muted-foreground my-8 max-w-2xl text-balance text-xl">
            Welcome to Empowered Moms, a place dedicated to supporting physical,
            cognitive, emotional, and social growth for both children and
            parents.
          </p>
        </div>
      </div>

      {/* <Background
        variant="top"
        separatorType="image"
        imageSrc="/blocks/child.png"
        imageAlt="Wave Separator"
        className="w-full"
      >
        
      </Background> */}

      <div className="px-40">
        <FeaturesSection />
        <FeaturessSection />
      </div>

      <div className="px-5 w-full items-center justify-center">
        <CallToAction />
      </div>
    </div>
  );
}

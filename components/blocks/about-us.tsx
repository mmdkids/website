import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section className="w-full font-fredoka bg-accent text-black py-20 px-6 md:px-30 flex flex-col md:flex-row gap-16 items-center justify-between min-h-screen">
      {/* Left Images */}
      <div className="relative w-full md:w-1/2 flex flex-col items-start">
        <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-lg overflow-hidden">
          <Image
            src="/blocks/hero-image.png"
            alt="family photo"
            width="2880"
            height="1842"
            className="object-cover"
          />
        </div>

        <div className="absolute -bottom-10 left-20 w-60 h-60 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/blocks/hero-image.png"
            alt="dad and child"
            width="2880"
            height="1842"
            className="object-cover"
          />
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 flex flex-col gap-2 pl-0 ">
        <p className="text-primary text-sm font-medium">About Us</p>
        <h2 className="max-w-2xl font-fredoka text-balance text-5xl font-medium md:text-6xl">
          Finding Superior Care for Your Baby
        </h2>

        <p className="text-neutral-700 max-w-xl leading-relaxed">
          Reliable child care is essential for single moms striving to balance
          work, family, and personal growth. It provides a safe and nurturing
          environment for children, allowing mothers to pursue their careers and
          goals with peace of mind. Access to trustworthy child care resources
          helps single mothers manage their busy lives more effectively.
        </p>

        <Button className="bg-primary/80 hover:bg-primary w-fit px-6 py-5 text-lg mt-4">
          Learn More
        </Button>
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section className="w-full font-fredoka bg-accent text-black py-20 px-6 md:px-30 flex flex-col md:flex-row gap-16 items-center justify-between min-h-screen overflow-hidden">
      <div className="relative w-full md:w-1/2 flex flex-col items-start">
        <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-lg overflow-hidden">
          <Image
            src="/mm/mmkids-9.png"
            alt="family photo"
            width="2880"
            height="1842"
            className="object-cover"
          />
        </div>

        <div className="absolute left-30 -bottom-3 md:-bottom-5 md:left-80 w-60 h-60 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/mm/mmkids-d-1.png"
            alt="dad and child"
            width="2880"
            height="1842"
            className="object-cover"
          />
        </div>

        <div className="absolute -bottom-40 md:-bottom-10 md:left-10 w-20 h-60 md:w-60 md:h-60 rounded-lg overflow-hidden">
          <Image
            src="/el/star.svg"
            alt="decorative star"
            width={2880}
            height={1842}
            className="object-cover"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-2 pl-0">
        <p className="text-primary text-sm font-medium">About Us</p>

        <h2 className="max-w-2xl font-fredoka text-balance text-5xl font-medium md:text-6xl">
          Finding Superior Care for Your Baby
        </h2>

        <p className="text-neutral-800 my-8 max-w-2xl text-balance text-xl">
          At Masterminds Daycare, we believe every child is a little genius in the
          making. As a locally operated nonprofit daycare in Lethbridge, Alberta,
          we are committed to nurturing young minds through play, compassion, and
          community connection. Our daycare is more than a place to learn, it’s a
          place to belong. As a nonprofit, every dollar we receive goes directly
          into enriching our programs, supporting our staff, and creating a
          joyful learning environment. We are proud to serve families with
          affordable care that never compromises on quality.
        </p>

        <Link href="/about">
          <Button className="bg-primary/80 hover:bg-primary w-fit px-6 py-5 text-lg mt-4">
            Learn More
          </Button>
        </Link>
      </div>
    </section>
  );
}

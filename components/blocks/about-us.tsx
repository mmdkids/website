import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section className="w-full font-fredoka bg-accent text-black py-16 px-6 md:px-20">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-16">
        
        {/* IMAGE SIDE */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
          
          {/* Main Image */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-lg overflow-hidden">
            <Image
              src="/mm/mmkids-9.png"
              alt="family photo"
              fill
              className="object-cover"
            />
          </div>

          {/* Overlay Image (Desktop only positioning) */}
          <div className="hidden md:block absolute left-64 bottom-0 w-60 h-60 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/mm/mmkids-d-1.png"
              alt="dad and child"
              fill
              className="object-cover"
            />
          </div>

          {/* Decorative Star */}
          <div className="hidden md:block absolute -bottom-16 left-10 w-24 h-24 md:w-32 md:h-32">
            <Image
              src="/el/star.svg"
              alt="decorative star"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* TEXT SIDE */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left">
          <p className="text-primary text-sm font-medium">About Us</p>

          <h2 className="font-fredoka text-4xl md:text-6xl font-medium">
            Finding Superior Care for Your Baby
          </h2>

          <p className="text-neutral-800 my-6 max-w-xl text-lg mx-auto md:mx-0">
            At Masterminds Daycare, we believe every child is a little genius in the
            making. As a locally operated nonprofit daycare in Lethbridge, Alberta,
            we are committed to nurturing young minds through play, compassion, and
            community connection.
          </p>

          <Link href="/about">
            <Button className="bg-primary/80 hover:bg-primary w-fit px-6 py-5 text-lg mx-auto md:mx-0">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Assuming you have a Button component

export default function About() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 relative mb-8 lg:mb-0">
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] mx-auto lg:mx-0">
            {/* Main image - assuming it's the father and daughter */}
            <div className="absolute top-0 left-0 w-[80%] h-[80%] z-10">
              <Image
                src="/father-daughter.jpg" // Replace with your image path
                alt="Father and daughter"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            {/* Second image - assuming it's the father playing with baby */}
            <div className="absolute bottom-0 right-0 w-[60%] h-[60%] z-20 transform translate-x-4 translate-y-4">
              <Image
                src="/father-baby.jpg" // Replace with your image path
                alt="Father playing with baby"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            {/* Decorative elements */}
            <span className="absolute top-[-20px] left-[70%] text-green-500 text-6xl rotate-45 z-0">
              &#10003; {/* Checkmark */}
            </span>
            <span className="absolute bottom-[-20px] left-[-20px] text-green-500 text-6xl rotate-[120deg] z-0">
              &#10003; {/* Checkmark */}
            </span>
          </div>
        </div>

        <div className="lg:w-1/2 lg:pl-16 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Guiding Single Mothers to Success
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
            At Empowered Moms, we are passionate about supporting and guiding
            single mothers on their path to success. We understand the unique
            challenges and responsibilities that come with being a single mother,
            and we are dedicated to empowering you to overcome obstacles and
            unlock your full potential.
          </p>
          <Button asChild className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg text-lg">
            <Link href="#learn-more">
              Learn More
            </Link>
          </Button>

          <div className="grid grid-cols-2 gap-8 mt-12 text-gray-700">
            <div>
              <p className="text-4xl font-bold">180+</p>
              <p className="text-lg">Our complete Projects</p>
            </div>
            <div>
              <p className="text-4xl font-bold">120+</p>
              <p className="text-lg">Happy Customer</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-4xl font-bold">20+</p>
              <p className="text-lg">International Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
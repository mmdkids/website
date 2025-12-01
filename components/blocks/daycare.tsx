import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Lightbulb, Utensils, Pencil, Handshake, ShieldCheck, Clock } from 'lucide-react'; // Assuming you have lucide-react for icons

const services = [
  {
    icon: Lightbulb,
    title: 'Daytime Programs',
    description: 'At our center, we prioritize creating a warm and loving environment where every child feels valued and...',
    image: "/blocks/hero-image.png" // Replace with your image paths
  },
  {
    icon: Utensils,
    title: 'Healthy Meals and Snacks Provided',
    description: 'Nutrition is key to your child\'s growth and development. We provide balanced, wholesome me...',
    image: "/blocks/hero-image.png" // Replace with your image paths
  },
];

export default function DaycarePrograms() {
  return (
    <section className="py-16 bg-white mt-10">
      <div className="container mx-auto lg:px-8 text-start">
        <h2 className="max-w-2xl font-fredoka text-balance text-5xl font-medium md:text-6xl mb-4">Daycare Programs</h2>
        <p className="text-muted-foreground my-8 max-w-2xl text-balance text-xl text-start justify-start">
          We provide a range of resources and guidance to support their physical, cognitive,
          emotional, and social growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col md:flex-row bg-gray-50 rounded-lg shadow-sm overflow-hidden text-left">
              <div className="md:w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <service.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>
                <Link href="#" className="text-primary hover:underline flex items-center">
                  Find out more <span className="ml-2">&rarr;</span>
                </Link>
              </div>
              <div className="md:w-1/2 relative h-48 md:h-auto">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-r-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
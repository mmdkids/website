import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Lightbulb, Utensils, Pencil, Handshake, ShieldCheck, Clock } from 'lucide-react'; // Assuming you have lucide-react for icons

const services = [
  {
    icon: Lightbulb,
    title: 'Nurturing Care for Every Child',
    description: 'At our center, we prioritize creating a warm and loving environment where every child feels valued and...',
    image: "/blocks/hero-image.png" // Replace with your image paths
  },
  {
    icon: Utensils,
    title: 'Healthy Meals and Snacks Provided',
    description: 'Nutrition is key to your child\'s growth and development. We provide balanced, wholesome me...',
    image: "/blocks/hero-image.png" // Replace with your image paths
  },
  {
    icon: Pencil,
    title: 'Play-Based Learning Approach',
    description: 'We believe that children learn best through play. Our curriculum integrates hands-on activities, ima...',
    image: "/blocks/hero-image.png" // Replace with your image paths
  },
  {
    icon: Handshake,
    title: 'Social and Emotional Development',
    description: 'We focus on building strong social skills and emotional resilience in children. Through group activities,...',
    image: "/blocks/hero-image.png" // Replace with your image paths
  },
  {
    icon: ShieldCheck,
    title: 'Safe and Stimulating Environment',
    description: 'Your child\'s safety is our top priority. Our facility is equipped with child-proofed spaces, secure...',
    image: "/blocks/hero-image.png" // Replace with your image paths
  },
  {
    icon: Clock,
    title: 'Flexible Hours for Busy Parents',
    description: 'We understand the demands of modern life, so we offer flexible scheduling options to fit your nee..',
    image: "/blocks/hero-image.png" // Replace with your image paths
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">It is all we do</h2>
        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          We provide a range of resources and guidance to support their physical, cognitive,
          emotional, and social growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col md:flex-row bg-gray-50 rounded-lg shadow-sm overflow-hidden text-left">
              <div className="md:w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <service.icon className="h-10 w-10 text-green-700 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>
                <Link href="#" className="text-green-700 hover:underline flex items-center">
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
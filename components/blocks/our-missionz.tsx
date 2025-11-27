import React from 'react';
import { Lightbulb, Users, Hand, Megaphone } from 'lucide-react';

// Define the mission data structure
const missionItems = [
  {
    icon: Lightbulb,
    title: "Empowerment",
    description: "Empower them by providing the knowledge, guidance, and support necessary to overcome challenges.",
  },
  {
    icon: Users,
    title: "Community Building",
    description: "Build a supportive community where childcare providers can connect, share best practices.",
  },
  {
    icon: Hand, // Using Hand to symbolize a Personalized Approach/Caring Hands
    title: "Personalized Approach",
    description: "Every child's journey is unique. Our mission is to provide personalized childcare solutions and consulting.",
  },
  {
    icon: Megaphone,
    title: "Advocacy and Awareness",
    description: "Our mission extends beyond caring for children to building stronger, healthier communities.",
  },
];

export default function OurMission() {
  return (
    <div className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Left Section: Mission Statement and CTA */}
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase text-green-500 mb-2">Our Mission</p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">
            Building a Brighter Future for Reliable ChildCare
          </h1>
          <p className="text-gray-400 text-lg mb-10 max-w-md">
            We are dedicated to helping Child thrive, succeed, and find fulfillment in all aspects of their lives.
          </p>
          <button className="w-fit px-8 py-3 text-lg font-medium text-white bg-green-700 rounded-lg shadow-md hover:bg-green-600 transition duration-300">
            Learn More
          </button>
        </div>

        {/* Right Section: Core Values/Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
          {missionItems.map((item, index) => (
            <div key={index} className="flex flex-col space-y-3">
              <div className="p-3 w-fit rounded-full bg-green-900/50 text-green-400 border border-green-800">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-gray-400 text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
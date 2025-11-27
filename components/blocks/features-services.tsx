import React from 'react';
import Image from 'next/image';

export default function FeaturesAndServices() {
  const services = [
    {
      id: 1,
      title: 'Certified Caregivers',
      description:
        'Our caregivers are highly trained, certified professionals with expertise in child development, safety, and emotional support.',
    },
    {
      id: 2,
      title: 'Customisable Care Plans',
      description:
        'Every family is different. We offer flexible care schedules and routines tailored to your child\'s unique needs, from infants to pre-teens.',
    },
    {
      id: 3,
      title: 'Interactive Learning Activities',
      description:
        'We incorporate educational and creative activities to foster your child\'s cognitive, emotional, and social growth in a safe environment.',
    },
    {
      id: 4,
      title: 'Safety and Hygiene Standards',
      description:
        'We prioritize your child\'s safety and well-being with strict hygiene practices, secure play areas, and a focus on child-friendly spaces.',
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Features and Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At the heart of our child care services is a commitment to providing nurturing,
            individualized care for every child. We understand that each
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          {/* Left Text Column */}
          <div className="lg:w-1/2 space-y-8 mb-12 lg:mb-0">
            {services.map((service) => (
              <div key={service.id}>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.id}. {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Right Image Column */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg h-[450px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/child-playing-blocks.jpg" // Replace with your image path
                alt="Child playing with blocks"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
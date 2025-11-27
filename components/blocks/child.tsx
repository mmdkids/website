import React from 'react';
import Image from 'next/image';

export default function ChildCareServices() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        {/* Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/happy-child.jpg" // Replace with your image path
            alt="Happy child in an orange beanie"
            width={1200} // Adjust width as needed
            height={500} // Adjust height as needed
            layout="responsive"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>

        {/* Text Content */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Professional Child Care Services Tailored to Your Family&apos;s Needs
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At the heart of our child care services is a commitment to providing nurturing, individualized care for every child. We understand that each family has unique requirements and each child has distinct needs, which is why we meticulously tailor our services to ensure the best possible experience and development for your little one.
          </p>
        </div>
      </div>
    </section>
  );
}
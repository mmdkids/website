import React from 'react';

export default function ProcessSection() {
  return (
    <section className="bg-[#1e5945] text-white py-16 px-6 sm:px-8 lg:px-16">
      <div className="container mx-auto text-center">
        <p className="text-[#a4d4b1] text-lg font-semibold mb-3">
          &quot;Effortless Steps to Exceptional Service&quot;
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold mb-12">
          Our Simple Process for Quality Care
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="text-6xl font-bold text-[#a4d4b1] mb-4">01</div>
            <h3 className="text-2xl font-semibold mb-4">Consultation and Planning</h3>
            <p className="text-lg leading-relaxed max-w-sm">
              We discuss your family&apos;s needs, preferences, and routines to create a
              personalized child care plan
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="text-6xl font-bold text-[#a4d4b1] mb-4">02</div>
            <h3 className="text-2xl font-semibold mb-4">Introduction and Onboarding</h3>
            <p className="text-lg leading-relaxed max-w-sm">
              Meet your caregiver, tour the facilities
              (if applicable), and ensure your family
              feels confident and comfortable.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="text-6xl font-bold text-[#a4d4b1] mb-4">03</div>
            <h3 className="text-2xl font-semibold mb-4">Ongoing Support and Growth</h3>
            <p className="text-lg leading-relaxed max-w-sm">
              We continuously adapt to your child&apos;s
              needs, offering ongoing communication
              and progress updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
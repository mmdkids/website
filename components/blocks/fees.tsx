import React from "react";

export default function FeesSection() {
  return (
    <section className="w-full font-fredoka bg-accent text-black py-16 px-6 md:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-primary text-sm font-medium">Fees</p>
            <h2 className="font-fredoka text-4xl md:text-6xl font-medium">
              Affordable Childcare Fees
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-neutral-800 text-lg md:text-xl leading-relaxed mb-6">
              Fees are due in advance on the first of every month.
            </p>
            <p className="text-neutral-800 text-lg md:text-xl leading-relaxed">
              Effective April 1, 2025 parents will pay the flat fee listed below. The remainder will be covered by the government. In order to receive government funding for your child, we will share the following information with the ministry: child&apos;s name, date of birth, parent/ guardian(s) name/ contact information, start date and number of hours registered/ attended.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white rounded-lg p-8 border-2 border-primary shadow-lg">
              <h3 className="font-fredoka text-3xl font-medium mb-4 text-primary">
                Full Time
              </h3>
              <p className="text-neutral-600 text-lg mb-4">
                3-5 days per week
              </p>
              <div className="flex items-baseline gap-2">
                <span className="font-fredoka text-5xl font-medium text-primary">
                  $326.25
                </span>
                <span className="text-neutral-600 text-lg">per month</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 border-2 border-primary shadow-lg">
              <h3 className="font-fredoka text-3xl font-medium mb-4 text-primary">
                Part Time
              </h3>
              <p className="text-neutral-600 text-lg mb-4">
                2 days per week
              </p>
              <div className="flex items-baseline gap-2">
                <span className="font-fredoka text-5xl font-medium text-primary">
                  $230
                </span>
                <span className="text-neutral-600 text-lg">per month</span>
              </div>
              <p className="text-sm text-neutral-600 mt-4 italic">
                Subject to availability
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


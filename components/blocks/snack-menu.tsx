import React from "react";

export default function SnackMenuSection() {
  return (
    <section className="w-full font-fredoka bg-white py-16 px-6 md:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-primary text-sm font-medium">Snack Menu</p>
            <h2 className="font-fredoka text-4xl md:text-6xl font-medium">
              Nutritious Snacks for Growing Minds
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-neutral-800 text-lg md:text-xl leading-relaxed">
              We provide your child with two nutritious snacks per day. Canada&apos;s Food Guide will be followed when preparing the snacks. Each snack will contain a minimum of two different food groups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-muted rounded-lg p-6 border border-border">
              <h3 className="font-fredoka text-2xl font-medium mb-3 text-primary">
                Morning Snack
              </h3>
              <p className="text-neutral-800 text-lg">
                Provided at approximately <strong>8:45am</strong>
              </p>
            </div>

            <div className="bg-muted rounded-lg p-6 border border-border">
              <h3 className="font-fredoka text-2xl font-medium mb-3 text-primary">
                Afternoon Snack
              </h3>
              <p className="text-neutral-800 text-lg">
                Provided at approximately <strong>3:00pm</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


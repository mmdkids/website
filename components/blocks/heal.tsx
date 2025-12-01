import { CheckCircle } from "lucide-react";
import Image from "next/image";

export function HealYourselfSection() {
  return (
    <section className="w-full bg-primary font-fredoka text-black py-24 px-6 md:px-20 grid md:grid-cols-2 gap-16 items-center relative min-h-screen">

      {/* Left Content Box */}
      <div className="bg-white text-black rounded-lg shadow-xl p-10 max-w-xl relative border-l-8 border-yellow-400 z-10">
        <h2 className="max-w-4xl font-fredoka text-balance text-5xl font-medium md:text-6xl mb-4">Nurturing Your Child</h2>
        <p className="text-gray-600 mb-8">
          Our mission is to nurture your child&apos;s holistic development. We provide a range of resources and guidance to support physical, cognitive, emotional, and social growth.
        </p>

        <div className="flex flex-col gap-6">
          {[{
            title: "Emotional Healing",
            desc: "Our content explores developmental stages and supports emotional and social growth."
          },{
            title: "Self-Care",
            desc: "We offer practical tips and strategies to help single parents navigate childcare challenges."
          },{
            title: "Mindset and Empowerment",
            desc: "We teach children to see challenges as opportunities and to keep learning and growing."
          },{
            title: "Relationship & Boundaries",
            desc: "Healthy routines and clear expectations can help your child feel safe and secure."
          }].map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <CheckCircle className="text-primary w-6 h-6" />
              <div>
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="relative w-full h-[420px] md:h-[520px] rounded-lg overflow-hidden shadow-xl">
        <Image
          src="/blocks/hero-image.png"
          alt="dad and child"
          width={900}
            height={900}
          className="object-cover"
        />
      </div>
    </section>
  )
}

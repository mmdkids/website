import { CheckCircle } from "lucide-react";
import Image from "next/image";

export const ABOUT_VALUES = [
  {
    title: "Family Partnership",
    desc: "We believe childcare is a partnership, working closely with families to support every child and strengthen our community."
  },
  {
    title: "Working Hand in Hand",
    desc: "We build trusted relationships with parents and caregivers through open communication, personal care, and a welcoming environment."
  },
  {
    title: "Celebrating Diversity",
    desc: "We honor every family’s cultural background through inclusive programs and events that celebrate global traditions."
  },
  {
    title: "Supporting Families in Need",
    desc: "We understand that life can be unpredictable. That’s why we offer free or subsidized tuition for families facing financial hardship, including: Single parent, New immigrants, Families experiencing job loss, Connecting families to community to Resources "
  }
];


export default function Wearedifferent() {
  return (
    <section className="w-full bg-primary font-fredoka text-black py-24 px-6 md:px-20 grid md:grid-cols-2 gap-16 items-center relative min-h-screen">

      {/* Left Content Box */}
      <div className="bg-white text-black rounded-lg shadow-xl px-4 py-10 md:px-10 max-w-xl relative border-l-8 border-yellow-400 z-10">
        <h2 className="max-w-4xl font-fredoka text-balance text-5xl font-medium md:text-6xl mb-4">What makes us different</h2>
        <p className="text-gray-600 mb-8  my-8 max-w-2xl text-balance text-xl">
          We&apos;re a place where families grow together, cultures are celebrated, 
          and community care is at the heart of everything we do. 
          These values guide us every day:
          
        </p>

        <div className="flex flex-col gap-6 text-muted-foreground my-8 max-w-2xl text-balance text-xl">
          {ABOUT_VALUES.map((item, i) => (
            <div key={i} className="flex items-start gap-4 ">
              <CheckCircle className="text-primary w-6 h-6" />
              <div>
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-gray-600 text-xl mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="relative w-full h-[420px] md:h-[520px] rounded-lg overflow-hidden shadow-xl">
        <Image
          src="/mm/mmkids-d-3.png"
          alt="dad and child"
          width={900}
            height={900}
          className="object-cover"
        />
      </div>
    </section>
  )
}

import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Enrollment & Registration",
    questions: [
      {
        question: "How do I enroll my child at Master Mind Daycare?",
        answer:
          "You can enroll your child by filling out our online registration form or visiting the daycare in person. Our staff will guide you through the process and provide all necessary documentation.",
      },
      {
        question: "What documents are required for enrollment?",
        answer:
          "We require a birth certificate, immunization records, emergency contact details, and a completed enrollment form for each child.",
      },
      {
        question: "Is there an age limit for enrollment?",
        answer:
          "Master Mind Daycare accepts children from 6 months to 5 years old, depending on the program you choose.",
      },
    ],
  },
  {
    title: "Programs & Curriculum",
    questions: [
      {
        question: "What programs do you offer for different age groups?",
        answer:
          "We provide age-appropriate programs including infant care, toddler learning, and preschool enrichment, focusing on physical, cognitive, and social development.",
      },
      {
        question: "Do you follow a specific curriculum?",
        answer:
          "Yes, our curriculum integrates Montessori principles with creative play, language development, and social-emotional learning.",
      },
      {
        question: "How do you support children with special needs?",
        answer:
          "Our trained staff works with families to create individualized support plans and ensure inclusive participation in all activities.",
      },
    ],
  },
  {
    title: "Policies & Safety",
    questions: [
      {
        question: "What are your safety and health policies?",
        answer:
          "We follow strict hygiene practices, conduct regular safety drills, and maintain secure entry and exit points. Children are supervised at all times.",
      },
      {
        question: "What is your policy on sick children?",
        answer:
          "Children showing symptoms of contagious illnesses must stay home. We notify parents promptly if a child becomes unwell while at daycare.",
      },
      {
        question: "How do you handle emergencies?",
        answer:
          "All staff are trained in first aid and CPR. We have an emergency protocol in place and notify parents immediately if any incident occurs.",
      },
    ],
  },
];


export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-7xl w-full">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          <div className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                
              </h1>
            ) : (
              <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Got Questions?
              </h2>
            )}
            <p className="text-muted-foreground max-w-md leading-snug lg:mx-auto">
              If you can't find what you're looking for,{" "}
              <Link href="/contact" className="underline underline-offset-4">
                get in touch
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="">
                <h3 className="text-muted-foreground border-b py-4 text-3xl">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

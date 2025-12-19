import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

import { ArrowBigRight, ChevronRight, CirclePlay } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
    return (
        <>
            
                <section className="bg-linear-to-b to-muted from-background font-fredoka overflow-hidden">
                    <div className="relative py-44 md:mt-30 ">
                        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
                            <div className="md:w-1/2">
                                <div>
                                    <h1 className="max-w-2xl font-fredoka text-balance text-5xl font-medium md:text-6xl">Caring Hands, Quality Daycare for Your Little One</h1>
                                    <p className="text-muted-foreground my-8 max-w-2xl text-balance text-xl">Welcome to Masterminds daycare, a supportive space and a locally operated nonprofit daycare in Lethbridge, Alberta. Our mission is to provide a safe, inclusive, and enriching environment where children are empowered to explore, grow, and thrive.</p>

                                    <div className="flex items-center gap-3">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="pr-4.5">
                                            <Link href="#link">
                                                <span className="text-nowrap">Enroll Today</span>
                                                <ArrowBigRight className="opacity-50" />
                                            </Link>
                                        </Button>
                                        <Button
                                            key={2}
                                            asChild
                                            size="lg"
                                            variant="outline"
                                            className="pl-5">
                                            <Link href="/enrol">
                                                
                                                <span className="text-nowrap">Join waitlist</span>

                                            </Link>
                                        </Button>
                                    </div>
                                </div>

                                {/* <div className="mt-10">
                                    <p className="text-muted-foreground">Trusted by teams at :</p>
                                    <div className="mt-6 grid max-w-sm grid-cols-3 gap-6">
                                        <div className="flex">
                                            <Image
                                                className="h-4 w-fit"
                                                src="https://html.tailus.io/blocks/customers/column.svg"
                                                alt="Column Logo"
                                                height="16"
                                                width="1080"
                                            />
                                        </div>
                                        <div className="flex">
                                            <Image
                                                className="h-5 w-fit"
                                                src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                                alt="Nvidia Logo"
                                                height="20"
                                                width="1080"
                                            />
                                        </div>
                                        <div className="flex">
                                            <Image
                                                className="h-4 w-fit"
                                                src="https://html.tailus.io/blocks/customers/github.svg"
                                                alt="GitHub Logo"
                                                height="16"
                                                width="1080"
                                            />
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <div className="perspective-near mt-24 translate-x-12 md:absolute md:-right-6 md:bottom-16 md:left-1/2 md:top-40 md:mt-0 md:translate-x-0">
                            <div className="before:border-foreground/5 before:bg-foreground/5 relative h-full before:absolute before:-inset-x-4 before:bottom-7 before:top-0 before:skew-x-6 before:rounded-[calc(var(--radius)+1rem)] before:border">
                                <div className="bg-background rounded-(--radius) shadow-foreground/10 ring-foreground/5 relative h-full -translate-y-12 skew-x-6 overflow-hidden border border-transparent shadow-md ring-1">
                                    <Image
                                        src="/mm/mmkids.png"
                                        alt="app screen"
                                        width="2880"
                                        height="1842"
                                        className="object-top-left size-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>


                    
                </section>
            
            
            
        </>
    )
}



// import { Button } from "@/components/ui/button";
// import { X } from "lucide-react";
// import Image from "next/image";

// // --- Hero Section Component ---
// const HeroSection = () => {
//   const headline = "Caring Hands, Quality Home Care for Your Little One";
//   const subtext =
//     "Welcome to Empowered Moms, a supportive space committed to empowering single mothers in managing child care and achieving success. Our mission is to offer the guidance, resources and thrive in every aspect of life.";

//   // Unsplash image related to childcare/family
//   const imageUrl = "/blocks/hero-image.png";

//   return (
//     // Full height split section
//     <section className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)]">
//       {/* Left Panel: Text Content (60%) - Charcoal Gray Background */}
//       <div className="w-full lg:w-3/5 bg-neutral-800 p-8 sm:p-16 lg:py-24 lg:pl-32 xl:pl-40 flex items-center min-h-[50vh] lg:min-h-full">
//         <div className="max-w-xl">
//           {/* Headline */}
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
//             {headline}
//           </h1>

//           {/* Subheading */}
//           <p className="mt-6 text-lg text-gray-300 max-w-lg">{subtext}</p>

//           {/* CTA Button */}
//           <div className="mt-10">
//             <Button
//               size="lg"
//               variant="default"
//               className="bg-emerald-600 hover:bg-emerald-700"
//             >
//               Book a Session
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Right Panel: Image Content (40%) - Yellow Background */}
//       <div className="w-full lg:w-2/5 relative bg-amber-400 overflow-hidden flex items-center justify-center p-8 sm:p-12 lg:p-0 min-h-[50vh] lg:min-h-full">
//         {/* Image Container */}
//         <div className="relative w-full h-full flex items-center justify-center py-16">
//           {/* Abstract Decorations (X shapes) */}
//           <div className="absolute top-12 left-12 text-gray-800 transform rotate-45 hidden lg:block">
//             <X className="h-6 w-6" />
//             <X className="h-6 w-6 ml-2 -mt-1" />
//           </div>
//           <div className="absolute bottom-12 right-12 text-gray-800 transform -rotate-45 hidden lg:block">
//             <X className="h-8 w-8" />
//           </div>

//           {/* Image Element */}
//           <div className="relative w-full max-w-lg lg:max-w-none lg:w-3/4 aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
//             <Image
//               src={imageUrl}
//               width={1000}
//               height={800}
//               priority
//               alt="Father and son reviewing papers together"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



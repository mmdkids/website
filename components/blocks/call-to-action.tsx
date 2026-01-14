import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowBigRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="mt-20 mb-20 font-fredoka w-full">
      <div className="">
        <div className="flex flex-col items-center justify-center lg:flex-row">
          <div className="mb-8 lg:mb-0 lg:w-1/3">
            <Image
              src="/mm/mmkids-3.png" // Replace with your image path
              alt="call to action image"
              width={800}
              height={500}
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300 rounded-lg shadow-lg"
            />
          </div>
          <div className="bg-primary p-8 md:p-12 rounded-lg shadow-lg text-white lg:w-1/1 lg:ml-8 ">
            <div className="">
              <h2 className="max-w-2xl font-fredoka text-balance text-3xl font-medium md:text-4xl">
                We&apos;re now accepting new enrollments
              </h2>
              <p className="text-white my-8  max-w-3xl text-balance text-xl mb-6">
                Whether you&apos;re a parent looking for a nurturing space for
                your child, an educator seeking meaningful work, or a supporter
                of early childhood development. Masterminds Daycare welcomes
                you. Together, we&apos;re growing bright futures.
              </p>
              <Button
                asChild
                className="bg-yellow-400 text-green-900 hover:bg-yellow-500"
              >
                <Link href="/enrol">
                  Join waitlist
                  <ArrowBigRight className="opacity-50" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { ArrowBigRight } from "lucide-react";

// export default function CallToAction() {
//   return (
//     <section className="mt-20 mb-20 font-fredoka w-full">
//       <div className="">
//         <div className="flex flex-col items-center justify-center lg:flex-row">
//           <div className="mb-8 lg:mb-0 lg:w-1/3">
//             <Image
//               src="/mm/mmkids-3.png" // Replace with your image path
//               alt="call to action image"
//               width={800}
//               height={500}
//               objectFit="cover"
//               className="hover:scale-105 transition-transform duration-300 rounded-lg shadow-lg"
//             />
//           </div>
//           <div className="bg-primary p-8 md:p-12 rounded-lg shadow-lg text-white lg:w-1/1 lg:ml-8 ">
//             <div className="">
//               <h2 className="max-w-2xl font-fredoka text-balance text-3xl font-medium md:text-4xl">
//                 We&apos;re now accepting new enrollments
//               </h2>
//               <p className="text-white my-8  max-w-3xl text-balance text-xl mb-6">
//                 Whether you&apos;re a parent looking for a nurturing space for
//                 your child, an educator seeking meaningful work, or a supporter
//                 of early childhood development. Masterminds Daycare welcomes
//                 you. Together, we&apos;re growing bright futures.
//               </p>
//               <Button
//                 asChild
//                 className="bg-yellow-400 text-green-900 hover:bg-yellow-500"
//               >
//                 <Link href="/enrol">
//                   Enroll now
//                   <ArrowBigRight className="opacity-50" />
//                 </Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

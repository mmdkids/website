"use client";

import { XIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import Logo from "@/components/custom/logo";
import Link from "next/link";

export default function Banner() {
  const [isVisible, setIsVisible] = useState(true); // show immediately

  // Disable body scroll when modal is open
  useEffect(() => {
    if (!isVisible) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsVisible(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 sm:p-6"
      onClick={handleBackdropClick}
    >
      {/* Modal */}
      <div
        className="relative font-fredoka w-full max-w-3xl lg:max-w-4xl bg-gray-100 rounded-xl shadow-2xl px-6 sm:px-10 md:px-20 py-10 md:py-20 text-foreground"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Exit button */}
        <Button
          aria-label="Close modal"
          variant="ghost"
          className="absolute top-5 right-5 size-8 p-0 hover:bg-transparent"
          onClick={() => setIsVisible(false)}
        >
          <XIcon size={18} className="opacity-60 hover:opacity-100" />
        </Button>

        <div className="flex gap-2">
          <div className="flex grow gap-3">
            <div className="flex grow flex-col justify-between gap-6">
              {/* Logo */}
              <div aria-hidden="true" className="-ml-1 md:ml-0">
                <Logo />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <p className="font-medium text-4xl md:text-5xl pb-4">
                  We&lsquo;re accepting new enrolments
                </p>
                <p className="text-muted-foreground text-2xl md:text-4xl">
                  Enrolment is currently open. Secure a spot for your child today.
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-3">
                <Button asChild className="text-3xl h-16 px-12">
                  <Link href="/enrol" onClick={() => setIsVisible(false)}>
                    Join waitlist
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client";

// import { XIcon } from "lucide-react";
// import { useEffect, useState } from "react";

// import { Button } from "@/components/ui/button";
// import Logo from "@/components/custom/logo";
// import Link from "next/link";

// export default function Banner() {
//   const [isVisible, setIsVisible] = useState(true); // show immediately

//   // Disable body scroll when modal is open
//   useEffect(() => {
//     if (!isVisible) return;

//     const originalOverflow = document.body.style.overflow;
//     document.body.style.overflow = "hidden";

//     return () => {
//       document.body.style.overflow = originalOverflow;
//     };
//   }, [isVisible]);

//   if (!isVisible) return null;

//   const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (e.target === e.currentTarget) {
//       setIsVisible(false);
//     }
//   };

//   return (
//     <div
//       role="dialog"
//       aria-modal="true"
//       className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 sm:p-6"
//       onClick={handleBackdropClick}
//     >
//       {/* Modal */}
//       <div
//         className="relative font-fredoka w-full max-w-3xl lg:max-w-4xl bg-gray-100 rounded-xl shadow-2xl px-6 sm:px-10 md:px-20 py-10 md:py-20 text-foreground"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Exit button */}
//         <Button
//           aria-label="Close modal"
//           variant="ghost"
//           className="absolute top-5 right-5 size-8 p-0 hover:bg-transparent"
//           onClick={() => setIsVisible(false)}
//         >
//           <XIcon size={18} className="opacity-60 hover:opacity-100" />
//         </Button>

//         <div className="flex gap-2">
//           <div className="flex grow gap-3">
//             <div className="flex grow flex-col justify-between gap-6">
//               {/* Logo */}
//               <div aria-hidden="true" className="-ml-1 md:ml-0">
//                 <Logo />
//               </div>

//               {/* Content */}
//               <div className="space-y-2">
//                 <p className="font-medium text-4xl md:text-5xl pb-4">
//                   We&lsquo;re accepting new enrolments
//                 </p>
//                 <p className="text-muted-foreground text-2xl md:text-4xl">
//                   Enrolment is currently open. Secure a spot for your child today.
//                 </p>
//               </div>

//               {/* CTA */}
//               <div className="flex flex-wrap gap-3">
//                 <Button asChild className="text-3xl h-16 px-12">
//                   <Link href="/enrol">
//                     Enrol now
//                   </Link>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

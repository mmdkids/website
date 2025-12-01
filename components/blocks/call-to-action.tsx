import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowBigRight } from 'lucide-react'

export default function CallToAction() {
  return (
    <section className="mt-20 mb-20 font-fredoka w-full">

      <div className=''>

         <div className="flex flex-col items-center justify-center lg:flex-row">
        <div className="mb-8 lg:mb-0 lg:w-1/3">
          <Image
            src="/blocks/child.png" // Replace with your image path
            alt="Father and child"
            width={800}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="bg-primary p-12 rounded-lg shadow-lg text-white lg:w-1/1 lg:ml-8 ">

        <div className=''>

               <h2 className="max-w-2xl font-fredoka text-balance text-3xl font-medium md:text-4xl">Are You Ready to Explore More?</h2>
          <p className="text-white my-8 max-w-2xl text-balance text-xl mb-6">
            Don&apos;t miss out on more creative ideas, parenting tips, and fun activities! Stay connected with us for the latest updates and exclusive offers.
          </p>
          <Button asChild className="bg-yellow-400 text-green-900 hover:bg-yellow-500">
            <Link href="#join">
              Enroll now 
              <ArrowBigRight className="opacity-50" />
            </Link>
          </Button>
        </div>

        </div>
     
      </div>

      </div>
     
    </section>
  )
}



// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { Button } from '@/components/ui/button'
// import { ArrowBigRight } from 'lucide-react'

// export default function CallToAction() {
//   return (
//     <section className="mt-20 mb-20 font-fredoka">

//       <div className=''>

//          <div className="flex flex-col items-center justify-center lg:flex-row">
//         <div className="mb-8 lg:mb-0 lg:w-1/3">
//           <Image
//             src="/blocks/child.png" // Replace with your image path
//             alt="Father and child"
//             width={600}
//             height={500}
//             className="rounded-lg shadow-lg"
//           />
//         </div>
//         <div className="bg-primary p-5 rounded-lg shadow-lg text-white lg:w-1/1 lg:ml-8 ">

//         <div className=''>

//                <h2 className="text-3xl font-bold mb-4">Are You Ready to Explore More?</h2>
//           <p className="text-lg mb-6 max-w-xl">
//             Don&apos;t miss out on more creative ideas, parenting tips, and fun activities! Stay connected with us for the latest updates and exclusive offers.
//           </p>
//           <Button asChild className="bg-yellow-400 text-green-900 hover:bg-yellow-500">
//             <Link href="#join">
//               Enroll now 
//               <ArrowBigRight className="opacity-50" />
//             </Link>
//           </Button>
//         </div>

//         </div>
     
//       </div>

//       </div>
     
//     </section>
//   )
// }
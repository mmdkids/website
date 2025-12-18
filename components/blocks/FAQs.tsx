// import React from 'react';
// import Image from 'next/image';
// import { Plus, Minus } from 'lucide-react'; // Assuming lucide-react for icons

// export default function FAQSection() {
//   const faqs = [
//     {
//       question: 'What age groups do you provide childcare for?',
//       answer:
//         'We offer childcare services for children from infants (starting at 6 weeks old) up to pre-kindergarten (5 years old). Our programs are tailored to each age group to ensure appropriate developmental activities and learning.',
//       expanded: false,
//     },
//     {
//       question: 'How do I register my child for childcare services?',
//       answer:
//         'To register your child for our childcare services, simply visit our website and fill out the online registration form. You will need to provide basic information about your child, including their age, medical history, and any special requirements. After submitting the form, our team will contact you to confirm availability and discuss any further details.',
//       expanded: true,
//     },
//     {
//       question: 'How do you handle emergencies or medical situations?',
//       answer:
//         'Our staff are trained in first aid and CPR, and we have clear protocols for handling emergencies. In case of a medical emergency, parents will be contacted immediately, and if necessary, professional medical help will be sought. All medical information and emergency contacts are kept up-to-date for each child.',
//       expanded: false,
//     },
//     {
//       question: 'Are there any special programs or activities for children?',
//       answer:
//         'Yes, we offer a variety of special programs and activities, including art classes, music sessions, outdoor play, story time, and age-appropriate educational games. We also organize seasonal events and field trips to enhance the learning experience and provide diverse opportunities for development.',
//       expanded: false,
//     },
//   ];

//   return (
//     <section className="relative py-16 bg-white overflow-hidden">
//       <div className="relative z-10 container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center">
//         {/* Left Image Section */}
//         <div className="lg:w-1/2 flex justify-center lg:justify-end mb-12 lg:mb-0 lg:pr-12">
//           <div className="relative w-[400px] h-[500px] md:w-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-xl">
//             <Image
//               src="/images/father-son.jpg" // Replace with your image path
//               alt="Father and son smiling"
//               layout="fill"
//               objectFit="cover"
//               className="rounded-lg"
//             />
//           </div>
//         </div>

//         {/* Right FAQ Section */}
//         <div className="lg:w-1/2 flex justify-center lg:justify-start">
//           <div className="bg-white p-8 md:p-10 rounded-lg shadow-lg max-w-xl w-full">
//             <p className="text-sm font-semibold text-green-600 mb-2 uppercase">FAQ</p>
//             <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
//               Frequently Asked Questions
//               <span className="ml-3 text-green-500">
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM12 4.5L19 8V16L12 19.5L5 16V8L12 4.5Z" fill="currentColor"/>
//                   <path d="M12 11.5L17 8.5L12 5.5L7 8.5L12 11.5Z" fill="currentColor"/>
//                   <path d="M12 13L17 10L12 7L7 10L12 13Z" fill="currentColor"/>
//                   <path d="M12 14.5L17 11.5L12 8.5L7 11.5L12 14.5Z" fill="currentColor"/>
//                   <path d="M12 16L17 13L12 10L7 13L12 16Z" fill="currentColor"/>
//                   <path d="M12 17.5L17 14.5L12 11.5L7 14.5L12 17.5Z" fill="currentColor"/>
//                   <path d="M12 19L17 16L12 13L7 16L12 19Z" fill="currentColor"/>
//                 </svg>
//               </span>
//             </h2>

//             <div className="space-y-4">
//               {faqs.map((faq, index) => (
//                 <div key={index} className="border-b border-gray-200 pb-4">
//                   <button className="flex justify-between items-center w-full text-left focus:outline-none">
//                     <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
//                     {faq.expanded ? (
//                       <Minus className="h-5 w-5 text-gray-600" />
//                     ) : (
//                       <Plus className="h-5 w-5 text-gray-600" />
//                     )}
//                   </button>
//                   {faq.expanded && (
//                     <p className="mt-2 text-gray-600 pr-8">{faq.answer}</p>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
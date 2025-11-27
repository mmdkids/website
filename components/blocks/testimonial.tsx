import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Quote } from 'lucide-react';

interface StarRatingProps {
    count: number; // Specify that 'count' must be a number
}

export default function Testimonials() {
    const testimonials = [
        {
            name: 'Dr. Abu Talal',
            title: 'Consultant Interventional Cardiologist',
            quote: 'Exceptional Care and Support! We couldn\'t be happier with the childcare service! A new parent, I was feeling overwhelmed, but the staff here have been an absolute lifesaver.',
            stars: 4,
            imageSrc: '/blocks/placeholder.png', // Placeholder image
        },
        {
            name: 'Ahmed j.',
            title: 'Consultant Interventional Cardiologist',
            quote: 'Lifesaver! I honestly don\'t know what I would have done without this childcare service! As a new parent, I was feeling overwhelmed, but the staff here have been an absolute lifesaver...',
            stars: 5,
            imageSrc: '/blocks/placeholder.png', // Placeholder image
        },
        {
            name: 'Sad bin Ali',
            title: 'Consultant Interventional Cardiologist',
            quote: 'Highly Recommended! We absolutely love this daycare! The caregivers treat our son like family, and he\'s always excited to go. It\'s clear they\'re passionate about what they do....',
            stars: 4,
            imageSrc: '/blocks/placeholder.png', // Placeholder image
        },
        {
            name: 'Hossain.',
            title: 'Consultant Interventional Cardiologist',
            quote: 'Outstanding Service! We have been beyond impressed with the childcare service here. From day one, the staff has gone above and beyond to create a warm, nurturing...',
            stars: 5,
            imageSrc: '/blocks/placeholder.png', // Placeholder image
        },
    ];

    const StarRating = ({ count }: StarRatingProps) => {
        return (
            <div className="flex">
                {[...Array(5)].map((_, i) => (
                    <svg
                        key={i}
                        className={`w-4 h-4 ${i < count ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
        );
    };

    return (
       <section className="py-16 bg-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header Section */}
                <div className="flex justify-between items-end mb-16 border-b pb-4">
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight">
                            What our Clients say About us
                        </h2>
                        <p className="text-gray-500 mt-2">Trusted reviews from happy parents.</p>
                    </div>
                    <Link href="#" className="flex items-center text-green-600 font-medium group text-lg hover:text-green-700 transition duration-150">
                        View All Reviews
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
                {/* End Header Section */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-36">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="relative">
                            {/* Testimonial Quote Box (The main card) */}
                            <div className="bg-white p-8 pt-10 rounded-xl shadow-lg border border-gray-100 min-h-[220px]">
                                {/* Quote Icon */}
                                <div className="absolute top-0 left-8 -translate-y-1/2">
                                    <Quote className="w-12 h-12 text-green-500/20 fill-green-500/10" />
                                </div>
                                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                    {testimonial.quote}
                                </p>
                            </div>

                            {/* Author/Client Info (Floating below the box) */}
                            <div className="absolute -bottom-10 left-8 flex items-center bg-white p-2 pr-4 rounded-full shadow-xl border border-gray-100">
                                <Image
                                    src={testimonial.imageSrc}
                                    alt={testimonial.name}
                                    width={64}
                                    height={64}
                                    className="w-16 h-16 rounded-full object-cover border-4 border-white"
                                />
                                <div className="ml-3">
                                    <StarRating count={testimonial.stars} />
                                    <p className="font-semibold text-gray-800 text-sm mt-1">{testimonial.name}</p>
                                    <p className="text-xs text-gray-500">{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative Element (like the one in the original image) */}
            <div className="absolute top-10 right-20 text-gray-100 opacity-60 transform rotate-12 text-9xl leading-none font-extrabold -z-10">*</div>
        </section>
    );
}
import React from 'react';
import { Leaf, Users, Zap, Siren } from 'lucide-react'; // Using lucide-react for icons
import Link from 'next/link';

interface MissionFeatureCardProps {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
}
// Component for the Mission Feature Cards
const MissionFeatureCard = ({ icon: Icon, title, description }: MissionFeatureCardProps) => {
    return (
        <div className="flex flex-col items-center text-center p-6 space-y-4">
            {/* Icon Circle */}
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 text-emerald-600">
                <Icon className="w-8 h-8" />
            </div>
            {/* Title and Description */}
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
};

// Main Component for the Mission Section
export default function MissionSection() {
    const missionPoints = [
        {
            icon: Zap, // Changed to Zap as a better fit for Empowerment
            title: 'Empowerment',
            description: 'Empower them by providing the knowledge, guidance, and support necessary to overcome challenges.',
        },
        {
            icon: Users,
            title: 'Community Building',
            description: 'Build a supportive community where childcare providers can connect, share best practices.',
        },
        {
            icon: Leaf, // Changed to Leaf as a better fit for Personalized Approach/Growth
            title: 'Personalized Approach',
            description: 'Every child\'s journey is unique. Our mission is to provide personalized childcare solutions and consulting.',
        },
        {
            icon: Siren, // Changed to Siren as a better fit for Advocacy and Awareness
            title: 'Advocacy and Awareness',
            description: 'Our mission extends beyond caring for children to building stronger, healthier communities.',
        },
    ];

    return (
        <section className="py-20 sm:py-32 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {/* Left Content Area (Mission Statement) */}
                    <div className="lg:pr-12">
                        <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-2">
                            Our Mission
                        </p>
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                            Building a Brighter Future for **Reliable ChildCare**
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-lg">
                            We are dedicated to helping Child thrive, succeed, and find fulfillment in all aspects of their lives.
                        </p>
                        <Link href="#learn-more" passHref>
                            <button
                                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-emerald-600 text-white hover:bg-emerald-700 h-12 px-6 py-3"
                            >
                                Learn More
                            </button>
                        </Link>
                    </div>

                    {/* Right Content Area (Feature Cards) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {missionPoints.map((point) => (
                            <MissionFeatureCard
                                key={point.title}
                                icon={point.icon}
                                title={point.title}
                                description={point.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}


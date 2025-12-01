import CallToAction from "@/components/blocks/call-to-action";
import DaycarePrograms from "@/components/blocks/daycare";
import ServicesGrid from "@/components/blocks/seervices";

export default function ProgamsPage() {
  return (
    <div className="w-full flex flex-col items-start justify-start font-fredoka">
      <div className="w-full min-h-[50vh] flex flex-col bg-[#f4e073] text-gray-800 mt-40 px-40">
        {/* Hero Content */}
        <div className="pt-24 pb-16 max-w-4xl">
          <h1 className="max-w-2xl font-fredoka text-balance text-5xl font-medium md:text-6xl mb-6">
            Our programs
          </h1>
          <p className="text-muted-foreground my-8 max-w-2xl text-balance text-xl">
            Home Care Services for Your Little One. We are dedicated to helping
            Child thrive, succeed, and find fulfillment in all aspects of their
            lives.
          </p>
        </div>
      </div>

      <div className="px-40">
        <DaycarePrograms/>
        <ServicesGrid />
      </div>

      <div className="px-5 w-full items-center justify-center">
        <CallToAction />
      </div>
    </div>
  );
}

"use client";

import { GoogleMapsEmbed } from "@next/third-parties/google";
import { MapPin } from "lucide-react";

export default function LocationMap() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-lg overflow-hidden shadow-lg border border-border [&_iframe]:w-full [&_iframe]:h-full [&_iframe]:absolute [&_iframe]:inset-0 [&_iframe]:border-0">
        <GoogleMapsEmbed
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
          width="100%"
          height="700"
          mode="place"
          q="1021 3 Ave South, Lethbridge, Alberta T1J0J3"
          loading="lazy"
        />
      </div>

      <div className="flex items-center justify-center gap-2 mt-6">
            <MapPin className="text-primary shrink-0" size={20} />
            <p className="text-muted-foreground text-lg md:text-2xl font-fredoka text-center">
              1021 3 Avenue South, Lethbridge, Alberta
            </p>
          </div>
    </div>
  );
}

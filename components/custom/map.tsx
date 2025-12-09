"use client";

import { GoogleMapsEmbed } from "@next/third-parties/google";

export default function LocationMap() {
  return (
    <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
      <GoogleMapsEmbed
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
        width="100%"
        height="100%"   // must match the container
        mode="place"
        q="1021 3 Ave South, Lethbridge, Alberta T1J0J3"
        loading="lazy"
      />
    </div>
  );
}

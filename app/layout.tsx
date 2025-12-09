import type { Metadata } from "next";
import "./globals.css";
import IHeader from "@/components/blocks/nav";
import { siteConfig } from "@/_data/site-config";
import { useFredoka, useNunitoSans } from "@/_data/fonts";
import FooterSection from "@/components/custom/footer";
import ConnectWithUs from "@/components/blocks/connect-with-us";
import LocationMap from "@/components/custom/map";



export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      suppressHydrationWarning={true}
         className={`${useNunitoSans.className}   ${useFredoka.variable} ${useNunitoSans.variable} antialiaseds `}
      >
        
        <IHeader/>

        {/* <Header/> */}
        
        {children}

        <ConnectWithUs/>
        {/* <div className="w-full px-20 mt-10">
          <LocationMap/>

        </div> */}
        
        <FooterSection/>
      </body>
    </html>
  );
}

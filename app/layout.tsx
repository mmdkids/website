import type { Metadata } from "next";
import "./globals.css";
import IHeader from "@/components/blocks/nav";
import { siteConfig } from "@/_data/site-config";
import { useFredoka, useNunitoSans } from "@/_data/fonts";
import FooterSection from "@/components/custom/footer";



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
         className={`${useNunitoSans.className}   ${useFredoka.variable} ${useNunitoSans.variable} antialiased`}
      >
        {/* <NavBar/> */}
        <IHeader/>
        {/* <HeroHeader/>
        <Header/> */}
        {children}

        <FooterSection/>
      </body>
    </html>
  );
}

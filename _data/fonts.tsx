import { Fredoka, Nunito_Sans } from "next/font/google";

export const useFredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

export const useNunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

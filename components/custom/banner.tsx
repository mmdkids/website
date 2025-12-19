"use client";

import { XIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import Logo from "@/components/custom/logo";

// Define the sale end date - eg: new Date('2024-12-31T23:59:59');
const saleEndDate = new Date(
  Date.now() + 20 * 24 * 60 * 60 * 1000

); // Setting 20 days from now for demo purposes

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export default function Banner() {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    isExpired: false,
    minutes: 0,
    seconds: 0,
  });

  // Show banner 15 seconds after page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 15000); // 15 seconds

    return () => clearTimeout(timer);
  }, []);

  // Disable body scroll when banner is visible
  useEffect(() => {
    if (isVisible) {
      // Save the current overflow value
      const originalOverflow = document.body.style.overflow;
      // Disable scrolling
      document.body.style.overflow = "hidden";
      // Cleanup: restore scrolling when banner is closed
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isVisible]);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = saleEndDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          isExpired: true,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        isExpired: false,
        minutes,
        seconds,
      });
    };

    // Calculate immediately and then every second
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible || timeLeft.isExpired) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsVisible(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-500 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 sm:p-6 lg:p-8"
      onClick={handleBackdropClick}
    >
      <div 
        className="relative font-fredoka w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto border border-border bg-gray-100 rounded-xl shadow-2xl px-4 md:px-20 py-10 md:py-20 text-foreground"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex gap-2">
          <div className="flex grow gap-3">
   
            <div className="flex grow flex-col justify-between gap-3">
            <div
              aria-hidden="true"
              className="-ml-1 md:ml-0"
            >
              <Logo />
            </div>
              <div className="space-y-0.5">
                <p className="font-medium text-4xl md:text-5xl pb-4">We&lsquo;re accepting new enrollments</p>
                <p className="text-muted-foreground text-2xl md:text-4xl mb-2">
                  It kicks off today and is available for just 20
                  days—don&lsquo;t miss out!
                </p>
              </div>
              <div className="flex gap-3 flex-wrap">
                <div className="flex items-center divide-x divide-primary-foreground rounded-md bg-primary/15 text-3xl tabular-nums">
                  {timeLeft.days > 0 && (
                    <span className="flex h-20 items-center justify-center p-6">
                      {timeLeft.days}
                      <span className="text-muted-foreground">d</span>
                    </span>
                  )}
                  <span className="flex h-20 items-center justify-center p-6">
                    {timeLeft.hours.toString().padStart(2, "0")}
                    <span className="text-muted-foreground">h</span>
                  </span>
                  <span className="flex h-20 items-center justify-center p-6">
                    {timeLeft.minutes.toString().padStart(2, "0")}
                    <span className="text-muted-foreground">m</span>
                  </span>
                  {/* <span className="flex h-20 items-center justify-center p-6">
                    {timeLeft.seconds.toString().padStart(2, "0")}
                    <span className="text-muted-foreground">s</span>
                  </span> */}
                </div>
                <Button className="text-3xl h-16 px-12">
                  Enrol now
                </Button>
              </div>
            </div>
          </div>
          <Button
            aria-label="Close banner"
            className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent cursor-pointer"
            onClick={() => setIsVisible(false)}
            variant="ghost"
          >
            <XIcon
              aria-hidden="true"
              className="opacity-60 transition-opacity group-hover:opacity-100"
              size={16}
            />
          </Button>
        </div>
      </div>
    </div>
  );
}

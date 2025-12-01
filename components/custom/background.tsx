"use client";

import React from "react";
import { cn } from "@/lib/utils";

type BackgroundProps = {
  children?: React.ReactNode;
  variant?: "top" | "bottom";
  className?: string;
  separatorType?: "spiral" | "image";
  imageSrc?: string;
  imageAlt?: string;
};

export const Background = ({
  children,
  variant = "top",
  className,
  separatorType = "spiral",
  imageSrc,
  imageAlt = "section separator",
}: BackgroundProps) => {
  return (
    <div className={cn("relative mx-2.5 mt-2.5 lg:mx-4", className)}>
      {/* Separator */}
      {separatorType === "spiral" && (
        <div
          className={cn(
            "absolute w-full overflow-hidden",
            variant === "top" ? "top-0" : "bottom-0"
          )}
        >
          <svg
            className="w-full h-16 lg:h-32"
            viewBox="0 0 1440 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#f5f5f5"
              d="M0,64L48,90.7C96,117,192,171,288,170.7C384,171,480,117,576,90.7C672,64,768,64,864,85.3C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
          </svg>
        </div>
      )}

      {separatorType === "image" && imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt}
          className={cn(
            "absolute w-full h-auto",
            variant === "top" ? "top-0" : "bottom-0"
          )}
        />
      )}

      {/* Content */}
      <div
        className={cn(
          variant === "top"
            ? "from-primary/50 via-background to-background/80 rounded-t-4xl rounded-b-2xl bg-linear-to-b via-20%"
            : "from-background via-background to-primary/50 rounded-t-2xl rounded-b-4xl bg-linear-to-b"
        )}
      >
        {children}
      </div>
    </div>
  );
};

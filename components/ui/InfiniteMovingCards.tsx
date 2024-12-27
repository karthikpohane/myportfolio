"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    image: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-12 py-6 w-max flex-nowrap", // Increased gap and padding
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, index) => (
          <li
            key={index}
            className="w-[90vw] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 px-8 py-10 md:w-[60vw] bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg" // Increased padding for cards
          >
            <div className="relative flex flex-col h-full">
              <blockquote className="flex-grow">
                <span className="relative z-20 leading-[1.8] text-white text-lg md:text-xl font-normal">
                  {item.quote}
                </span>
              </blockquote>
              <div className="relative z-20 mt-8 flex items-center gap-6">
                <img
                  src={item.image} // Use the dynamic image path here
                  alt="profile"
                  className="w-14 h-14 rounded-full"
                />
                <div className="flex flex-col">
                  <span className="text-lg text-white font-bold">
                    {item.name}
                  </span>
                  <span className="text-sm text-gray-400">{item.title}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

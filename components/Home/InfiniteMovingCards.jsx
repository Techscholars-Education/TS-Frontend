"use client";

import React, { useEffect, useRef, useState } from "react";
import { IoStar } from "react-icons/io5";
import { FaQuoteLeft } from "react-icons/fa6";
import imageGirl from "@/public/Home/photoGirl.jpg"
import Image from "next/image";
const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className = ""
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      const directionValue = direction === "left" ? "scroll-left" : "scroll-right";
      containerRef.current.style.setProperty("--animation-name", directionValue);
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const durationValue = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", durationValue);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative z-20 w-full overflow-hidden ${className} [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]`}
    >
      <ul
        ref={scrollerRef}
        className={`flex min-w-full gap-4 py-4 w-max flex-nowrap ${start ? "animate-scroll" : ""} ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        style={{
          animation: `var(--animation-name) var(--animation-duration) linear infinite`,
        }}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[350px] max-w-full relative rounded-2xl border border-slate-200 px-8 py-6"
            style={{
              background: "white",
            }}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)] pointer-events-none -z-1"
              ></div>
              <div className="mb-6 relative">
                <FaQuoteLeft className="text-2xl text-blue-500"/>
              </div>
              <span className="relative text-sm text-gray-800 leading-[1.6]">
                {item.quote}
              </span>
              <div className="relative mt-6 flex items-center justify-between">
                <span className="flex items-center gap-2">
                <Image src={imageGirl} className="h-10 w-10 rounded-full" alt="girlImage"/>
                  <span className="text-lg font-semibold text-black leading-[1.6]">  
                    {item.name}
                  </span>
                </span>
                <div className="flex items-center gap-2">
                  <IoStar className="text-yellow-400 text-lg"/>
                  <p className="text-sm font-semibold">4.3</p>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll {
          animation: var(--animation-name) var(--animation-duration) linear infinite;
        }
      `}</style>
    </div>
  );
};

export default InfiniteMovingCards;

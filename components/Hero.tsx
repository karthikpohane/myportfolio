/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./MagicButton";
import { FaLocationArrow, FaArrowDown } from "react-icons/fa";
import { summary } from "@/data";

const Hero = () => {
  return (
    <div id="home" className="pt-36 pb-28">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="-top-10 -left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center relative mt-[-20px] z-10 max-w-[89vw] md:max-w-2xl lg:max-w-full mx-auto">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-6 md:mb-0 md:mr-8">
          <div
            className="w-[24rem] h-[26rem] overflow-hidden shadow-md"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: "2rem",
            }}
          >
            <img
              src="/Karthik Pohane.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-sm uppercase tracking-widest text-blue-500 mt-4">
            Software Engineer
          </h2>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <TextGenerateEffect
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4"
            words={"Hi, I'm Karthik Pohane. I Build Exceptional Digital Solutions."}
          />
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6">
            {summary}
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <a href="#about">
              <MagicButton
                title="Explore my Profile"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a href="/Karthik_Pohane_Updated.pdf" target="_blank" rel="noopener noreferrer">
              <MagicButton
                title="View My Resume"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a href="/Karthik_Pohane_Updated.pdf" download>
              <MagicButton
                title="Download CV"
                icon={<FaArrowDown />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

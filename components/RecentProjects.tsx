/* eslint-disable @next/next/no-img-element */
import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin"; // Ensure correct path
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
      {projects.map((item) => (
          <div
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            key={item.id}
          >
            <PinContainer   title="/ui.aceternity.com"
              href="https://twitter.com/mannupaaji">
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[50vh] h-[30vh] mb-1">
                {/* Background image */}
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                <img src="/bg.png" alt="bgimg" />
                </div>

                {/* Project image */}
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              {/* Title */}
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
              {item.title}
              </h1>

              {/* Description */}
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-gray-400">
              {item.des}
              </p>

              {/* Icons and link */}
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center space-x-2">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;

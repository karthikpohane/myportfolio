import React from "react";

import { educationItems, workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import { NewGrid, NewGridItem } from "./ui/NewGridItem";

const Experience = () => {
  return (
    <div id="experience" className="py-20 w-full">
      <h1 className="heading text-3xl font-bold text-center">
        My <span className="text-purple">Work Experience & Qualifications</span>
      </h1>
      
      {/* Experience Heading with reduced size */}
      <h2 className="text-3xl font-semibold text-center mt-12 mb-4">
        Experience
      </h2>

      <div className="w-full mt-4 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>

      {/* Qualifications Heading with reduced size */}
      <h2 className="text-3xl font-semibold text-center mt-8 mb-4">
        Qualifications
      </h2>

      <NewGrid>
        {educationItems.map((item) => (
          <NewGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </NewGrid>
    </div>
  );
};

export default Experience;

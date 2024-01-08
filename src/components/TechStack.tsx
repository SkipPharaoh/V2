"use client";

import TechCard from "@/components/TechCard";
import { techData } from "@public/Tech";
import { forwardRef, useState } from "react";
import TechStackHeader from "./TechStackHeader";

interface TechStackProps {}

const TechStack = forwardRef<HTMLDivElement, TechStackProps>(
  ({ ...props }, ref) => {
    // TODO: abstract the useState with the changeId, rightArrow, & leftArrow to a custom hook
    const [idNumber, setIdNumber] = useState<number>(0);

    const changeId = (id: number) => {
      setIdNumber(id);
    };

    const rightArrow = () => {
      if (idNumber + 1 >= techData.length) {
        setIdNumber(0);
      } else {
        setIdNumber(idNumber + 1);
      }
    };

    const leftArrow = () => {
      if (idNumber === 0) {
        setIdNumber(techData.length - 1);
      } else {
        setIdNumber(idNumber - 1);
      }
    };

    return (
      <div ref={ref} {...props}>
        <TechStackHeader
          idNumber={idNumber}
          leftArrow={leftArrow}
          rightArrow={rightArrow}
        />
        <div className="mt-12 pb-12 grid grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-[80%] sm:w-[75%] md:w-[70%] mx-auto items-center justify-items-center justify-center place-content-center ">
          {techData.map((tech, key) => {
            return (
              <TechCard
                id={tech.id}
                alt={tech.title}
                main={tech.main}
                key={key}
                changeId={changeId}
              />
            );
          })}
        </div>
      </div>
    );
  }
);

TechStack.displayName = "TechStack";

export default TechStack;

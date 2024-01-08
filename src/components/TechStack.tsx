"use client";

import TechCard from "@/components/TechCard";
import useIdSwitcher from "@/hooks/useIdSwitcher";
import { techData } from "@public/Tech";
import { forwardRef } from "react";
import TechStackHeader from "./TechStackHeader";

interface TechStackProps {}

const TechStack = forwardRef<HTMLDivElement, TechStackProps>(
  ({ ...props }, ref) => {
    const { techId, changeId, leftArrow, rightArrow } = useIdSwitcher();

    return (
      <div ref={ref} {...props}>
        <TechStackHeader
          idNumber={techId}
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

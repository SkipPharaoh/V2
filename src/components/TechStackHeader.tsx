"use client";

import { techData } from "@public/Tech";
import Image from "next/image";
import { forwardRef } from "react";
import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";

interface TechStackHeaderProps {
  idNumber: number;
  leftArrow: () => void;
  rightArrow: () => void;
}

const TechStackHeader = forwardRef<HTMLDivElement, TechStackHeaderProps>(
  ({ idNumber, leftArrow, rightArrow, ...props }, ref) => {
    return (
      <div ref={ref} {...props}>
        <div className="flex mx-auto justify-between mt-12 space-x-4 md:space-x-6 lg:space-x-auto items-center">
          <button
            className="font-space group bg-[#c7dada] dark:bg-[#939f9f] dark:hover:bg-[#828686] h-max w-max hover:bg-[#f7eeff] px-1 py-1 rounded-full select-none "
            onClick={leftArrow}
          >
            <HiOutlineArrowLongLeft className="w-5 h-3 sm:w-6 sm:h-4 md:w-8 md:h-5 lg:w-10 lg:h-6 stroke-[3] group-hover:fill-[#00bdbd]" />
          </button>
          <div className="bg-gradient-to-tr dark:from-[#dbfefe25] dark:via-[#f9f2ff10] dark:to-[#fff2ec20] from-[#dbfefe] via-[#f9f2ff] to-[#fff2ec] flex p-2 py-2 sm:p-3 md:p-4 lg:p-6 rounded-xl sm:rounded-[0.8rem] md:rounded-[1.2rem] lg:rounded-[1.6rem] mx-auto items-center justify-center space-x-2 sm:space-x-3 md:space-x-4 h-24 md:h-max lg:space-x-6 transition-all duration-700 ease-linear">
            <div className="basis-[30%] lg:basis-[25%] h-16 w-12 sm:h-20 sm:w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 rounded-2xl">
              <div className="flex mx-auto rounded-2xl relative w-full h-full bg-white">
                <Image
                  src={techData[idNumber].main}
                  alt="tech"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className=" select-none p-1 sm:p-2 md:p-3 lg:p-4 h-full w-full flex mx-auto object-contain rounded-2xl"
                />
              </div>
            </div>
            <div className="basis-[70%] lg:basis-[75%] mx-auto transition-all duration-500">
              <div className="flex mb-1 justify-between items-center ">
                <h3 className="text-[0.7rem] sm:text-sm md:text-base lg:text-xl font-semibold font-deca tracking-wide">
                  {techData[idNumber].title}
                </h3>
                <div
                  className={`${techData[idNumber].bg} ${techData[idNumber].text} text-[0.45rem] sm:text-[0.6rem] md:text-xs sm:px-1 lg:px-2 rounded-xl h-max fon font-bold`}
                >
                  {techData[idNumber].tag}
                </div>
              </div>
              <p className="text-[0.58rem] sm:text-[0.7rem] md:text-[0.9rem] md:text-base lg:text-[1.015rem] font-normal md:w-[90%]">
                {techData[idNumber].desc}
              </p>
            </div>
          </div>
          <button
            className="bg-[#fce4fe] dark:bg-[#a995ab] dark:hover:bg-[#7a747b] h-max w-max hover:bg-[#f7eeff] group px-1 py-1 rounded-full select-none"
            onClick={rightArrow}
          >
            <HiOutlineArrowLongRight className="w-5 h-3 sm:w-6 sm:h-4 md:w-8 md:h-5 lg:w-10 lg:h-6 stroke-[3] group-hover:fill-[#dd44eb]" />
          </button>
        </div>
      </div>
    );
  }
);

TechStackHeader.displayName = "TechStackHeader";

export default TechStackHeader;

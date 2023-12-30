import ProjectCard from "@/components/ProjectCard";
import SvgIcon from "@/components/SvgIcon";
import React from "react";

export default function page() {
  return (
    <div className="px-10 sm:px-20 md:px-32 md:-mb-52 lg:mb-0 lg:px-60 mx-auto max-w-[75rem]">
      <main className="min-h-screen max-w-screen">
        <div className="pt-24 flex flex-col items-center mx-auto">
          <h2 className="selection:text-black/40 dark:selection:text-white/40 font-deca bg-gradient-to-tr from-teal-300 to-blue-500 bg-clip-text text-transparent items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Works
          </h2>
          <p className="mt-8 max-w-xl text-center md:w-[70%] mx-auto text-sm font-normal md:text-base lg:text-lg mb-2">
            It has been an absolute pleasure to put my heart and soul into these
            projects. While you&#39;re here, browse these projects.
          </p>
          <div className="select-none flex justify-center space-x-4 items-center mt-2 text-gray-400">
            <SvgIcon
              icon="arrow-forward"
              xmlns="http://www.w3.org/2000/svg"
              width="124"
              height="14"
              fill="currentColor"
              className=" fill-gray-300 rotate-180"
            />
            <p>✦</p>
            <SvgIcon
              icon="arrow-reversed"
              xmlns="http://www.w3.org/2000/svg"
              width="124"
              height="14"
              fill="currentColor"
              className=" fill-gray-300 rotate-0 scale-y-100"
            />
          </div>
        </div>
        <div className="mt-20 mb-20">
          <ProjectCard />
        </div>
      </main>
    </div>
  );
}

import { forwardRef } from "react";

interface HomeHeaderProps {}

const HomeHeader = forwardRef<HTMLDivElement, HomeHeaderProps>(
  ({ ...props }, ref) => {
    return (
      <div ref={ref} {...props}>
        <div className="flex flex-row justify-start items-center mt-20">
          {/* TODO: Add Avatar component here that has darkmode feature */}
          <div className="flex flex-col ml-4">
            <h2 className="font-bold sm:text-2xl md:text-2xl lg:text-4xl">
              Caniggia Thompson
            </h2>
            <h4 className="text-gray-400 xl:font-bold sm:font-bold md:font-bold sm:text-xl md:text-xl lg:text-2xl">
              (～￣▽￣)～
            </h4>
          </div>
        </div>
        <div className="mt-12 sm:text-xl md:text-2xl lg:text-2xl">
          <p className="font-light sm:leading-6 md:leading-6 lg:leading-8">
            A front-end engineer based in{" "}
            <span className="font-medium select-none animate-text bg-gradient-to-br from-red-400 dark:from-red-400 via-[#fff4f4] dark:via-[#fff] dark:text-black  text-border2 to-blue-400 dark:to-blue-400 rounded px-2 py-[0.05rem]">
              Florida, US
            </span>
            who develops modern, reactive, and user-friendly web applications
            using the latest technologies currently. I believe a perfect blend
            of UI architecture is one, where the goals and needs are accounted
            for in an elegant, efficient, and robust design of the UI.
          </p>
        </div>
      </div>
    );
  }
);

HomeHeader.displayName = "HomeHeader";

export default HomeHeader;

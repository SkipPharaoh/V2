import { forwardRef } from "react";
import SvgIcon from "./SvgIcon";

interface TechHeaderProps {}

const TechHeader = forwardRef<HTMLDivElement, TechHeaderProps>(
  ({ ...props }, ref) => {
    return (
      <div ref={ref} {...props} className="pt-24 flex flex-col mx-auto">
        <h2 className="bg-gradient-to-br dark:selection:text-white/80 selection:text-black/70 to-yellow-500 dark:to-yellow-200 from-blue-700 dark:from-red-500 bg-clip-text text-transparent items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-deca font-bold ">
          Tech Stack
        </h2>
        <p className="mt-8 max-w-xl text-center md:w-[70%] mx-auto text-sm font-normal md:text-base lg:text-lg mb-2">
          Just like any other dev, I also spend more time searching and
          experimenting tools than actually coding some senseful things 😎
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
    );
  }
);

TechHeader.displayName = "TechHeader";

export default TechHeader;

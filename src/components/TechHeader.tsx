import { forwardRef } from "react";

interface TechHeaderProps {}

const TechHeader = forwardRef<HTMLDivElement, TechHeaderProps>(
  ({ ...props }, ref) => {
    return (
      <div ref={ref} {...props} className="pt-24 flex flex-col mx-auto">
        <h2 className="bg-gradient-to-br dark:selection:text-white/80 selection:text-black/70 to-yellow-500 dark:to-yellow-200 from-blue-700 dark:from-red-500 bg-clip-text text-transparent items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-deca font-bold ">
          Tech Stack
        </h2>
        <p className="mt-8 font-normal lg:text-lg text-center md:w-[70%] mx-auto text-base md:text-[1.15rem] ">
          Just like any other dev, I also spend more time searching and
          experimenting tools than actually coding some senseful things 😎
        </p>
      </div>
    );
  }
);

TechHeader.displayName = "TechHeader";

export default TechHeader;

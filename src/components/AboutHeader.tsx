import { forwardRef } from "react";
import SvgIcon from "./SvgIcon";

interface AboutHeaderProps {}

const AboutHeader = forwardRef<HTMLDivElement, AboutHeaderProps>(
  ({ ...props }, ref) => {
    return (
      <div ref={ref} {...props} className=" mx-auto flex flex-col ">
        <h1
          className={`mt-6 mb-12 font-deca bg-gradient-to-br to-blue-500 via-red-400/90 from-yellow-500  bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}
        >
          About
        </h1>
        <div className="mx-auto transition-all duration-1000 ease-in-out -mt-8 dark:shadow-xs shadow-2xl dark:shadow-red-50/10 shadow-red-300 ">
          <SvgIcon
            icon="my-pic3"
            height={600}
            width={600}
            viewBox="0 0 72 72"
            name="Caniggia Thompson SVG Icon"
            attributeName="Caniggia Thompson SVG Icon"
            className="rounded-2xl select-none drop-shadow-md shadow-red-200 dark:shadow-orange-100/60 dark:drop-shadow-sm shadow-2xl h-28 w-28 md:h-32 md:w-32 lg:h-40 lg:w-40 border-white border-2"
          />
        </div>
        <div className="text-center mx-auto mt-8 z-20">
          <h3 className="mx-auto font-bold text-lg lg:text-xl xl:text-2xl">
            Caniggia &quot;Skip&quot; Thompson{" "}
            <span className="inline-flex items-baseline">
              <SvgIcon
                icon="game"
                viewBox="0 0 72 72"
                name="Game Controller SVG Vector Icon"
                attributeName="Game Controller SVG Vector Icon"
                className="self-center w-8 h-8 mx-1"
              />
            </span>{" "}
          </h3>
          <p className="text-gray-400 font-deca font-normal text-xs sm:text-sm md:text-md lg:text-lg ">
            {/* TODO: Refactor code below to remove Redundancy (DRY) */}
            Developer{" "}
            <span className="inline-flex items-baseline">
              <SvgIcon
                icon="laptop"
                viewBox="0 0 504.8 504.8"
                name="Laptop SVG Vector Icon"
                attributeName="Laptop SVG Vector Icon"
                className="self-center w-6 h-6 mx-1"
              />
            </span>{" "}
            &#47;&#47; Investor{" "}
            <span className="inline-flex items-baseline">
              <SvgIcon
                icon="growth-investment"
                viewBox="0 0 480 480"
                name="Growth Investment SVG Vector Icon"
                attributeName="Growth Investment SVG Vector Icon"
                className="self-center w-6 h-6 mx-1"
              />
            </span>{" "}
            &#47;&#47; Thinker{" "}
            <span className="inline-flex items-baseline">
              <SvgIcon
                icon="thinking"
                viewBox="0 0 500 500"
                name="Avatar Thinking SVG Vector Icon"
                attributeName="Avatar Thinking SVG Vector Icon"
                className="self-center w-6 h-6 mx-1"
              />
            </span>{" "}
          </p>
        </div>
      </div>
    );
  }
);

AboutHeader.displayName = "AboutHeader";

export default AboutHeader;

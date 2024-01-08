import Game from "@public/assets/icons/game.svg";
import Growth from "@public/assets/icons/growth-investment.svg";
import Laptop from "@public/assets/icons/laptop.svg";
import Thinking from "@public/assets/icons/thinking.svg";
import AboutImage from "@public/assets/images/my-pic3.png";
import Image from "next/image";
import { forwardRef } from "react";

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
          <Image
            src={AboutImage}
            placeholder="blur"
            height={600}
            width={600}
            className="rounded-2xl select-none drop-shadow-md shadow-red-200 dark:shadow-orange-100/60 dark:drop-shadow-sm shadow-2xl h-28 w-28 md:h-32 md:w-32 lg:h-40 lg:w-40 border-white border-2"
            alt="Caniggia Thompson"
            priority
          />
        </div>
        <div className="text-center mx-auto mt-8 z-20">
          <h3 className="mx-auto  font-bold text-lg lg:text-xl xl:text-2xl">
            Caniggia &quot;Skip&quot; Thompson{" "}
            <span className="inline-flex items-baseline">
              <Image
                src={Game}
                alt="Game Controller SVG Vector Icon"
                className="self-center w-8 h-8 mx-1"
              />
            </span>{" "}
          </h3>
          <p className="text-gray-400 font-deca font-normal text-xs sm:text-sm md:text-md lg:text-lg ">
            Developer{" "}
            <span className="inline-flex items-baseline">
              <Image
                src={Laptop}
                alt="Laptop SVG Vector Icon"
                className="self-center w-6 h-6 mx-1"
              />
            </span>{" "}
            &#47;&#47; Investor{" "}
            <span className="inline-flex items-baseline">
              <Image
                src={Growth}
                alt="Growth Investment SVG Vector Icon"
                className="self-center w-6 h-6 mx-1"
              />
            </span>{" "}
            &#47;&#47; Thinker{" "}
            <span className="inline-flex items-baseline">
              <Image
                src={Thinking}
                alt="Avatar Thinking SVG Vector Icon"
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

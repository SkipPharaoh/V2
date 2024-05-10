import Avatar from "@public/assets/images/Home-Avatar.png";
import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";
import { BsArrowUpRight } from "react-icons/bs";

interface HomeHeaderProps {}

const HomeHeader = forwardRef<HTMLDivElement, HomeHeaderProps>(
  ({ ...props }, ref) => {
    return (
      <div ref={ref} {...props}>
        <div className="flex flex-row justify-start items-center mt-20">
          <Image
            src={Avatar}
            alt="Animated black man's head with gold hexagon directly behind"
            width={100}
            height={100}
          />
          <div className="flex flex-col ml-4">
            <h2 className="flex sm:text-2xl md:text-2xl lg:text-2xl">
              <span className="font-semibold">
                Caniggia &quot;Skip&quot; Thompson
              </span>
            </h2>
            <h3>
              <Link
                href={"https://www.linkedin.com/in/skippharaoh"}
                target="_blank"
                className="dark:text-[#d6d4d4b4] text-[#717171bb] flex items-center"
              >
                @Skip
                <BsArrowUpRight className="stroke-1 h-3" />
              </Link>
            </h3>
          </div>
        </div>
        <div className="mt-6 sm:text-xl md:text-2xl lg:text-2xl">
          <p className="font-light sm:leading-6 md:leading-6 lg:leading-8">
            A front-end engineer based in{" "}
            <span className="font-medium select-none animate-text bg-gradient-to-br from-red-400 dark:from-red-400 via-[#fff4f4] dark:via-[#fff] dark:text-black  text-border2 to-blue-400 dark:to-blue-400 rounded px-2 py-[0.05rem]">
              New York, US
            </span>{" "}
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

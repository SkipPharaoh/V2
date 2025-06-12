import Image from "next/image";
import Link from "next/link";
import { forwardRef, HTMLAttributes } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { HomeStyleType } from "./HeaderSection";

interface HomeHeaderProps extends HTMLAttributes<HTMLDivElement> {
  homeStyle: HomeStyleType;
}

const HomeHeader = forwardRef<HTMLDivElement, HomeHeaderProps>(
  ({ homeStyle, className, ...props }, ref) => {
    const { avatar, alt, name, handle, link, bio, city } = homeStyle;

    const [prefix, suffix] = bio.split(city).map((str) => str.trim());

    return (
      <div ref={ref} {...props} className={`${className}`.trim()}>
        <div className="flex flex-row justify-start items-center mt-20">
          <Image src={avatar} alt={alt} width={100} height={100} />
          <div className="flex flex-col ml-4">
            <h2 className="flex sm:text-2xl md:text-2xl lg:text-2xl">
              <span className="font-semibold">{name}</span>
            </h2>
            <h3>
              <Link
                href={link}
                target="_blank"
                className="dark:text-[#d6d4d4b4] text-[#717171bb] flex items-center"
              >
                {handle}
                <BsArrowUpRight className="stroke-1 h-3" />
              </Link>
            </h3>
          </div>
        </div>
        <div className="mt-6 sm:text-xl md:text-2xl lg:text-2xl">
          <p className="font-light sm:leading-6 md:leading-6 lg:leading-8">
            {prefix}{" "}
            <span className="font-medium select-none animate-text bg-gradient-to-br from-red-400 dark:from-red-400 via-[#fff4f4] dark:via-[#fff] dark:text-black text-border2 to-blue-400 dark:to-blue-400 rounded px-2 py-[0.05rem]">
              {city}
            </span>{" "}
            {suffix}
          </p>
        </div>
      </div>
    );
  }
);

HomeHeader.displayName = "HomeHeader";

export default HomeHeader;

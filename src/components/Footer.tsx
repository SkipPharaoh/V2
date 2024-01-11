import Link from "next/link";
import { forwardRef } from "react";
import GitHubStats from "./GitHubStats";
import SvgIcon from "./SvgIcon";
import InteractiveFooterText from "./InteractiveFooterText";

interface FooterProps {}

const Footer = forwardRef<HTMLDivElement, FooterProps>(({ ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className=" flex select-none text-sm  py-16 mt-16 flex-col h-max items-center mx-auto justify-center"
    >
      <div className="flex justify-center space-x-4 md:space-x-6 dark:text-white/70 text-gray-500 text-[0.6rem] sm:text-xs md:text-sm lg:text-md mt-2">
        <Link
          href="https://www.linkedin.com/in/skippharaoh"
          target="blank"
          className=" dark:hover:text-blue-500 hover:text-red-500 font-semibold dark:text-white text-black"
        >
          <SvgIcon
            xmlns="http://www.w3.org/2000/svg"
            icon="linkedin"
            width={32}
            height={32}
            fill="currentColor"
            viewBox="0 0 256 256"
          />
        </Link>
        <Link
          href="https://github.com/SkipPharaoh?tab=repositories"
          target="blank"
          className=" dark:hover:text-blue-500 hover:text-red-500 font-semibold dark:text-white text-black"
        >
          <SvgIcon
            xmlns="http://www.w3.org/2000/svg"
            icon="github"
            width={32}
            height={32}
            fill="currentColor"
            viewBox="0 0 256 256"
          />
        </Link>
        <Link
          href="mailto:caniggiathompson@gmail.com"
          target="blank"
          rel="noreferrer"
          className=" dark:hover:text-blue-500 hover:text-red-500 font-semibold dark:text-white text-black"
        >
          <SvgIcon
            xmlns="http://www.w3.org/2000/svg"
            icon="email"
            width={32}
            height={32}
            fill="currentColor"
            viewBox="0 0 256 256"
          />
        </Link>
      </div>
      <a
        href="https://github.com/SkipPharaoh/v2"
        target="blank"
        rel="noreferrer"
        className="flex flex-col text-center group hover:text-red-500 w-max hover:font-black items-center text-gray-600 text-[0.6rem] sm:text-xs md:text-sm lg:text-md mt-8 md:mt-12 "
      >
        <InteractiveFooterText />
        <GitHubStats />
      </a>
    </div>
  );
});

Footer.displayName = "Footer";

export default Footer;

"use client";

import Link from "next/link";
import { forwardRef, useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FiGitBranch } from "react-icons/fi";
import SvgIcon from "./SvgIcon";

interface FooterProps {}

const Footer = forwardRef<HTMLDivElement, FooterProps>(({ ...props }, ref) => {
  const [metaData, setMetaData] = useState({ star: 0, forks: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        "https://api.github.com/repos/SkipPharaoh/V2"
      ).then((res) => res.json());
      setMetaData({
        star: data.stargazers_count,
        forks: data.forks_count,
      });
    };
    getData();
  }, []);

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
          className=" dark:hover:text-red-400 hover:text-red-600 font-semibold"
        >
          {" "}
          {/* LinkedIn{" "} */}
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
          className=" dark:hover:text-red-400 hover:text-red-600 font-semibold"
        >
          {" "}
          {/* GitHub{" "} */}
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
          className=" dark:hover:text-red-400 hover:text-red-600 font-semibold"
        >
          {" "}
          {/* Résumé{" "} */}
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
        className="flex flex-col text-center group hover:text-red-800 w-max hover:font-black items-center text-gray-600 text-[0.6rem] sm:text-xs md:text-sm lg:text-md mt-8 md:mt-12 "
      >
        <div
          onMouseOut={handleMouseOut}
          onMouseOver={handleMouseOver}
          className="relative transition-all ease-in-out duration-1000   "
        >
          <p
            className={` ${
              isHovering && "scale-150 blur-[6px]"
            } group font-bold animate-text duration-700 transition-all linear  group-hover:bg-white lg:text-gray-700 lg:dark:text-white/40 lg:group-hover:text-transparent bg-gradient-to-r mb-2 from-teal-500 via-red-500 to-purple-500 bg-clip-text text-transparent text-sm sm:text-base md:text-lg`}
          >
            Caniggia &quot;Skip&quot; Thompson
          </p>
          {isHovering && (
            <p
              className={`opacity-0 bg-purple-100 px-1 md:px-2 py-1 rounded-2xl bg-opacity-30 backdrop-blur-xl hover:opacity-100 transition-all duration-1000 linear absolute top-[35%] left-[50%] -translate-x-[50%]  -translate-y-[50%] w-max text-gray-800 font-bold text-base z-10 `}
            >
              Enjoying this? ⭐ my Github Repo
            </p>
          )}
        </div>
        <div className="flex space-x-4 ">
          <div className="flex dark:group-hover:text-red-400 group-hover:text-red-600  space-x-1 items-center ">
            <FaRegStar className="h-4 w-4 group-hover:stroke-[2.2px] dark:group-hover:fill-red-400  group-hover:fill-red-800 " />
            <p className="font-semibold text-sm group-hover:font-extrabold ">
              {metaData.star}
            </p>
          </div>
          <div className="flex  dark:group-hover:text-red-400 group-hover:text-red-600 space-x-1 items-center ">
            <FiGitBranch className="h-4 w-4 group-hover:stroke-[2.2px]  dark:group-hover:stroke-red-400 group-hover:stroke-red-800 " />
            <p className="font-semibold text-sm group-hover:font-extrabold ">
              {metaData.forks}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
});

Footer.displayName = "Footer";

export default Footer;

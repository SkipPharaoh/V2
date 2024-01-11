import Link from "next/link";
import { forwardRef } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FiFileText } from "react-icons/fi";

interface ExperienceActionsProps {}

const ExperienceActions = forwardRef<HTMLDivElement, ExperienceActionsProps>(
  ({ ...props }, ref) => {
    return (
      <div ref={ref} {...props} className="w-[80%] max-w-2xl mx-auto">
        <div className="text-center font-normal mb-6 tracking-normal text-sm leading-5 sm:text-base lg:text-lg ">
          Here&apos;s a brief insight into the field I&apos;ve been immersed in.
          Take a moment to explore some selected projects I&apos;ve crafted
          within this domain. If you&apos;re curious for more details, feel free
          to grab a copy of my resume.
        </div>
        <div className="flex justify-center space-x-3 md:space-x-6 lg:space-x-8 items-center  my-4">
          <div className="group border-red-400 hover:bg-red-400 hover:text-white hover:drop-shadow-2xl text-red-500 rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-red-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-red-300 ">
            <Link
              href="/Caniggia_Thompson_Resume.pdf"
              target="_blank"
              className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base"
            >
              <FiFileText className="dark:stroke-white stroke-red-400 stroke-2 group-hover:stroke-white " />
              <p>Resume</p>
            </Link>
          </div>
          <div className=" group border-blue-400 hover:bg-blue-400 text-blue-500 hover:text-white hover:drop-shadow-2xl rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-blue-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-blue-300">
            <Link
              href="/work"
              className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base  "
            >
              <BsArrowUpRight className=" dark:stroke-white stroke-blue-400 stroke-2 group-hover:stroke-white " />
              <p>Projects</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
);

ExperienceActions.displayName = "ExperienceActions";

export default ExperienceActions;

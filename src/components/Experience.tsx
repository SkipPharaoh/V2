import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FiFileText } from "react-icons/fi";
import SvgIcon from "./SvgIcon";

// TODO: Add appropriate PNG image to replace both Mock images below
import NextMockIcon from "/public/assets/icons/next.svg";
import VercelMockIcon from "/public/assets/icons/vercel.svg";

interface ContactProps {}

const Experience = forwardRef<HTMLDivElement, ContactProps>(
  ({ ...props }, ref) => {
    const yearsOfExperience = new Date().getUTCFullYear() - 2021;

    return (
      <div
        ref={ref}
        {...props}
        className=" mt-32 lg:mt-8 flex flex-col justify-start space-y-12 mx-auto items-center md:mt-20 lg:min-h-screen"
      >
        <div className="bg-red-300 w-36 h-36 rounded-lg p-4 select-none ">
          <div className="bg-red-400  h-28 w-28 flex-col justify-end mx-auto blur-none z-40 items-center text-center text-xl text-white font-medium rounded-lg p-2">
            <div className="basis-[60%] text-5xl font-black ">
              <h2 className="text-border mt-1 ">{yearsOfExperience}</h2>
            </div>
            <div className="basis-[30%] text-xs mt-3 font-bold">
              Years of Experience
            </div>
          </div>
        </div>
        <div className="w-[80%] mx-auto">
          <div className="text-center max-w-2xl mx-auto tracking-normal leading-5 text-base sm:text-[1.1rem] lg:text-lg">
            In my {yearsOfExperience} years of experience in Frontend
            Development, I&apos;ve honed robust problem-solving and critical
            thinking skills. I possess the agility to swiftly adapt to emerging
            technologies and evolving work methodologies. Here are some skill
            sets I&apos;ve acquired and continue to actively enhance as each day
            unfolds.
          </div>
          <div className="flex justify-center select-none space-x-8 items-center  my-4">
            <SvgIcon
              icon="arrow-reversed"
              xmlns="http://www.w3.org/2000/svg"
              width="124"
              height="14"
              fill="currentColor"
              className="fill-gray-300  rotate-180"
            />
            <h5 className="text-gray-800 dark:text-white text-lg ">
              Experience
            </h5>
            <SvgIcon
              icon="arrow-forward"
              xmlns="http://www.w3.org/2000/svg"
              width="124"
              height="14"
              fill="currentColor"
              className="fill-gray-300  rotate-0"
            />
          </div>
        </div>
        <div className="flex flex-col relative space-y-16 md:space-y-10 lg:space-y-8 items-center">
          <div className="absolute left-[0%] md:left-[10%] lg:left-[50%] w-[3px] h-full top-8 md:top-4 bg-gradient-to-b from-teal-400 via-purple-400 to-red-400 border-[#ffffff80] border rounded lg:hidden"></div>

          <div className="drop-shadow-2xl flex flex-col space-y-4 mx-6 md:mx-20 lg:mx-0 md:w-[70%] lg:w-[80%] max-w-2xl rounded-[1.4rem] p-4 rounded-tl-none md:rounded-tr-none lg:rounded-tl-[2rem] hover:bg-gradient-to-tr hover:from-[#ffeff7] hover:to-[#F0F6FE] transition ease-in-out duration-500 hover:shadow-xl transform hover:-translate-x-2  bg-gradient-to-tr from-[#ffeff7] to-[#F0F6FE] dark:from-gray-900 dark:to-gray-600 dark:hover:bg-gradient-to-tr dark:hover:from-gray-900 dark:hover:to-gray-600 lg:bg-none">
            <div className="mx-auto text-center font-bold font-deca text-2xl text-indigo-500 dark:text-[#4cc9f0]">
              Web Dev
            </div>
            <div className="font-normal sm:text-[0.95rem] md:text-base text-center">
              Specialized in crafting visually stunning and user-friendly
              websites, leveraging my proficiency in ReactJS-centric tools. I
              infuse each project with a touch of personality and creativity.
            </div>
            <div className="flex space-x-4 ml-2 justify-center text-[0.9rem] dark:text-black">
              <span className="bg-gradient-to-b dark:from-indigo-500 dark:to-blue-400 from-indigo-200 to-blue-200 rounded-md text-center px-2 py-1">
                NextJs
              </span>
              <span className="bg-gradient-to-b dark:from-indigo-500 dark:to-blue-400 from-indigo-200 to-blue-200 rounded-md text-center px-2 py-1">
                TypeScript
              </span>
              <span className="bg-gradient-to-b dark:from-indigo-500 dark:to-blue-400 from-indigo-200 to-blue-200 rounded-md text-center px-2 py-1">
                Tailwind
              </span>
            </div>
            <div className="relative w-full h-80 rounded">
              <Image
                fill
                priority
                src={NextMockIcon}
                alt="Web Image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
                className="select-none object-cover rounded-md border-2 border-white shadow-md drop-shadow-md"
              />
            </div>
          </div>
          <div className="drop-shadow-xl flex flex-col space-y-4 mx-6 md:mx-20 lg:mx-0 md:w-[70%] lg:w-[80%] max-w-2xl rounded-[1.4rem] p-4 rounded-tl-none hover:bg-gradient-to-tr hover:from-[#ffeff7] hover:to-[#F0F6FE] transition ease-in-out duration-500 hover:shadow-xl transform hover:translate-x-2 bg-gradient-to-tr from-[#ffeff7] to-[#F0F6FE] dark:from-gray-900 dark:to-gray-600 dark:hover:bg-gradient-to-tr dark:hover:from-gray-900 dark:hover:to-gray-600 lg:bg-none">
            <div className="mx-auto text-center font-deca font-bold text-2xl dark:text-[#d58357] text-orange-500">
              Problem-Solver
            </div>
            <div className="font-normal sm:text-[0.95rem] md:text-base text-center">
              Meticulously unraveling complex challenges with my logic-driven
              approach. I transform problems into elegant solutions, crafting
              code that stands the test of real-world scenarios.
            </div>
            <div className="flex flex-row ml-2 space-x-4 justify-center text-[0.9rem] dark:text-black ">
              <span className="bg-gradient-to-b from-amber-100 to-orange-100 dark:from-amber-300 dark:to-orange-300 rounded-md text-center px-2 py-1">
                Strategic
              </span>
              <span className="bg-gradient-to-b from-amber-100 to-orange-100 dark:from-amber-300 dark:to-orange-300 rounded-md text-center px-2 py-1">
                Logical
              </span>
              <span className="bg-gradient-to-b from-amber-100 to-orange-100 dark:from-amber-300 dark:to-orange-300 rounded-md text-center px-2 py-1">
                Resourceful
              </span>
            </div>
            <div className="relative w-full h-80 rounded-[1.4rem] ">
              <Image
                fill
                priority
                src={VercelMockIcon}
                alt="Design Image"
                sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
                className="select-none object-cover rounded-md border-2 border-white shadow-md drop-shadow-md"
              />
            </div>
          </div>
        </div>
        <div className="w-[80%] max-w-2xl mx-auto">
          <div className="text-center font-normal mb-6 tracking-normal text-sm leading-5 sm:text-base lg:text-lg ">
            Here&apos;s a brief insight into the field I&apos;ve been immersed
            in. Take a moment to explore some selected projects I&apos;ve
            crafted within this domain. If you&apos;re curious for more details,
            feel free to grab a copy of my resume.
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
      </div>
    );
  }
);

Experience.displayName = "Experience";

export default Experience;

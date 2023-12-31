"use client";

import CategoryCard from "@/components/CategoryCard";
import useDarkMode from "@/hooks/useDarkMode";
import Flash from "@public/assets/icons/flash.svg";
import Game from "@public/assets/icons/game.svg";
import Growth from "@public/assets/icons/growth-investment.svg";
import Laptop from "@public/assets/icons/laptop.svg";
import LoveGesture from "@public/assets/icons/love-gesture.svg";
import Rocket from "@public/assets/icons/rocket.svg";
import Sparkles from "@public/assets/icons/sparkles.svg";
import Thinking from "@public/assets/icons/thinking.svg";
import AboutImage from "@public/assets/images/my-pic3.png";
import Image from "next/image";

export default function AboutPage() {
  const { currentTheme } = useDarkMode();

  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <main className="max-w-screen">
        <div className=" mx-auto pt-16 -pb-10 max-w-7xl">
          <div className=" mx-auto flex flex-col ">
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
          <CategoryCard />
          <div className=" text-[0.92rem] md:text-base md:text-md lg:text-lg xl:text-xl mx-auto font-light dark:text-white text-gray-900 ">
            <p className="mt-6 mb-12 leading-10 font-normal">
              A Front-end Engineer crafting cutting-edge, responsive, and
              user-centric web applications leveraging the latest technologies.{" "}
              <span className="inline-flex items-baseline">
                <Image
                  src={Rocket}
                  alt="Rocket Blasting Off SVG Vector Icon"
                  className="self-center w-8 h-8 mx-1"
                />
              </span>{" "}
              I firmly believe in achieving a harmonious UI architecture that
              seamlessly integrates goals and requirements into a sophisticated,
              efficient, and resilient design.{" "}
              <span className="inline-flex items-baseline">
                <Image
                  src={Sparkles}
                  alt="Sparkles SVG Vector Icon"
                  className="self-center w-8 h-8 mx-1"
                />
              </span>{" "}
              My expertise spans ReactJS, React Native, NextJS, and state
              management tools like Redux, complemented by proficiency in
              foundational web technologies such as HTML5, CSS3, and JavaScript.
              I specialize in developing expansive web applications, ensuring
              compatibility across various browsers, navigating design
              constraints on the web, and creating responsive user interfaces.{" "}
              <span className="inline-flex items-baseline">
                <Image
                  src={Flash}
                  alt="Lighting Flash SVG Vector Icon"
                  className="self-center w-8 h-8 mx-1"
                />
              </span>{" "}
            </p>

            <p className="text-gray-400 select-none font-semibold mb-1 dark:text-white/30 ">
              Contact
            </p>

            <p className="">
              Although I might not be a widely known individual, I&apos;m easily
              reachable through my social media channels. <br />
              Feel free to reach out to me via{" "}
              <span className="text-red-700 font-bold">GMail</span> at{" "}
              <a
                onClick={() =>
                  navigator.clipboard.writeText("caniggiathompson@gmail.com")
                }
                className=" underline underline-offset-4 decoration-2 decoration-red-400 group select-all font-semibold dark:hover:text-red-400 hover:text-red-700 cursor-pointer select "
                href="mailto:caniggiathompson@gmail.com"
              >
                {" "}
                caniggiathompson@gmail.com
              </a>{" "}
              or connect with me on{" "}
              <span className="text-blue-700 font-bold">LinkedIn</span> as{" "}
              <a
                href="https://www.linkedin.com/in/skippharaoh"
                className=" underline underline-offset-4 decoration-2 decoration-red-400 font-semibold dark:hover:text-red-400 hover:text-red-700 cursor-pointer select"
                rel="noopener noreferrer"
                target="blank"
              >
                {" "}
                Caniggia &quot;Skip&quot; Thompson
              </a>
              . Alternatively, you can drop me a direct message on{" "}
              <span className="text-orange-500 font-bold">TikTok</span> at{" "}
              <a
                href="https://www.tiktok.com/@skip_pharaoh"
                target="blank"
                rel="noopener noreferrer"
                className=" font-semibold underline underline-offset-4 decoration-2 decoration-red-400 dark:hover:text-red-400 hover:text-red-700 cursor-pointer select "
              >
                {" "}
                @skip_pharaoh
              </a>
              .{" "}
            </p>
          </div>
          <div className="flex mx-auto justify-center mt-16 select-none">
            <span className="font-black font-app text-2xl md:text-3xl align-text-bottom tracking-wider mx-3 md:mx-6">
              Peace &amp; Blessings
            </span>
            {currentTheme === "dark" ? (
              <Image
                src={LoveGesture}
                alt="love"
                width="30"
                className="-mt-4  filter invert sepia saturate-2500 hue-rotate-0 brightness-100 contrast-100"
              />
            ) : (
              <Image
                src={LoveGesture}
                alt="love"
                width="30"
                className="-mt-4  filter invert-0 sepia-100 saturate-2500 hue-rotate-0 brightness-100 contrast-100"
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

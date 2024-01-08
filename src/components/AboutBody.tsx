import ContactInformation from "@/components/ContactInformation";
import Flash from "@public/assets/icons/flash.svg";
import Rocket from "@public/assets/icons/rocket.svg";
import Sparkles from "@public/assets/icons/sparkles.svg";
import Image from "next/image";
import { forwardRef } from "react";

interface AboutBodyProps {}

const AboutBody = forwardRef<HTMLDivElement, AboutBodyProps>(
  ({ ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className=" text-[0.92rem] md:text-base md:text-md lg:text-lg xl:text-xl mx-auto font-light dark:text-white text-gray-900 "
      >
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
          My expertise spans ReactJS, React Native, NextJS, and state management
          tools like Redux, complemented by proficiency in foundational web
          technologies such as HTML5, CSS3, and JavaScript. I specialize in
          developing expansive web applications, ensuring compatibility across
          various browsers, navigating design constraints on the web, and
          creating responsive user interfaces.{" "}
          <span className="inline-flex items-baseline">
            <Image
              src={Flash}
              alt="Lighting Flash SVG Vector Icon"
              className="self-center w-8 h-8 mx-1"
            />
          </span>{" "}
        </p>
        <ContactInformation />
      </div>
    );
  }
);

AboutBody.displayName = "AboutBody";

export default AboutBody;

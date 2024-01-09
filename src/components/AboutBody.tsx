import ContactInformation from "@/components/ContactInformation";
import { forwardRef } from "react";
import SvgIcon from "./SvgIcon";

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
            <SvgIcon
              icon="rocket"
              viewBox="0 0 72 72"
              name="Rocket Blasting Off SVG Vector Icon"
              attributeName="Rocket Blasting Off SVG Vector Icon"
              className="self-center w-8 h-8 mx-1"
            />
          </span>{" "}
          I firmly believe in achieving a harmonious UI architecture that
          seamlessly integrates goals and requirements into a sophisticated,
          efficient, and resilient design.{" "}
          <span className="inline-flex items-baseline">
            <SvgIcon
              icon="sparkles"
              viewBox="0 0 72 72"
              name="Sparkles SVG Vector Icon"
              attributeName="Sparkles SVG Vector Icon"
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
            <SvgIcon
              icon="flash"
              viewBox="0 0 72 72"
              name="Lighting Flash SVG Vector Icon"
              attributeName="Lighting Flash SVG Vector Icon"
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

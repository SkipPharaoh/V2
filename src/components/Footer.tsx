import { forwardRef } from "react";
import FooterIcon from "./FooterIcon";
import GitHubStats from "./GitHubStats";
import InteractiveFooterText from "./InteractiveFooterText";

const footerIcons = [
  {
    href: "https://www.linkedin.com/in/skippharaoh",
    icon: "linkedin",
  },
  {
    href: "https://github.com/SkipPharaoh?tab=repositories",
    icon: "github",
  },
  {
    href: "mailto:caniggiathompson@gmail.com",
    icon: "email",
  },
];

interface FooterProps {}

const Footer = forwardRef<HTMLDivElement, FooterProps>(({ ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className=" flex select-none text-sm  py-16 mt-16 flex-col h-max items-center mx-auto justify-center"
    >
      <div className="flex justify-center space-x-4 md:space-x-6 dark:text-white/70 text-gray-500 text-[0.6rem] sm:text-xs md:text-sm lg:text-md mt-2">
        {footerIcons.map((links, key) => {
          return <FooterIcon key={key} href={links.href} icon={links.icon} />;
        })}
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

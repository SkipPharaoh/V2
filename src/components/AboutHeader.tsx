import { forwardRef } from "react";
import { IconType } from "./SvgIcon";
import HeaderSection from "./HeaderSection";

interface AboutHeaderProps {}
interface AboutHeaderInFo {
  role: string;
  icon: IconType;
  viewBox: string;
  altName: string;
}

const aboutHeaderInfo: AboutHeaderInFo[] = [
  {
    role: "Developer",
    icon: "laptop",
    viewBox: "0 0 504.8 504.8",
    altName: "Laptop SVG Vector Icon",
  },
  {
    role: "Investor",
    icon: "growth-investment",
    viewBox: "0 0 480 480",
    altName: "Growth Investment SVG Vector Icon",
  },
  {
    role: "Thinker",
    icon: "thinking",
    viewBox: "0 0 500 500",
    altName: "Avatar Thinking SVG Vector Icon",
  },
];

const AboutHeader = forwardRef<HTMLDivElement, AboutHeaderProps>(
  ({ ...props }, ref) => {
    return (
      <div ref={ref} {...props} className="">
        <HeaderSection
          title="About"
          className="pt-0"
          gradient="bg-gradient-to-br to-blue-500 via-red-400/90 from-yellow-500 mb-12 selection:text-gray-700 dark:selection:text-white/90 mt-6 mb-12"
          avatarIcon={{
            icon: "my-pic3",
            viewBox: "0 0 72 72",
            altName: "Caniggia Thompson SVG Icon",
          }}
          name={'Caniggia "Skip" Thompson'}
          nameIcon={{
            icon: "game",
            viewBox: "0 0 72 72",
            altName: "Game Controller SVG Icon",
          }}
          rolesWithIcons={aboutHeaderInfo}
          showSvgRow={false}
        />
      </div>
    );
  }
);

AboutHeader.displayName = "AboutHeader";

export default AboutHeader;

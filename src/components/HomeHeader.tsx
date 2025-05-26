import Avatar from "@public/assets/images/Home-Avatar.png";
import { forwardRef } from "react";
import HeaderSection from "./HeaderSection";

interface HomeHeaderProps {}

const HomeHeader = forwardRef<HTMLDivElement, HomeHeaderProps>(
  ({ ...props }, ref) => {
    return (
      <div ref={ref} {...props}>
        <HeaderSection
          homeStyle={{
            avatar: Avatar,
            alt: "Animated black man's head with gold hexagon directly behind",
            name: 'Caniggia "Skip" Thompson',
            handle: "@Skip",
            link: "https://www.linkedin.com/in/skippharaoh",
            city: "New York, US",
            bio: `A front-end engineer based in New York, US who develops modern, reactive, and user-friendly web applications using the latest technologies currently. I believe a perfect blend of UI architecture is one, where the goals and needs are accounted for in an elegant, efficient, and robust design of the UI.`,
          }}
        />
      </div>
    );
  }
);

HomeHeader.displayName = "HomeHeader";

export default HomeHeader;

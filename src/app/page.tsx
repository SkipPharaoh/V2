import Blob from "@/components/Blob";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import HeaderSection from "@/components/HeaderSection";
import Avatar from "@public/assets/images/Home-Avatar.png";

/**
 * TODO: Add CVA to entire application for cleaner, readable code. Link below:
 * https://cva.style/docs
 */

const homeStyleData = {
  avatar: Avatar,
  alt: "Animated black man's head with gold hexagon directly behind",
  name: 'Caniggia "Skip" Thompson',
  handle: "@Skip",
  link: "https://www.linkedin.com/in/skippharaoh",
  city: "New York, US",
  bio: `A front-end engineer based in New York, US who develops modern, reactive, and user-friendly web applications using the latest technologies currently. I believe a perfect blend of UI architecture is one, where the goals and needs are accounted for in an elegant, efficient, and robust design of the UI.`,
};

export default function HomePage() {
  return (
    <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <div className="lg:h-screen 2xl:h-max max-w-[90rem] mx-auto">
        <Blob />
        <HeaderSection homeStyle={homeStyleData} />
      </div>
      <div className="mt-28 mx-auto">
        <Experience />
      </div>
      <div className="mt-28 mx-auto">
        <Contact />
      </div>
    </div>
  );
}

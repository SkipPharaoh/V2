import { forwardRef } from "react";
import ExperienceActions from "./ExperienceActions";
import ExperienceCard from "./ExperienceCard";
import YearsOfExperienceCard from "./YearsOfExperienceCard";

// TODO: Add appropriate PNG image to replace both Mock images below
import NextMockIcon from "/public/assets/icons/next.svg";
import VercelMockIcon from "/public/assets/icons/vercel.svg";

interface ContactProps {}

const Experience = forwardRef<HTMLDivElement, ContactProps>(
  ({ ...props }, ref) => {
    const webDescription =
      "Specialized in crafting visually stunning and user-friendly websites, leveraging my proficiency in ReactJS-centric tools. I infuse each project with a touch of personality and creativity.";
    const solverDescription =
      "Meticulously unraveling complex challenges with my logic-drivenapproach. I transform problems into elegant solutions, crafting code that stands the test of real-world scenarios.";

    return (
      <div
        ref={ref}
        {...props}
        className="mt-32 lg:mt-8 flex flex-col justify-start space-y-12 mx-auto items-center md:mt-20 lg:min-h-screen"
      >
        <YearsOfExperienceCard />
        <div className="flex flex-col relative space-y-16 md:space-y-10 lg:space-y-8 items-center">
          <div className="absolute left-[0%] md:left-[10%] lg:left-[50%] w-[3px] h-full top-8 md:top-4 bg-gradient-to-b from-teal-400 via-purple-400 to-red-400 border-[#ffffff80] border rounded lg:hidden"></div>

          <ExperienceCard
            image={NextMockIcon}
            description={webDescription}
            variant={"web"}
            title={"Web Dev"}
            skills={["Next.js", "TypeScript", "Tailwind"]}
          />
          <ExperienceCard
            image={VercelMockIcon}
            description={solverDescription}
            variant={"solver"}
            title={"Problem Solver"}
            skills={["Strategic", "Logical", "Resourceful"]}
          />
        </div>
        <ExperienceActions />
      </div>
    );
  }
);

Experience.displayName = "Experience";

export default Experience;

import { forwardRef } from "react";
import ExperienceActions from "./ExperienceActions";
import ExperienceCard from "./ExperienceCard";
import YearsOfExperienceCard from "./YearsOfExperienceCard";
import WebDevCode from "/public/assets/images/lowlevelcode.png";
import ProblemSolver from "/public/assets/images/problemsolver.png";

interface ExperienceProps {}

interface ExperienceInfo {
  image: typeof WebDevCode | typeof ProblemSolver;
  description: string;
  variant: "web" | "solver";
  title: "Web Dev" | "Problem Solver";
  skills: [string, string?, string?];
}

const experienceInfo: ExperienceInfo[] = [
  {
    image: WebDevCode,
    description:
      "Specialized in crafting visually stunning and user-friendly websites, leveraging my proficiency in ReactJS-centric tools. I infuse each project with a touch of personality and creativity.",
    variant: "web",
    title: "Web Dev",
    skills: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    image: ProblemSolver,
    description:
      "Meticulously unraveling complex challenges with my logic-driven approach. I transform problems into elegant solutions, crafting code that stands the test of real-world scenarios.",
    variant: "solver",
    title: "Problem Solver",
    skills: ["Strategic", "Logical", "Resourceful"],
  },
];

const Experience = forwardRef<HTMLDivElement, ExperienceProps>(
  ({ ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className="mt-32 lg:mt-8 flex flex-col justify-start space-y-12 mx-auto items-center md:mt-20 lg:min-h-screen"
      >
        <YearsOfExperienceCard />
        <div className="flex flex-col relative space-y-16 md:space-y-10 lg:space-y-8 items-center">
          {experienceInfo.map((info, id) => {
            return (
              <ExperienceCard
                key={info.title}
                image={info.image}
                description={info.description}
                variant={info.variant}
                title={info.title}
                skills={info.skills}
              ></ExperienceCard>
            );
          })}
        </div>
        <ExperienceActions />
      </div>
    );
  }
);

Experience.displayName = "Experience";

export default Experience;

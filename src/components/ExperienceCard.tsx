import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { forwardRef } from "react";

interface ExperienceCardProps {
  variant: "web" | "solver";
  image: string | StaticImport;
  title: string;
  description: string;
  skills: [string, string?, string?];
}

const ExperienceCard = forwardRef<HTMLDivElement, ExperienceCardProps>(
  (
    {
      variant,
      image,
      title,
      description,
      skills: experienceCardSkills,
      ...props
    },
    ref
  ) => {
    const experienceCardStyling = {
      wrapperDiv: `flex flex-col space-y-4 mx-6 md:mx-20 lg:mx-0 md:w-[70%] lg:w-[80%] max-w-2xl rounded-[1.4rem] p-4 rounded-tl-none hover:bg-gradient-to-tr hover:from-[#ffeff7] hover:to-[#F0F6FE] transition ease-in-out duration-500 hover:shadow-xl transform bg-gradient-to-tr from-[#ffeff7] to-[#F0F6FE] dark:from-gray-900 dark:to-gray-600 dark:hover:bg-gradient-to-tr dark:hover:from-gray-900 dark:hover:to-gray-600 lg:bg-none hover:translate-x-2 ${
        variant === "web"
          ? "drop-shadow-2xl md:rounded-tr-none lg:rounded-tl-[2rem]"
          : "drop-shadow-xl"
      }`,
      titleDiv: `mx-auto text-center font-bold font-deca text-2xl ${
        variant === "web"
          ? "text-indigo-500 dark:text-[#4cc9f0]"
          : "text-orange-500 dark:text-[#d58357]"
      }`,
      skillsContainer: `flex space-x-4 ml-2 justify-center text-[0.9rem] dark:text-black ${
        variant !== "web" && "flex-row"
      }`,
      skill: `rounded-md text-center px-2 py-1 bg-gradient-to-b ${
        variant === "web"
          ? "dark:from-indigo-500 dark:to-blue-400 from-indigo-200 to-blue-200"
          : "dark:from-amber-300 dark:to-orange-300 from-amber-100 to-orange-100"
      }`,
      imageDiv: `relative w-full h-80 ${
        variant === "web" ? "rounded" : "rounded-[1.4rem]"
      }`,
      imageElement:
        "select-none object-cover rounded-md border-2 border-white shadow-md drop-shadow-md",
    };

    return (
      <div ref={ref} {...props} className={experienceCardStyling.wrapperDiv}>
        <div className={experienceCardStyling.titleDiv}>{title}</div>
        <div className="font-normal sm:text-[0.95rem] md:text-base text-center">
          {description}
        </div>
        <div className={experienceCardStyling.skillsContainer}>
          {experienceCardSkills.map((skill, key) => {
            return (
              <span key={key} className={experienceCardStyling.skill}>
                {skill}
              </span>
            );
          })}
        </div>
        <div className={experienceCardStyling.imageDiv}>
          <Image
            fill
            priority
            src={image}
            alt="Web Image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
            className={experienceCardStyling.imageElement}
          />
        </div>
      </div>
    );
  }
);

ExperienceCard.displayName = "ExperienceCard";

export default ExperienceCard;

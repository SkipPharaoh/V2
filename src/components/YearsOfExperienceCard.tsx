import SvgIcon from "./SvgIcon";

interface YearsOfExperienceCardProps {}

const YearsOfExperienceCard = ({ ...props }: YearsOfExperienceCardProps) => {
  const yearsOfExperience = new Date().getUTCFullYear() - 2021;

  return (
    <>
      <div
        {...props}
        className="bg-red-300 w-36 h-36 rounded-lg p-4 select-none "
      >
        <div className="bg-red-400  h-28 w-28 flex-col justify-end mx-auto blur-none z-40 items-center text-center text-xl text-white font-medium rounded-lg p-2">
          <div className="basis-[60%] text-5xl font-black ">
            <h2 className="text-border mt-1 ">{yearsOfExperience}</h2>
          </div>
          <div className="basis-[30%] text-xs mt-3 font-bold">
            Years of Experience
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto">
        <div className="text-center max-w-2xl mx-auto tracking-normal leading-5 text-base sm:text-[1.1rem] lg:text-lg">
          In my {yearsOfExperience} years of experience in Frontend Development,
          I&apos;ve honed robust problem-solving and critical thinking skills. I
          possess the agility to swiftly adapt to emerging technologies and
          evolving work methodologies. Here are some skill sets I&apos;ve
          acquired and continue to actively enhance as each day unfolds.
        </div>
        <div className="flex justify-center select-none space-x-8 items-center  my-4">
          <SvgIcon
            icon="arrow-reversed"
            xmlns="http://www.w3.org/2000/svg"
            width="124"
            height="14"
            fill="currentColor"
            className="fill-gray-300  rotate-180"
          />
          <h5 className="text-gray-800 dark:text-white text-lg ">Experience</h5>
          <SvgIcon
            icon="arrow-forward"
            xmlns="http://www.w3.org/2000/svg"
            width="124"
            height="14"
            fill="currentColor"
            className="fill-gray-300  rotate-0"
          />
        </div>
      </div>
    </>
  );
};

export default YearsOfExperienceCard;

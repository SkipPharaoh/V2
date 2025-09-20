import ExperienceTimeline from "@/components/ExperienceTimeline";
import HeaderSection from "@/components/HeaderSection";
import { experienceData } from "@public/Experience";
import Link from "next/link";
import { FiFileText } from "react-icons/fi";

export default function ExperiencePage() {
  const title = "Timeline";
  const subtitle =
    "A look at the places I've worked at so far. Feel free to view more information from my resume. 😎";

  const resumeLink = (
    <Link
      href="/Caniggia_Thompson_Resume.pdf"
      target="_blank"
      className="group flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base border-red-400 hover:bg-red-400 hover:text-white hover:drop-shadow-2xl text-red-500 rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-red-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-red-300"
    >
      <FiFileText className="dark:stroke-white stroke-red-400 stroke-2 group-hover:stroke-white" />
      <p>click here!</p>
    </Link>
  );

  return (
    <div className="min-h-[75vh] md:min-h-[73vh] px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 xl:px-80 mx-auto">
      <main className="max-w-screen">
        <HeaderSection
          title={title}
          subtitle={subtitle}
          gradient="selection:text-black/40 dark:selection:text-white/40 bg-gradient-to-r from-emerald-600 to-teal-400 bg-clip-text text-transparent"
          centerItems={false}
        />
        <div className="pb-10 text-center flex justify-center items-center py-10">
          <h2 className="pr-2">
            If you would like to view and/or download my resume,{" "}
          </h2>
          {resumeLink}
        </div>
        <div className="mt-10 md:ml-12 lg:ml-12 pl-20">
          <ExperienceTimeline experiences={experienceData} />
        </div>
      </main>
    </div>
  );
}

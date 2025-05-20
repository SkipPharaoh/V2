import InteractiveTimeline from "@/components/InteractiveTimeline";
import CategoryCard, { CategoryCardInfo } from "@/components/CategoryCard";
import { experienceData } from "@public/Experience";
import Link from "next/link";
import { FiFileText } from "react-icons/fi";

const expCategoriesData: CategoryCardInfo[] = [
  {
    category: "Professional",
    gradientColor: "from-[#ffe4e4] to-[#ffe2d4]",
    textColor: "text-[#cf3903]",
  },
  {
    category: "Educational",
    gradientColor: "from-[#e7ffdc] to-[#ddfff8]",
    textColor: "text-[#097360]",
  },
];

export default function ExperiencePage() {
  const resumeLink = (
    <Link
      href="/Caniggia_Thompson_Resume.pdf"
      target="_blank"
      className="group flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base border-red-400 hover:bg-red-400 hover:text-white hover:drop-shadow-2xl text-red-500 rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-red-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-red-300"
    >
      <FiFileText className="dark:stroke-white stroke-red-400 stroke-2 group-hover:stroke-white" />
      <p>here!</p>
    </Link>
  );

  return (
    <div className="min-h-[75vh] md:min-h-[73vh] px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 xl:px-80 mx-auto">
      <main className="max-w-screen">
        <div className=" mx-auto pt-16 -pb-10 max-w-7xl text-center">
          <h2 className="bg-gradient-to-br dark:selection:text-white/80 selection:text-black/70 to-yellow-500 dark:to-yellow-200 from-blue-700 dark:from-red-500 bg-clip-text text-transparent items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-deca font-bold mt-6 mb-12">
            Experience
          </h2>
          <CategoryCard
            categories={expCategoriesData}
            justifyHorizantalPos="evenly"
          />
        </div>
        <div className="pb-10 text-center flex justify-center items-center">
          <h2 className="pr-2">
            If you would like to download to view/download my resume, click{" "}
          </h2>
          {resumeLink}
        </div>
        <div className="w-full max-w-screen-xl mx-auto flex justify-center mb-20 rounded-xl bg-gradient-to-b from-[#C1BED0] dark:from-[#81559B] to-transparent drop-shadow-2xl border-x-fuchsia-600 border-y-[#FF312E] dark:border-white border-2">
          <InteractiveTimeline experiences={experienceData} />
        </div>
      </main>
    </div>
  );
}

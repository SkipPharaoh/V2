import InteractiveTimeline from "@/components/InteractiveTimeline";
import CategoryCard, { CategoryCardInfo } from "@/components/CategoryCard";
import { experienceData } from "@public/Experience";

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
        <div className="w-full max-w-screen-xl mx-auto flex justify-center mb-20">
          <InteractiveTimeline experiences={experienceData} />
        </div>
      </main>
    </div>
  );
}

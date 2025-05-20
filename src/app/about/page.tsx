import AboutBody from "@/components/AboutBody";
import AboutHeader from "@/components/AboutHeader";
import CategoryCard, { CategoryCardInfo } from "@/components/CategoryCard";
import PageSignature from "@/components/PageSignature";

/**
 * TODO: Add Leetcode states to the portfolio. Tentatively, planning to add it to the about page but I'm leaning towards adding it to the layout.
 * Leetcode API link: https://leetcode-stats-api.herokuapp.com/skipcodes
 * Leetcode discussion: https://leetcode.com/discuss/general-discussion/1297705/is-there-public-api-endpoints-available-for-leetcode
 * reddit thread: https://www.reddit.com/r/leetcode/comments/14dn47v/leetcode_api/
 * GitHub leetcode queries: https://github.com/akarsh1995/leetcode-graphql-queries?tab=readme-ov-file
 * */

const aboutCategoriesData: CategoryCardInfo[] = [
  {
    category: "Develop",
    gradientColor: "from-[#ffe4e4] to-[#ffe2d4]",
    textColor: "text-[#cf3903]",
  },
  {
    category: "Invest",
    gradientColor: "from-[#e7ffdc] to-[#ddfff8]",
    textColor: "text-[#097360]",
  },
  {
    category: "Anime",
    gradientColor: "from-[#cde1ff] to-[#f9d2ff]",
    textColor: "text-[#4e0aa2]",
  },
  {
    category: "Philosophy",
    gradientColor: "from-[#ffdaf9] to-[#ffdcdc]",
    textColor: "text-[#690c58]",
  },
];

export default function AboutPage() {
  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <main className="max-w-screen">
        <div className=" mx-auto pt-16 -pb-10 max-w-7xl">
          <AboutHeader />
          <CategoryCard categories={aboutCategoriesData} />
          <AboutBody />
          <PageSignature />
        </div>
      </main>
    </div>
  );
}

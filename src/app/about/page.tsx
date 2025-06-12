import AboutBody from "@/components/AboutBody";
import CategoryCard from "@/components/CategoryCard";
import HeaderSection from "@/components/HeaderSection";
import PageSignature from "@/components/PageSignature";
import {
  aboutCategoriesData,
  aboutHeaderData,
  avatarIconData,
  nameIconData,
} from "@public/About";

/**
 * TODO: Add Leetcode states to the portfolio. Tentatively, planning to add it to the about page but I'm leaning towards adding it to the layout.
 * Leetcode API link: https://leetcode-stats-api.herokuapp.com/skipcodes
 * Leetcode discussion: https://leetcode.com/discuss/general-discussion/1297705/is-there-public-api-endpoints-available-for-leetcode
 * reddit thread: https://www.reddit.com/r/leetcode/comments/14dn47v/leetcode_api/
 * GitHub leetcode queries: https://github.com/akarsh1995/leetcode-graphql-queries?tab=readme-ov-file
 * */

export default function AboutPage() {
  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <main className="max-w-screen">
        <div className="mx-auto -pb-10 max-w-7xl">
          <HeaderSection
            title="About"
            className=""
            gradient="bg-gradient-to-br to-blue-500 via-red-400/90 from-yellow-500 mb-12 selection:text-gray-700 dark:selection:text-white/90 mb-12"
            avatarIcon={avatarIconData}
            name={'Caniggia "Skip" Thompson'}
            nameIcon={nameIconData}
            rolesWithIcons={aboutHeaderData}
            showSvgRow={false}
          />
          <CategoryCard categories={aboutCategoriesData} />
          <AboutBody />
          <PageSignature />
        </div>
      </main>
    </div>
  );
}

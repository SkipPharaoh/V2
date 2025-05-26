import { CategoryCardInfo } from "@/components/CategoryCard";
import { AboutHeaderInFo, IconProperties } from "@/components/HeaderSection";

export const aboutCategoriesData: CategoryCardInfo[] = [
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

export const aboutHeaderData: AboutHeaderInFo[] = [
  {
    role: "Developer",
    icon: "laptop",
    viewBox: "0 0 504.8 504.8",
    altName: "Laptop SVG Vector Icon",
  },
  {
    role: "Investor",
    icon: "growth-investment",
    viewBox: "0 0 480 480",
    altName: "Growth Investment SVG Vector Icon",
  },
  {
    role: "Thinker",
    icon: "thinking",
    viewBox: "0 0 500 500",
    altName: "Avatar Thinking SVG Vector Icon",
  },
];

export const avatarIconData: IconProperties = {
  icon: "my-pic3",
  viewBox: "0 0 72 72",
  altName: "Caniggia Thompson's SVG Icon",
};

export const nameIconData: IconProperties = {
  icon: "game",
  viewBox: "0 0 72 72",
  altName: "Game Controller SVG Icon",
};

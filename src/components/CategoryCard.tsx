import { forwardRef } from "react";

interface CategoryCardProps {}

interface CategoryCardInfo {
  category: string;
  gradientColor: string;
  textColor: string;
}

const categoryCardInfo: CategoryCardInfo[] = [
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

const CategoryCard = forwardRef<HTMLDivElement, CategoryCardProps>(
  ({ ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className="flex select-none max-w-lg text-[0.65rem] md:text-sm lg:text-[0.9rem] xl:text-base items-center font-semibold justify-between w-[80%] sm:w-[75%] md:w-[70%] lg:w-[65%] xl:w-[60%]  mx-auto mt-6 mb-8 "
      >
        {categoryCardInfo.map((info, id) => {
          return (
            <div
              key={info.category}
              className={`bg-gradient-to-l ${info.gradientColor} rounded-[0.89rem] px-2 md:px-3 md:py-1 ${info.textColor}`}
            >
              {info.category}
            </div>
          );
        })}
      </div>
    );
  }
);

CategoryCard.displayName = "CategoryCard";

export default CategoryCard;

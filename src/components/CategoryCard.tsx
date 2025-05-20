import { forwardRef } from "react";

type contentPos =
  | "center"
  | "between"
  | "start"
  | "center-safe"
  | "end"
  | "end-safe"
  | "around"
  | "evenly"
  | "stretch"
  | "baseline"
  | "normal";

type itemPos =
  | "items-start"
  | "items-end"
  | "items-end-safe"
  | "items-center"
  | "items-center-safe"
  | "items-stretch"
  | "items-normal";

type selfPos =
  | "self-auto"
  | "self-start"
  | "self-center"
  | "self-center-safe"
  | "self-end"
  | "self-end-safe"
  | "self-stretch";

type xPosition = contentPos | itemPos | selfPos;
interface CategoryCardProps {
  categories: CategoryCardInfo[];
  justifyHorizantalPos?: xPosition;
}

export interface CategoryCardInfo {
  category: string;
  gradientColor: string;
  textColor: string;
}

const CategoryCard = forwardRef<HTMLDivElement, CategoryCardProps>(
  ({ categories, justifyHorizantalPos = "between", ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={`flex select-none max-w-lg text-[0.65rem] md:text-sm lg:text-[0.9rem] xl:text-base items-center font-semibold justify-${justifyHorizantalPos} w-[80%] sm:w-[75%] md:w-[70%] lg:w-[65%] xl:w-[60%]  mx-auto mt-6 mb-8`}
      >
        {categories.map((info, id) => {
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

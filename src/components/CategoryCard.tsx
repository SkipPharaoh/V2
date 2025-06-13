// components/CategoryCard.tsx
import { forwardRef } from "react";

export const enum xPosition {
  Center = "center",
  Between = "between",
  Start = "start",
  CenterSafe = "center-safe",
  End = "end",
  EndSafe = "end-safe",
  Around = "around",
  Evenly = "evenly",
  Stretch = "stretch",
  Baseline = "baseline",
  Normal = "normal",
  ItemsStart = "items-start",
  ItemsEnd = "items-end",
  ItemsEndSafe = "items-end-safe",
  ItemsCenter = "items-center",
  ItemsCenterSafe = "items-center-safe",
  ItemsStretch = "items-stretch",
  ItemsNormal = "items-normal",
  SelfAuto = "self-auto",
  SelfStart = "self-start",
  SelfCenter = "self-center",
  SelfCenterSafe = "self-center-safe",
  SelfEnd = "self-end",
  SelfEndSafe = "self-end-safe",
  SelfStretch = "self-stretch",
}

interface CategoryCardProps {
  categories: CategoryCardInfo[];
  justifyHorizantalPos?: xPosition;
}

export interface CategoryCardInfo {
  category: string;
  gradientColor: string;
  textColor: string;
}

const justifyMap: Record<xPosition, string> = {
  [xPosition.Center]: "justify-center",
  [xPosition.Between]: "justify-between",
  [xPosition.Start]: "justify-start",
  [xPosition.CenterSafe]: "justify-center",
  [xPosition.End]: "justify-end",
  [xPosition.EndSafe]: "justify-end",
  [xPosition.Around]: "justify-around",
  [xPosition.Evenly]: "justify-evenly",
  [xPosition.Stretch]: "justify-stretch",
  [xPosition.Baseline]: "justify-baseline",
  [xPosition.Normal]: "justify-normal",
  [xPosition.ItemsStart]: "items-start",
  [xPosition.ItemsEnd]: "items-end",
  [xPosition.ItemsEndSafe]: "items-end",
  [xPosition.ItemsCenter]: "items-center",
  [xPosition.ItemsCenterSafe]: "items-center",
  [xPosition.ItemsStretch]: "items-stretch",
  [xPosition.ItemsNormal]: "items-baseline",
  [xPosition.SelfAuto]: "self-auto",
  [xPosition.SelfStart]: "self-start",
  [xPosition.SelfCenter]: "self-center",
  [xPosition.SelfCenterSafe]: "self-center",
  [xPosition.SelfEnd]: "self-end",
  [xPosition.SelfEndSafe]: "self-end",
  [xPosition.SelfStretch]: "self-stretch",
};

const CategoryCard = forwardRef<HTMLDivElement, CategoryCardProps>(
  ({ categories, justifyHorizantalPos = xPosition.Between, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={`flex ${justifyMap[justifyHorizantalPos]} select-none max-w-lg text-[0.65rem] md:text-sm lg:text-[0.9rem] xl:text-base items-center font-semibold w-[80%] sm:w-[75%] md:w-[70%] lg:w-[65%] xl:w-[60%] mx-auto mt-6 mb-8`}
      >
        {categories.map((info) => (
          <div
            key={info.category}
            className={`bg-gradient-to-l ${info.gradientColor} rounded-[0.89rem] px-2 md:px-3 md:py-1 ${info.textColor}`}
          >
            {info.category}
          </div>
        ))}
      </div>
    );
  }
);

CategoryCard.displayName = "CategoryCard";

export default CategoryCard;

"use client";

import { forwardRef } from "react";
import SvgIcon, { IconType } from "./SvgIcon";

interface TechCardProps {
  id: number;
  alt: string;
  changeId: (id: number) => void;
  icon: IconType | string;
  viewBox: string;
}

const TechCard = forwardRef<HTMLDivElement, TechCardProps>(
  ({ id, alt, changeId, icon, viewBox, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className="tech group relative dark:bg-white/25 lg:bg-none lg:dark:hover:bg-slate-50/50  h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 tech rounded-md sm:rounded-lg md:rounded-xl"
        onClick={() => {
          changeId(id);
          window.scrollTo(0, 0);
        }}
      >
        <div className="h-full w-full p-2 md:p-3 lg:p-4 relative hover:cursor-pointer rounded-lg md:rounded-xl lg:rounded-2xl">
          <SvgIcon
            icon={icon as IconType}
            fill="currentColor"
            viewBox={viewBox}
            className="select-none group-hover:scale-[1.1] transition-all duration-700 object-contain"
            name={alt}
            attributeName={alt}
          />
        </div>
      </div>
    );
  }
);

TechCard.displayName = "TechCard";

export default TechCard;

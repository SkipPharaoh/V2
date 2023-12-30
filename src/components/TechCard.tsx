"use client";

import { forwardRef } from "react";
import Image from "next/image";

interface TechCardProps {
  id: number;
  main: string;
  alt: string;
  changeId: (id: number) => void;
}

const TechCard = forwardRef<HTMLDivElement, TechCardProps>(
  ({ id, main, alt, changeId, ...props }, ref) => {
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
        <div className="h-full w-full p-2 md:p-3 lg:p-4 relative">
          <Image
            src={main}
            fill
            className="select-none group-hover:scale-[1.1] hover:cursor-pointer transition-all duration-700 object-contain p-2 md:p-3 rounded-lg md:rounded-xl lg:rounded-2xl"
            alt={alt}
            sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
          />
        </div>
      </div>
    );
  }
);

TechCard.displayName = "TechCard";

export default TechCard;

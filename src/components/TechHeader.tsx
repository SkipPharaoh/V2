import { forwardRef } from "react";
import HeaderSection from "./HeaderSection";

interface TechHeaderProps {}

const TechHeader = forwardRef<HTMLDivElement, TechHeaderProps>(
  ({ ...props }, ref) => {
    const title = "Tech Stack";
    const subtitle =
      "Just like any other dev, I also spend more time searching and experimenting tools than actually coding some senseful things 😎";

    return (
      <div ref={ref} {...props} className="">
        <HeaderSection
          title={title}
          subtitle={subtitle}
          gradient="bg-gradient-to-br dark:to-yellow-200 to-yellow-500 dark:from-red-500 from-blue-700"
          centerItems={false}
        />
      </div>
    );
  }
);

TechHeader.displayName = "TechHeader";

export default TechHeader;

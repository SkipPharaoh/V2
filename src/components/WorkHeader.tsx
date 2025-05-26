import { forwardRef } from "react";
import HeaderSection from "./HeaderSection";

interface WorkHeaderProps {}

const WorkHeader = forwardRef<HTMLDivElement, WorkHeaderProps>(
  ({ ...props }, ref) => {
    const title = "Work";
    const subtitle =
      "It has been an absolute pleasure to put my heart and soul into these projects. While you're here, browse these projects. 💖";

    return (
      <div ref={ref} {...props} className="items-center">
        <HeaderSection
          title={title}
          subtitle={subtitle}
          gradient="bg-gradient-to-tr from-[#2DE1C2] to-blue-500"
          centerItems={true}
        />
      </div>
    );
  }
);

WorkHeader.displayName = "WorkHeader";

export default WorkHeader;
